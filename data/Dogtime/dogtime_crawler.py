from typing import List
import json
import os
import os.path
import re
import regex

from bs4.element import Tag

from Dogtime_KKF.crawler import Crawler


class DogTimeListProvider(Crawler):
    DOGTIME_LIST_FILE_NAME = 'dogtime_list.txt'

    def load(self, file_name=DOGTIME_LIST_FILE_NAME) -> List[str]:
        """
        DogTime의 견종 명칭 목록을 반환.
        """

        if not os.path.exists(file_name):
            self.save()

        file = open(file_name)
        links = file.read().splitlines()
        file.close()

        return links

    def save(self):
        """
        Dogtime에 있는 견종 목록 추출 (약 390여 마리)

        이 목록을 이용해 크롤링 가능
        """

        # 해당 페이지의 html body를 가져옴
        URL = 'https://dogtime.com/dog-breeds/profiles'
        html_body = self.get_html_body(URL)

        # 해당 페이지 내 각 견종 상세 페이지로 가는 URL 추출
        items = html_body.find_all(name='a', class_='list-item-title')
        urls = [item['href'].rsplit('/', maxsplit=1)[-1] for item in items]

        # URL들을 파일로 저장
        with open(self.DOGTIME_LIST_FILE_NAME, 'w') as file:
            file.writelines('\n'.join(urls))


class DogTimeCrawler(Crawler):

    def generate_dog_info(self, dog_names: List[str], start=0):
        end = len(dog_names)

        for dog_name in dog_names[start: end]:
            print(start, dog_name)
            start += 1
            yield self.crawl(dog_name)

    def crawl(self, dog_name: str) -> dict:
        """
        특징 명칭 & 평균 점수 (별 개수) 반환

        Returns:
            Adaptability: {
                rating: 5,
                traits: {...}
            }
        """

        URL_prefix = 'https://dogtime.com/dog-breeds/'
        html_body = self.get_html_body(URL_prefix + str(dog_name))

        # 전반적인 특징들
        overall_traits = html_body.find_all(
            class_='breed-characteristics-ratings-wrapper'
        )

        # 전반적인 특징들의 명칭과 평균 점수 저장
        total_trait_info = self.__get_information_of_traits(overall_traits)
        # pprint(total_trait_info)

        # 체고와 체중 저장
        vital_stats = dict()
        vital_stats.update(self.__get_weights(html_body))
        vital_stats.update(self.__get_heights(html_body))
        # pprint(vital_stats)

        # 견종 이름 가져오기
        breed_name = html_body.find('h1').text.lower()
        # print(breed_name)

        # 모든 정보들을 하나로 묶어 반환!
        breed_info = {
            breed_name: {
                'name_english': breed_name,
                'stats': vital_stats,
                'traits': total_trait_info,
            }
        }
        # print(breed_info)
        return breed_info

    def __get_information_of_traits(self, overall_traits: List[Tag]) -> dict:
        """
        전반적인 특징들과 하위 특징들 정보 결합해서 반환
        """

        info = dict()

        for overall_trait in overall_traits:
            overall_trait_itself = overall_trait.div

            overall_trait_title = overall_trait_itself.find(
                class_='characteristic-title'
            )
            # print(overall_trait_title.text) # Adapatability
            overall_trait_title = overall_trait_title.text.strip()

            overall_trait_rating = overall_trait_itself.find(
                class_='characteristic-star-block'
            )
            # print(overall_trait_rating.div['class'][1]) # star-5
            overall_trait_rating = overall_trait_rating.div['class'][1]
            # 맨 끝 숫자만 추출
            overall_trait_rating = overall_trait_rating[-1]
            assert overall_trait_rating.isdecimal()

            info[overall_trait_title] = {
                'rating': overall_trait_rating,
                'sub_traits': self.__get_information_of_sub_traits(
                    overall_trait
                )
            }

        return info

    def __get_information_of_sub_traits(self, overall_trait: Tag) -> dict:
        """
        하위 특징들 명칭 & 점수 반환

        Returns:
            'Energy Level': '5',
            'Exercise Needs': '4',
            'Intensity': '2',
            'Potential For Playfulness': '4'
        """

        info = dict()

        sub_traits = overall_trait.find_all(class_='child-characteristic')

        for sub_trait in sub_traits:
            trait_title = sub_trait.find(class_='characteristic-title')
            trait_title = trait_title.text

            trait_rating = sub_trait.find(class_='characteristic-star-block')
            trait_rating = trait_rating.div['class'][1]

            trait_rating = trait_rating[-1]
            assert trait_rating.isdecimal()

            info[trait_title] = trait_rating

        return info

    def __get_weights(self, html_body: Tag) -> dict:
        """
        체중 반환. 단위는 kg. (원래는 pound)
        """

        weight = html_body.find('div', class_='vital-stat-weight')
        if not weight:
            print('No Weight')
            weight_min = 0
            weight_max = 0
        else:
            weight_text = weight.next_sibling
            weights = re.findall('[0-9]+', weight_text)

            if len(weights) == 2:
                weight_min, weight_max = [
                    int(float(weight) * 0.454) for weight in weights
                ]
            else:
                print('No Weight')
                weight_min = 0
                weight_max = 0

        # print(min_weight, max_weight)
        return {
            'weight_min': weight_min,
            'weight_max': weight_max
        }

    def __get_heights(self, html_body: Tag) -> dict:
        """
        체고(몸 길이) 반환. 단위는 cm
        - 원래 체고 단위는 feet와 inch가 쓰이고 있음.
            - 예시
            - Akita는 2 feet to 2 feet, 4 inches
            - Alaskan Malamute는 1 foot, 11 inches to 2 feet, 1 inch

        이를 정규 표현식으로 추출하여 합산해 반환함
        """

        height = html_body.find('div', class_='vital-stat-height')
        if not height:
            print('No height')
            return {
                'height_min': 0,
                'height_max': 0,
            }

        height_text = height.next_sibling

        heights = re.findall(r'\d+', height_text)
        if len(heights) <= 1:
            print('No heights')
            return {
                'height_min': 0,
                'height_max': 0,
            }

        # inch로만 구성된 경우 체크
        inch_only_pattern = regex.compile(
            r'[a-zA-Z ]*(\d+)\p{N}?[.\d]* to[a-zA-Z ]*(\d+)\p{N}?[.\d]*'
        )
        heights = inch_only_pattern.match(height_text)
        if heights:
            height_min, height_max = [
                int(float(height) * 2.54) for height in heights.groups()
            ]

        else:
            # 정규 표현식으로 foot, inch, foot, inch를 걸러내기
            foot_inch_pattern = re.compile(
                r'(\d+ f..t)*[, ]*(\d+ \w+)* to (\d+ f..t)*[, ]*(\d+ \w+)*'
            )
            result = foot_inch_pattern.match(height_text)
            heights = result.groups()
            heights = [
                int(height.split()[0]) if height else 0 for height in heights
            ]
            # print(heights)

            # 그 결과들을 단위 변환해서 합친다!
            heights[0] *= 30.48 if heights[0] else 0
            heights[2] *= 30.48 if heights[2] else 0
            heights[1] *= 2.54 if heights[1] else 0
            heights[3] *= 2.54 if heights[3] else 0

            height_min = int(heights[0] + heights[1])
            height_max = int(heights[2] + heights[3])

        # print(min_height, max_height)
        return {
            'height_min': height_min,
            'height_max': height_max,
        }


def test_crawl_one():
    DogTimeCrawler().crawl('yorkshire-terrier')
    

def test_crawl_all():
    # 작동 전 잘 되는지 테스트
    dog_names = DogTimeListProvider().load()
    dog_info_generator = DogTimeCrawler().generate_dog_info(dog_names)

    for _ in dog_info_generator:
        pass


def crawl_all():
    """
    JSON 형식 변경 가능 (리스트 / 딕셔너리)
    """

    dog_names = DogTimeListProvider().load()
    dog_info_generator = DogTimeCrawler().generate_dog_info(dog_names)

    with open('result.json', 'w') as file:
        data = []
        for dog_info in dog_info_generator:
            data.append(dog_info)
        json.dump(data, file, indent=2)


def convert_json_list_to_dict():
    """
    리스트 형식으로 저장된 JSON 파일을 
    견종 이름(key) - 견종 정보(value)의 딕셔너리로 변환
    """
    dog_info_dict = {}

    with open('dogtime_result.json', encoding='utf8') as file:
        dog_info_list = json.load(file)
        # pprint(dog_info_list[:10])

        for dog_info in dog_info_list:
            name = dog_info['breed_name'].lower()
            new_info = {
                name: {
                    'name_english': name,
                    'stats': dog_info['stats'],
                    'traits': dog_info['traits']
                }
            }

            dog_info_dict.update(new_info)
        
        with open('dogtime_result_dict.json', 'w', encoding='utf8') as new_file:
            json.dump(dog_info_dict, new_file, ensure_ascii=False, indent=2)


# test_crawl_one()
