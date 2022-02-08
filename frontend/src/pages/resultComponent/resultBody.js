import React, { useState } from 'react';
import { Grid, Box, Divider } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './resultComponent.css';
import ResultDogDetail from './resultBodyComponent/resultDogDetail';
import ResultDogPic from './resultBodyComponent/resultPic';
import ResultDogInfo from './resultBodyComponent/resultDogInfo';


const ResultBody = () => {

  const dogResultData = [
    {
      "id": 17,
      "name": "도베르만",
      "name_english": "doberman pinscher",
      "history": "독쇼가 일반화되어 각국에서 신견종 만들기가 성황이었던 1880년경 독일 튜링겐 지방의 아포르다 지방에 사는 브리 도리히 루이스 도베르만(1834. 1. 2~1894. 6. 9)이란 사람이 만든 것이 이 견종이다. 그의 직업은 청소부, 야경, 집 없는 개의 포획원이었다고 하며, 직업을 최대한으로 활용하였다고 전해진다. 그리하여 그의 이름이 견종명이 되었으며, 좋지 않은 환경에서 신견종 만들기에 노력한 결과가 그의 이름을 영원히 기억되게 한 것이다. 속설에서 말하는 도축 해체업자의 개는 당시 이미 비교적 순수 혈통이었다고 보여지며, 도베르만 탄생에 있어서 극히 중요한 역할을 다하였다.\n이들 개는 로트와일러 초기 타입이며 녹슨색의 붉은 반점을 가진 검은 개로 튜링겐에 있었던 셰퍼드 타입이 있었다. 도베르만씨는 1870년대 이 혼혈종을 교배시켰다. 그의 견종은 경계심이 있을 뿐 아니라 아주 뛰어난 호위견 및 가정견이었다. 20세기 초두에는 도베르만은 경찰견으로 정식으로 인정받았다. 견종은 경찰견으로서의 기민함과 기백, 그리고 가정견으로서의 복종심을 함께 갖춘 견종의 창출을 목적으로 만들었다.\n이 견종을 만들기 위해 근간이 되었던 견종은 독일의 중형견 핀셔이며 맨체스터 테리어도 큰 비중을 차지하고 있다. 중간 정도 크기로 힘이 좋고 근육질이 요구되며 또한 우아하고 고귀해야하며 그것은 바디 라인만 봐도 알 수 있다. 또한 롯트 와일러나 보스턴 등도 사용되었다고 한다. 제 1차 세계대전에서 군용견으로 활약하여 유명하게 되었으며 반려견, 경비견, 호신용 번견, 경찰견, 군용견, 가정견 등으로 이용되는 만능견이다.",
      "personality": "활력과 경계심이 있고 용감하며 가족에게 충실하고 아이를 사랑한다. 대담한 성격이다. 기질은 우호적이고 온화하다. 중용의 기질과 예민함이 요구된다. 어느 정도 감정을 억제할 줄 아는 개인데 주인과 좋은 관계를 맺기 위해 필요하다.\n훈련시키기 쉽고 작업을 즐기며, 또한 충분한 작업 능력이 있다. 용감하고 강건하다. 특히 자신감이 있어 두려움을 모른다. 또한 사회 환경에 대한 적응력도 마찬가지다.",
      "weight_min": 27,
      "weight_max": 36,
      "height_min": 60,
      "height_max": 71,
      "adaptable": 3,
      "adaptable_Adaps_Well_To_Apartment_Living": 3,
      "adaptable_Good_For_Novice_Owners": 3,
      "adaptable_Sensitivity_Level": 5,
      "adaptable_Tolerates_Being_Alone": 2,
      "adaptable_Tolerates_Cold_Weather": 1,
      "adaptable_Tolerates_Hot_Weather": 4,
      "friendly": 3,
      "friendly_Affectionate_With_Family": 5,
      "friendly_Kid_Friendly": 3,
      "friendly_Dog_Friendly": 1,
      "friendly_Friendly_Toward_Strangers": 3,
      "health": 4,
      "health_Amount_Of_Shedding": 4,
      "health_Drooling_Potential": 4,
      "health_Easy_To_Groom": 5,
      "health_General_Health": 1,
      "health_Potential_For_Wieght_Gain": 3,
      "health_Size": 4,
      "trainable": 3,
      "trainable_Easy_To_Train": 5,
      "trainable_Intelligence": 5,
      "trainable_Potential_For_Mouthiness": 2,
      "trainable_Prey_Drive": 1,
      "trainable_Tendency_To_Bark_Or_Howl": 1,
      "trainable_Wanderlust_Potential": 2,
      "physical": 4,
      "physical_Energy_Level": 3,
      "physical_Intensity": 3,
      "physical_Exercise_Needs": 3,
      "physical_Potential_For_Playfulness": 5,
      "image": "https://www.dogtime.com/assets/uploads/2011/01/file_22920_doberman-pinscher-300x189.jpg",
      "mbti": "ENTJ"
    },
    {
      "id": 121,
      "name": "그레이하운드",
      "name_english": "greyhound",
      "history": "매우 역사가 오래 된 견종으로 기원전 약 3,000년전부터 존재하였던 것으로 여겨진다. 고대 이집트 왕조의 묘석에 이 견종을 연상시키는 것이 남아 있다. 또한 기원전 100년경 그리스 문헌에 의하면 거의 현재의 모습과 다르지 않았던 것을 알 수 있으며 매우 오래 된 역사를 가지고 있음을 증명하고 있다. 사슴 사냥 등의 수렵에 이용하였다.\n16세기에 들어와 영국에서 토끼 쫓기의 경기가 시작되었고 이 견종이 사용되었다. 이것이 현재의 독 레이스가 되었고 그 후 독 레이스(개 경주)는 영국과 미국, 동남아시아 등지에서도 실시되었다. 견종명은 그리스를 의미하는 그리크에서 왔다고 하며 일찍이 이 견종의 모색이 그레이가 많았기에 이름 지어졌다고도 한다.",
      "personality": "경이로운 스태미나와 내구성을 소유하고 있다. 이해력이 빠르며 우아하고 애정이 풍부하다. 변덕스럽지 않다.",
      "weight_min": 22,
      "weight_max": 38,
      "height_min": 63,
      "height_max": 76,
      "adaptable": 3,
      "adaptable_Adaps_Well_To_Apartment_Living": 4,
      "adaptable_Good_For_Novice_Owners": 2,
      "adaptable_Sensitivity_Level": 5,
      "adaptable_Tolerates_Being_Alone": 1,
      "adaptable_Tolerates_Cold_Weather": 1,
      "adaptable_Tolerates_Hot_Weather": 5,
      "friendly": 5,
      "friendly_Affectionate_With_Family": 5,
      "friendly_Kid_Friendly": 5,
      "friendly_Dog_Friendly": 4,
      "friendly_Friendly_Toward_Strangers": 5,
      "health": 5,
      "health_Amount_Of_Shedding": 4,
      "health_Drooling_Potential": 5,
      "health_Easy_To_Groom": 5,
      "health_General_Health": 4,
      "health_Potential_For_Wieght_Gain": 5,
      "health_Size": 4,
      "trainable": 4,
      "trainable_Easy_To_Train": 5,
      "trainable_Intelligence": 5,
      "trainable_Potential_For_Mouthiness": 4,
      "trainable_Prey_Drive": 5,
      "trainable_Tendency_To_Bark_Or_Howl": 2,
      "trainable_Wanderlust_Potential": 5,
      "physical": 4,
      "physical_Energy_Level": 5,
      "physical_Intensity": 3,
      "physical_Exercise_Needs": 5,
      "physical_Potential_For_Playfulness": 4,
      "image": "https://www.dogtime.com/assets/uploads/2011/01/file_23024_greyhound-300x189.jpg",
      "mbti": "INTP"
    },
    {
      name: '닥스훈트',
      image: 'https://www.dogtime.com/assets/uploads/2011/01/file_23020_dachshund-dog-breed-460x290.jpg',
      personality: 'font랑 font-size를 어떻게/얼마나 바꿀지 고민해봐야 함',
      hair: '임시-long',
      hairloss: 3,
      sample: 2
    },
    {
      name: '닥스훈트 맞나?',
      image: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      personality: '견종특징2 견종특징2 견종특징2 견종특징2 견종특징2 견종특징2 견종특징2 견종특징2 견종특징2 ',
      hair: 'short',
      hairloss: 5,
      sample: 4
    }
  ]

  const MakeButton = (info) => {

    const [isShow,setIsShow] = useState(false)

    return (
      <div onClick={ () => setIsShow((isShow) => (!isShow)) }>
        {
          isShow
          ? <Box className='show-more'
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
              <div>더보기 닫기</div>
              <KeyboardArrowUpIcon
                fontSize='small'
                color='primary' />
            </Box>
          : <Box className='show-more'
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div>특징 더보기</div>
              <KeyboardArrowDownIcon 
                fontSize='small'
                color='primary' 
              />
            </Box>
        }
        {
          isShow
          && info
        }
      </div>
    )
  }

  const dogInfoLoop = dogResultData.map((dog, index) => {
    return (
      <div key={ index }>
        {/* 그리드 */}
        <Grid container spacing={0} justifyContent='center'>

          {/* 견종이미지 */}
          <Grid item xs={4} sm={3} md={2}>
            <ResultDogPic dogData={ dog } />
          </Grid>

          {/* 이름/특징 */}
          <Grid item xs={8} sm={6} md={4} px={2}>
            <ResultDogInfo dogData={ dog } />
          </Grid>

          {/* 상세 정보 */}
          <Grid item xs={10}>
            { MakeButton(
              <ResultDogDetail dogData={ dog } />
            )}
          </Grid>
          
        </Grid>
        <Divider variant='middle' />
      </div>
    )
  })

  return (
    <div>
      { dogInfoLoop }
    </div>
  );
};

export default ResultBody;