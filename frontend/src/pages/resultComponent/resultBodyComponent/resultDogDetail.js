import React from 'react';
import { 
  Box, Rating, Accordion, AccordionDetails, AccordionSummary, Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../resultComponent.css'

import Adaptable from './breedCharacteristics/adaptable';
import Friendly from './breedCharacteristics/friendly'
import Health from './breedCharacteristics/health'
import Physical from './breedCharacteristics/physical'
import Trainable from './breedCharacteristics/trainable'

const DogInfo = (props) => {

  const dogInfoData = [
    // 128종
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
    }
  ]

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div>
        { props.dogData.personality}
      </div>
      <div style={{ margin: '10px 0' }}>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box
              sx={{width: '100%'}}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div className='result-dog-info'>체중</div>
                <div className='result-info'>
                  { props.dogData.weight_min }~{ props.dogData.weight_max } (kg)
                </div>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div className='result-dog-info'>신장</div>
                <div>
                  { props.dogData.height_min }~{ props.dogData.height_max } (cm)
                </div>
              </Box>
            </Box>
          </AccordionSummary>
        </Accordion>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '50%',fontWeight: 'bold', flexShrink: 0 }}>
              Adaptable
            </Typography>
            <Rating sx={{ width: '50%', flexShrink: 0 }}
              name='test-rating' value={ props.dogData.adaptable } readOnly />
          </AccordionSummary>
          <AccordionDetails>
            <Adaptable dogData={ props.dogData } />
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '50%',fontWeight: 'bold', flexShrink: 0 }}>
              Friendly
            </Typography>
            <Rating sx={{ width: '50%', flexShrink: 0 }}
              name='test-rating' value={ props.dogData.friendly } readOnly />
          </AccordionSummary>
          <AccordionDetails>
            <Friendly dogData={ props.dogData } />
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '50%',fontWeight: 'bold', flexShrink: 0 }}>
              Health
            </Typography>
            <Rating sx={{ width: '50%', flexShrink: 0 }}
              name='test-rating' value={ props.dogData.health } readOnly />
          </AccordionSummary>
          <AccordionDetails>
            <Health dogData={ props.dogData } />
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '50%',fontWeight: 'bold', flexShrink: 0 }}>
              Trainable
            </Typography>
            <Rating sx={{ width: '50%', flexShrink: 0 }}
              name='test-rating' value={ props.dogData.trainable } readOnly />
          </AccordionSummary>
          <AccordionDetails>
            <Trainable dogData={ props.dogData } />
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '50%',fontWeight: 'bold', flexShrink: 0 }}>
              Physical
            </Typography>
            <Rating sx={{ width: '50%', flexShrink: 0 }}
              name='test-rating' value={ props.dogData.physical } readOnly />
          </AccordionSummary>
          <AccordionDetails>
            <Physical dogData={ props.dogData } />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default DogInfo;