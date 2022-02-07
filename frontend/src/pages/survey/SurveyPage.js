import { useState } from "react";
import { Box, Button } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import questionList from "./questionList.json";
import SurveySet from "./SurveySet";

function SurveyPage() {
  const [answers, setAnswers] = useState({})

  const addAnswer = (name, value) => {
    const new_answers = {...answers}
    new_answers[name] = value
    setAnswers(new_answers)
    console.log(new_answers);
  }

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = questionList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SurveySet 
        questionSet={questionList[activeStep]}
        onAnswer={addAnswer}
      />

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
          (activeStep !== maxSteps - 1) ? (
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              다음
              <KeyboardArrowRight />
            </Button>
          ) : (
            <Button
              size="small"
            >
              완료
              <KeyboardArrowRight />
            </Button>
          )
        }
        />
    </Box>
  );
}

export default SurveyPage;
