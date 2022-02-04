import { useState } from "react";
import { Box, Paper, Button } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import SurveySet from "./SurveySet";

const questionSetList = [
  [
    {
      text: '1. 활발한 강아지를 원하나요?',
      detail: '활발한다는 건 활발하다는 것이다.',
      paramName: 'energy'
    },
    {
      text: '2. 털빠짐에 민감한 편인가요?',
      detail: '모든 개는 털이 빠집니다!',
      paramName: 'shedding'
    }
  ],
  [
    {
      text: '3. 집에 아이가 있나요?',
      detail: '일부 개들은 아이에게 우호적입니다.',
      paramName: 'friendliness'
    },
    {
      text: '4. 운동을 좋아하시나요?',
      detail: '사냥견은 2시간, 실내견은 1시간...',
      paramName: 'energy_level'
    }
  ]
]

function SurveyPage() {
  const [answers, setAnswers] = useState({})

  const addAnswer = (name, value) => {
    const new_answers = {...answers}
    new_answers[name] = value
    setAnswers(new_answers)
    console.log(new_answers);
  }

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = questionSetList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <p>뒤로 가기</p>
        </Paper>

        <Box sx={{ 
          width: '90%', 
          p: 2 
        }}>
          <SurveySet 
            questionSet={questionSetList[activeStep]}
            onAnswer={addAnswer}
          />
        </Box>

        <MobileStepper
          variant="text"
          position="bottom"
          steps={maxSteps}
          activeStep={activeStep}
          backButton={
            <Button 
            size="small" 
            onClick={handleBack} 
            disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              이전
            </Button>
          }
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              다음
              <KeyboardArrowRight />
            </Button>
          }
          />
      </Box>
    </div>
  );
}

export default SurveyPage;
