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
