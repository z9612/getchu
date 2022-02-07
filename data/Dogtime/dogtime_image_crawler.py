from pprint import pprint
from typing import List
from pathlib import Path
import json

from Dogtime_KKF.crawler import Crawler
from Dogtime.dogtime_crawler import DogTimeListProvider


class DogTimeImageCrawler(Crawler):
    URL_prefix = 'https://dogtime.com/dog-breeds/'

    def generate(self, dog_names: List[str]):
        for dog_name in dog_names:
            yield dog_name.replace('-', ' '), self.crawl_slideshow_images(dog_name)

    def crawl_profile_images(self) -> dict:
        """
        profile 페이지에 있는 모든 강아지들의
        프로필 이미지 주소 가져오기
        """

        new_dict = {}
        
        html_body = self.get_html_body(self.URL_prefix + 'profiles')
        # print(html_body)

        images = html_body.select('img.list-item-breed-img')
        # pprint(images)
        for image in images:
            # 같은 클래스 네임을 가진 img 태그가 2개 있으나,
            # 뒤에 오는 걸로 덮어쓰면 해결됨.
            
            # if image.get('data-lazy-src'):
            #     image_url = image['data-lazy-src']
            # else:

            image_url = image['src']

            new_dict.update(
                {image['alt'].lower(): image_url}
            )

        return new_dict        

    def crawl_slideshow_images(self, dog_name: str) -> dict:
        """
        이미지 주소 가져오기
        1. 한 장만 있는 경우부터 처리
        2. 슬라이드 형태로 여러 장이 있는 경우 처리
        """
        html_body = self.get_html_body(self.URL_prefix + str(dog_name))

        # 한 장만 있는 경우 처리
        single_image = html_body.find('div', class_='wp-caption')
        if single_image:
            image = single_image.find('img')
            return {'images': [image]}

        # 여러 장인 경우 처리
        slideshow = html_body.find('div', class_='pbslideshow')
        slideshow_id = slideshow['data-id']
        slideshow_url = f'{self.URL_prefix}{dog_name}?slideshow={slideshow_id}'
        # print(slideshow_url)
        # https://dogtime.com/dog-breeds/akita?slideshow=615

        html_body = self.get_html_body(slideshow_url)

        images = html_body.select('div.pbslideshow-slider-item > img')
        image_urls = [image['data-lazy-src'] for image in images]
        # pprint(image_urls)

        return {'images': image_urls}


def test_crawl_one():
    # DogTimeImageCrawler().crawl('yorkshire-terrier')
    DogTimeImageCrawler().crawl_slideshow_images('jindo-dog')


def test_crawl_all_images():
    dog_names = DogTimeListProvider().load()
    # print(dog_names[:5])
    
    generator = DogTimeImageCrawler().generate(dog_names[:10])
    for _ in generator:
        pass


def crawl_all_images():
    new_dict = {}

    with open('merge_result.json', encoding='utf8') as file:
        dog_infos = json.load(file)
        dog_names = [dog_name.replace(' ', '-') for dog_name in dog_infos.keys()]
        
        generator = DogTimeImageCrawler().generate(dog_names)
        for dog_name, dog_images in generator:
            new_dict.update({dog_name: dog_images})

        with open('merge_result_with_images.json', 'w', encoding='utf8') as file:
            json.dump(new_dict, file, ensure_ascii=False, indent=2)


def test_crawl_profile_images():
    pprint(DogTimeImageCrawler().crawl_profile_images())


def crawl_profile_images():
    with open(
        f'{Path(__file__).parent}/dogtime_profile_images.json', 
        'w',
        encoding='utf8'
    ) as file:
        profile_images = DogTimeImageCrawler().crawl_profile_images()
        json.dump(profile_images, file, ensure_ascii=False, indent=2)


# test_crawl_one()
# crawl_all_images()
crawl_profile_images()