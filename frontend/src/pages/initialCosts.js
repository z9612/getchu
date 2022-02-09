import React from 'react';

import FeedCosts from './initialFundsComponent/feedCosts';
import MedicalCosts from './initialFundsComponent/medicalCosts';
import OtherCosts from './initialFundsComponent/otherCosts';

const initialCosts = () => {

  const dogData = {
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
  }

  const costs = [
    { "feed": 
      {
        "a-cost": 10000,
        "b-cost": 20000,
        "c-cost": 30000,
        "d-cost": 40000,
        "e-cost": 50000,
      }
    },
    { "medical": 
      {
        "a-cost": 100000,
        "b-cost": 150000,
        "c-cost": 120000,
        "d-cost": 130000,
        "e-cost": 140000,
      }
    },
    { "other": 
      {
        "a-cost": 3000,
        "b-cost": 4000,
        "c-cost": 12000,
        "d-cost": 10000,
        "e-cost": 8000,
      }
    }
  ]

  return (
    <div style={{margin: '40px 20px'}}>

      {/* 사료값 */}
      {/* <FeedCosts /> */}
      <FeedCosts dogData={ dogData } />

      {/* 의료비 */}
      <MedicalCosts dogData={ dogData } />

      {/* 기타 생필품 */}
      {/* <OtherCosts /> */}
      <OtherCosts dogData={ dogData } />
    </div>
  );
};

export default initialCosts;