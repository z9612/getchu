import { useState } from "react";
import { Box, Paper, Button } from '@mui/material';
import Survey from "./Survey";

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';



const questionList = [
  [
    ['1. 활발한 강아지를 원하나요?', 'energy']
    ['2. 털빠짐에 민감한 편인가요?', 'shedding']
  ],
  [
    {
      text: '3. ddd?',
      param: 'shedding'
    },
    {
      text: '4. aaaa?',
      param: 'shedding'
    },
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

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = questionList.length;

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
          {questionList[activeStep].label}
        </Paper>

        <Box sx={{ 
          width: '90%', 
          p: 2 
        }}>
          {/* {questionList} */}
          <Survey
            question={questionList[activeStep].text}
            paramName={questionList[activeStep].param}
            onAnswer={addAnswer}
          />
        </Box>

        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="bottom"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              다음
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              이전
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default SurveyPage;
