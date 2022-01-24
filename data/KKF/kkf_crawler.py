import json
import os
import regex

from bs4.element import Tag

from crawler import Crawler


class KKFPageListProvider(Crawler):
    ROOT_URL = 'https://www.thekkf.or.kr'
    LIST_URL_FILE_NAME = 'kkf_list_page_urls.txt'

    def load_list_page_urls(self):
        with open(self.LIST_URL_FILE_NAME) as file:
            return file.read().splitlines()

    def save_list_page_urls(self):
        with open(self.LIST_URL_FILE_NAME, 'w') as file:
            file.writelines('\n'.join(self.__get_all_list_page_urls()))

    def __get_all_list_page_urls(self):
        GROUP_PAGE_URL_PREFIX = (
            self.ROOT_URL + '/new_home/03_kkf_service/03_approval_2.php?gid='
        )

        all_list_page_urls = []

        for i in range(1, 11):
            group_page_url = GROUP_PAGE_URL_PREFIX + str(i)
            html_body = self.get_html_body(group_page_url)
            pagination = html_body.find('div', class_='paging')
            pages = pagination.find_all('a')
            page_urls = [self.ROOT_URL + page['href'] for page in pages]
            all_list_page_urls.extend(page_urls)

        return all_list_page_urls


class KKFPageProvider(Crawler):
    ROOT_URL = 'https://www.thekkf.or.kr'
    DOG_PAGE_URL_FILE_NAME = 'kkf_dog_page_urls.txt'

    def load_all_dog_page_links(self):
        with open(self.DOG_PAGE_URL_FILE_NAME) as file:
            return file.read().splitlines()

    def save_all_dog_page_links(self):
        SERVICE_PAGE_URL_PREFIX = self.ROOT_URL + '/new_home/03_kkf_service/'
        list_page_urls = KKFPageListProvider().load_list_page_urls()

        all_urls = []

        for list_page_url in list_page_urls:
            html_body = self.get_html_body(list_page_url)
            url_postfixes = html_body.select('li.w25p > a')
            full_urls = [
                SERVICE_PAGE_URL_PREFIX +
                url['href'] for url in url_postfixes
            ]
            all_urls.extend(full_urls)

        with open(self.DOG_PAGE_URL_FILE_NAME, 'w') as file:
            file.writelines('\n'.join(all_urls))


class KKFBreedNameDictionary(Crawler):
    ROOT_URL = 'https://www.thekkf.or.kr'
    ENG_TO_KOR_DICT_NAME = 'kkf_eng_to_kor.json'
    KOR_TO_ENG_DICT_NAME = 'kkf_kor_to_eng.json'

    def __init__(self) -> None:
        super().__init__()

        if not os.path.exists(self.ENG_TO_KOR_DICT_NAME):
            self.__save_breed_name_dictionary()

        self.eng_to_kor = self.__load_eng_to_kor_dictionary()
        self.kor_to_eng = self.__load_kor_to_eng_dictionary()

    def __load_eng_to_kor_dictionary(self):
        with open(self.ENG_TO_KOR_DICT_NAME, encoding='utf8') as file:
            return json.load(file)

    def __load_kor_to_eng_dictionary(self):
        with open(self.KOR_TO_ENG_DICT_NAME, encoding='utf8') as file:
            return json.load(file)

    def __save_breed_name_dictionary(self):
        self.kor_to_eng = dict()
        self.eng_to_kor = dict()

        list_page_urls = KKFPageListProvider().load_list_page_urls()

        for list_page_url in list_page_urls:
            html_body = self.get_html_body(list_page_url)
            names = html_body.select('div.li_txt > p')
            names = [name.text for name in names]

            for i in range(len(names) // 2):
                korean_name = names[2 * i]
                english_name = names[2 * i + 1].lower()
                self.kor_to_eng.update({korean_name: english_name})
                self.eng_to_kor.update({english_name: korean_name})

        # print(self.kor_to_eng)
        # print(self.eng_to_kor)

        with open(self.ENG_TO_KOR_DICT_NAME, 'w', encoding='utf8') as file:
            json.dump(self.eng_to_kor, file, ensure_ascii=False, indent=2)
        with open(self.KOR_TO_ENG_DICT_NAME, 'w', encoding='utf8') as file:
            json.dump(self.kor_to_eng, file, ensure_ascii=False, indent=2)


class KKFCrawler(Crawler):
    """
    한국 애견 연맹 크롤링 (Korea Kennel Federation)

    Returns:
        dict: 종 이름, 정보 (특징 + 습성/성격을 하나로 합치기)
    """
    dictionary = KKFBreedNameDictionary()

    def generator(self, start=0):
        urls = KKFPageProvider().load_all_dog_page_links()
        end = len(urls)

        for url in urls[start:end]:
            print(start, end=' ')
            start += 1
            yield self.crawl(url)
            print()

    def crawl(self, url: str):
        html_body = self.get_html_body(url)

        breed_name = html_body.find('h4')
        breed_name = breed_name.text
        english_breed_name = self.dictionary.kor_to_eng.get(breed_name)
        print(breed_name, end=' ')

        history = self.__get_keyword_description(html_body, '연혁')
        if not history:
            print('Problem!!!', end='')
            return {
                english_breed_name: {}
            }

        character = self.__get_keyword_description(html_body, '특징')
        personality = self.__get_keyword_description(html_body, '성격')
        personality = (character + '\n' + personality).strip()

        if english_breed_name:
            return {
                english_breed_name: {
                    'name': breed_name,
                    'name_english': english_breed_name,
                    'history': history,
                    'personality': personality
                }
            }
        else:
            raise KeyError('대응하는 영문 이름이 없음')

    def __get_keyword_description(self, html_body: Tag, keyword: str):
        """
        일반적인 경우
            - p - span - font - b (성격)
            - p - span - font (성격 설명)

        새로 추가된 경우
            - p - span (연혁)
            - p - span - span (연혁 설명)
            - div - span - b (성격)
            - div - span (성격 설명)
        """

        target_tag = html_body.find('b', text=regex.compile(keyword))
        if not target_tag:
            return ''

        target_tag = target_tag.find_parent('p')
        # print(target_tag)
        next_tag = target_tag.next_sibling
        # print(next_tag)

        # 계속 옆 태그로 이동하면서 내용 수집
        # 옆 자식에 b 태그가 있으면 종료
        all_contents = []
        while True:
            contents = next_tag.find('font')
            if not contents:
                break

            all_contents.append(contents.text)
            
            # print(next_tag)
            next_tag = next_tag.next_sibling
            
            if next_tag.find('b'):
                break

        return '\n'.join(all_contents)


def test_crawl_one():
    ROOT_URL = 'https://www.thekkf.or.kr/new_home/03_kkf_service'
    cattle_dog_url = ROOT_URL + '/03_approval_3.php?gid=1&idx=2'
    print(KKFCrawler().crawl(cattle_dog_url))


def test_crawl_all():
    generator = KKFCrawler().generator(start=0)
    for _ in generator:
        pass


def save_as_json():
    generator = KKFCrawler().generator(start=0)

    with open('result.json', 'w', encoding='utf8') as file:
        data = {}
        for dog_info in generator:
            data.update(dog_info)
        json.dump(data, file, ensure_ascii=False, indent=2)


def insert_json(base, adding, out):
    """
    KKF 크롤링 결과에 DogTime 데이터 추가하기
    """

    base_file = open(base, encoding='utf8')
    base_dict = json.load(base_file)
    base_file.close()

    adding_file = open(adding, encoding='utf8')
    adding_dict = json.load(adding_file)
    adding_file.close()

    new_dict = {}

    for key in base_dict:
        info = adding_dict.get(key)
        if info:
            base_dict[key].update(info)
            new_dict.update({key: base_dict[key]})
        else:
            print(key)

    with open(out, 'w', encoding='utf8') as file:
        json.dump(new_dict, file, ensure_ascii=False, indent=2)


def add_json(base_file_name, adding_file_name, out_name):
    """
    base file에 additional file 내용 추가
    """
    base_file = open(base_file_name, encoding='utf8')
    base_json = json.load(base_file)
    base_file.close()

    additional_file = open(adding_file_name, encoding='utf8')
    additional_json = json.load(additional_file)
    additional_file.close()

    base_json.update(additional_json)

    # new_dict = {}

    # for key in base_json:
    #     additional_info = additional_json.get(key)
    #     if additional_info:
    #         base_json[key].update(additional_info)
    #         new_dict.update({key: base_json[key]})

    with open(out_name, 'w', encoding='utf8') as file:
        json.dump(base_json, file, ensure_ascii=False, indent=2)


def compare_json(base_file_name, adding_file_name, out_name):
    base_file = open(base_file_name, encoding='utf8')
    base_json = json.load(base_file)
    base_file.close()

    additional_file = open(adding_file_name, encoding='utf8')
    additional_json = json.load(additional_file)
    additional_file.close()

    base_keys = set(base_json.keys())
    additional_keys = set(additional_json.keys())
    difference_keys = additional_keys.difference(base_keys)

    with open(out_name, 'w', encoding='utf8') as file:
        json.dump(list(difference_keys), file, ensure_ascii=False, indent=2)


def make_template_for_omitted_dogs():
    dictionary = KKFBreedNameDictionary()
    new_dict = {}

    with open('kkf_work_error_log.txt', encoding='utf8') as file:
        dog_names = file.read().splitlines()
        
        for dog_name in dog_names:
            dog_info_template = {
                dictionary.kor_to_eng[dog_name]: {
                    'name': dog_name,
                    'name_english': dictionary.kor_to_eng[dog_name],
                    'history': '',
                    'personality': ''
                }
            }

            new_dict.update(dog_info_template)
    
    with open('kkf_result_compensation.json', 'w', encoding='utf8') as file:
        json.dump(new_dict, file, ensure_ascii=False, indent=2)


def change_dict_key():
    with open('kkf_result_compensation.json', encoding='utf8') as file:
        new_dict = {}

        dog_info = json.load(file)
        for dog_name in dog_info:
            info = dog_info[dog_name]
            eng_name = info['name_english']
            new_dict.update({eng_name: info})
        
        with open('kkf_result_comp.json', 'w', encoding='utf8') as f:
            json.dump(new_dict, f, ensure_ascii=False, indent=2)


insert_json(
    'merge_result.json',
    'dogtime_images.json',
    'merge_result_with_images.json'
)
