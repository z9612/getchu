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
              <div className='explanation-2'>(이미지를 누르면 사진을 볼 수 있습니다.)</div>
              <div>&nbsp;</div>
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
              <div className='explanation-2'>(성견 기준의 체중과 신장입니다.)</div>
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
              적응성
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
              친화성
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
              건강함
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
              훈련성
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
              신체 활동
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
