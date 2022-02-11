from pprint import pprint
from typing import List
from pathlib import Path
import json
import requests

from bs4 import BeautifulSoup


class Crawler:

    def get_html_body(self, URL):
        # HTTP GET Request
        response = requests.get(URL)

        # HTML 소스 가져오기
        html = response.text

        # BeautifulSoup: HTML 소스 -> Python 객체로 변환
        # 첫 인자는 HTML 소스, 두 번째는 어떤 parser 이용할지
        # 예제에서는 Python 내장 html parser 이용
        # P.S. 공식 문서에서는 lxml이 더 빠르다고 함
        html_body = BeautifulSoup(html, features='lxml')
        return html_body


class NiasCrawler(Crawler):
    """
    국립축산과학원 크롤링 (National Institute Of Animal Science)

    인자: 각 견종 페이지로 가는 URL 맨 뒤 숫자 (1 ~ 24)
    """

    def crawl_nias(self, dog_number: int):

        # 입력받은 견종 고유번호를 토대로 URL 생성
        URL_prefix = 'https://www.nias.go.kr/companion/dog_stage.do \
            ?cmCode=M170718155128718&gubun='
        # 해당 URL의 html body 얻기
        html_body = self.get_html_body(URL_prefix + str(dog_number))

        # 종 이름 찾기 (h4 태그)
        species = html_body.find(name='h4')
        species = species.text.strip()

        # 성격 항목명 찾기 (h5 태그이며, 제목에 '성격'이 들어감)
        personality = html_body.find(name='h5', text='성격')
        # 성격 묘사는 성격 항목명 다다음 DOM에 있음
        personality_desc = personality.next_sibling.next_sibling
        personality = personality_desc.text

        # 종 크기 항목명 찾기
        size = html_body.find(name='h5', text='크기')
        # 종 크기에 대한 묘사는 항목명 다다음 DON에 있음
        size_desc = size.next_sibling.next_sibling
        # 설명 줄 바꿈: 체고와 체중을 br 태그로 나누고 있기 때문
        if size_desc.br:
            size_desc.br.replace_with('^')
        size = list(map(str.strip, size_desc.text.split('^')))

        data = {
            'species': species,
            'personality': personality,
            'size': size
        }

        print(data)
        return data


def sort_data_by_keyword(keyword_location: List[str]):
    def find_info_by_keyword(value: dict):
        for location in keyword_location:
            value = value.get(location)
        return value

    def print_values(values: List[dict]):
        for value in values:
            name = value['name']
            physical_need = value['traits']['Physical Needs']['rating']
            # image = value['images']
            pprint((name, physical_need))

    with open('merge_result_with_images.json', encoding='utf8') as file:
        total_info = json.load(file)
        values = list(total_info.values())
        values.sort(key=find_info_by_keyword)
        print_values(values[:10])


def flatten_dict():
    def flatten_sub_dict_as_prefixed(info: dict, prefix: str):
        new_dict = {}
        new_dict[prefix] = int(info['rating'])

        sub_traits = info['sub_traits']
        for key, value in sub_traits.items():
            new_dict[prefix + '_' + key] = int(value)
        return new_dict

    with open('merge_result_with_images.json', encoding='utf8') as file:
        total_info = json.load(file)
        for dog_name in total_info.keys():
            dog_info = total_info[dog_name]

            # 체중, 체고 추출
            stats = dog_info['stats']
            dog_info.update({key: value for key, value in stats.items()})
            del dog_info['stats']

            # 특징 추출
            adaptable = flatten_sub_dict_as_prefixed(
                dog_info['traits']['Adaptability'], 'adaptable'
            )
            friendly = flatten_sub_dict_as_prefixed(
                dog_info['traits']['All Around Friendliness'], 'friendly'
            )
            health = flatten_sub_dict_as_prefixed(
                dog_info['traits']['Health And Grooming Needs'], 'health'
            )
            trainable = flatten_sub_dict_as_prefixed(
                dog_info['traits']['Trainability'], 'trainable'
            )
            physical = flatten_sub_dict_as_prefixed(
                dog_info['traits']['Physical Needs'], 'physical'
            )
            dog_info.update(adaptable)
            dog_info.update(friendly)
            dog_info.update(health)
            dog_info.update(trainable)
            dog_info.update(physical)
            del dog_info['traits']

            # 이미지 제거
            del dog_info['images']

            # 그 외 필요한 칼럼들 추가
            dog_info['image'] = ''
            dog_info['mbti'] = ''

        with open('merge_result_flattened.json', 'w', encoding='utf8') as new_file:
            json.dump(list(total_info.values()), new_file, ensure_ascii=False, indent=2)


def union_json(base_file_name, adding_file_name, out_name):
    matching_name = {
        'chinese shar pei': 'chinese shar-pei',
        'jindo': 'korean jindo dog',
        'petit basset griffon vendeen': 'petit basset griffon vendéen'
    }

    base_file = open(base_file_name, encoding='utf8')
    base_json = json.load(base_file)
    base_keys = base_json.keys()
    base_file.close()

    additional_file = open(adding_file_name, encoding='utf8')
    additional_json = json.load(additional_file)
    additional_file.close()

    new_list = []

    for base_key in base_keys:
        matching_info = additional_json.get(base_key)
        if not matching_info:
            alias = matching_name[base_key]
            matching_info = additional_json.get(alias)
        new_list.append({
            'name_english': base_key,
            'image': matching_info
        })
        
    with open(out_name, 'w', encoding='utf8') as file:
        json.dump(new_list, file, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    union_json(
        f'{Path(__file__).parent.parent}/data.json',
        f'{Path(__file__).parent.parent}/Dogtime/dogtime_profile_images.json',
        f'{Path(__file__).parent}/dogtime_profile_images_matching.json'
    )
