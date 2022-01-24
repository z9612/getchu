# Web Scraper (Crawler)

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat)](https://github.com/RichardLitt/standard-readme)



>  데이터가 필요한 경우 `data.json` 파일이 최종본이므로, 
> 그대로 가져다 데이터베이스에 등록하면 끝!
> 이하 내용은 크롤러 & 작업물에 대해 설명한 것입니다.



견종에 관한 정보를 수집하기 위해 만든 웹 스크래퍼 (웹 크롤러).

- [DogTime](https://dogtime.com/dog-breeds/profiles): 견종 특성을 별점으로 표시. 약 390여 마리의 견종 정보.

- [한국 애견 연맹 (KKF)](https://www.thekkf.or.kr/new_home/03_kkf_service/03_approval_2.php?gid=1): 견종 연혁과 특징 설명. 약 140여 마리의 견종 정보.



## Install

```bash
# 크롤링에 필요한 패키지들
pip install requests bs4 selenium 
# 정규 표현식 패키지
pip install regex
```



## Usage

- Dogtime

  - `dogtime_list.txt`: Dogtime 모든 견종 페이지 URL 접미어 (견종명)

  

  - `dogtime_crawler.py`: crawl_all() 함수를 통해 모든 견종 정보를 저장

  - `dogtime_image_crawler.py`: crawl_all_images() 함수를 통해 이미지 저장

    

  - `dogtime_result_dict.json`: Dogtime 크롤링 결과를 딕셔너리 형태로 저장

  - `dogtime_log.txt`: Dogtime에서 정보가 불규칙한 것들을 기록



- KKF

  - `kkf_list_page_urls.txt`: KKF의 총 10개 그룹 각각의 하위 페이지 URL 목록
  - `kkf_page_urls.txt`: KKF 모든 견종 페이지 URL
  - `kkf_eng_to_kor.json` / `kkf_kor_to_eng.json`: 견종 영어 이름과 한글 이름을 매칭

  

  - `kkf_crawler.py`: json 파일을 다른 json 파일과 비교, 추가, 병합 가능.

  

  - `kkf_result_1.0.json`: KKF 크롤링 결과
  - `kkf_result_1.5.json`: KKF 크롤링 결과 중 누락된 것만 따로 수작업으로 내용 보충
  - `kkf_result_3.json`: KKF 크롤링 결과 + 누락된 것 추가 + Dogtime과 영어명 매칭




- Dogtime + KKF

  - `merge_by_handwork.json`:  KKF와 Dogtime 의 영어명이 다른 것들 목록

  - `merge_result.json`: KKF와 Dogtime 중 공통 견종만 추출하여, 정보를 합친 것.
  - `merge_result_with_images.json`: 공통 정보 + Dogtime에서 추출한 이미지 URL 추가

