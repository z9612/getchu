from typing import List
import json

from selenium import webdriver
from selenium.webdriver.common.by import By

from crawler import Crawler
from dogtime_crawler import DogTimeListProvider


class DogTimeImageCrawler(Crawler):
    URL_prefix = 'https://dogtime.com/dog-breeds/'

    def __init__(self):
        super().__init__()
        webdriver_options = webdriver.ChromeOptions()
        # webdriver_options.add_argument('headless')

        chromedriver = 'chromedriver.exe'
        self.driver = webdriver.Chrome(
            chromedriver, 
            options=webdriver_options
        )
        self.driver.implicitly_wait(5)

    def generate(self, dog_names: List[str]):
        for dog_name in dog_names:
            yield dog_name.replace('-', ' '), self.crawl(dog_name)

    def crawl(self, dog_name: str) -> dict:
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
        if slideshow:
            slideshow_id = slideshow['data-id']
            slideshow_url = f'{self.URL_prefix}{dog_name}?slideshow={slideshow_id}'
            # print(slideshow_url)
            # https://dogtime.com/dog-breeds/akita?slideshow=615
        else:
            # 로딩 안 된 경우, 셀레늄으로 처리
            slideshow_url = self.__get_slideshow_url_by_selenium(dog_name)

        html_body = self.get_html_body(slideshow_url)

        images = html_body.select('div.pbslideshow-slider-item > img')
        image_urls = [image['data-lazy-src'] for image in images]
        # pprint(image_urls)

        return {'images': image_urls}
    
    def __get_slideshow_url_by_selenium(self, dog_name):
        self.driver.get(self.URL_prefix + str(dog_name))

        slideshow = self.driver.find_element(By.CSS_SELECTOR, 'div.pbslideshow')
        slideshow_id = slideshow.get_attribute('data-id')
        slideshow_url = f'{self.URL_prefix}{dog_name}?slideshow={slideshow_id}'

        return slideshow_url


def test_crawl_one():
    # DogTimeImageCrawler().crawl('yorkshire-terrier')
    DogTimeImageCrawler().crawl('jindo-dog')


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


# test_crawl_one()
crawl_all_images()