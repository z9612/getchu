import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import SurveySet from "./SurveySet";
import AlertSnackbar from "../../components/AlertSnackbar";
import questionList from "./questionList";
import getResultPromise from "./getResult";

function SurveyPage() {
  const [answers, setAnswers] = useState({});

  const addAnswer = (name, value) => {
    const new_answers = { ...answers };
    new_answers[name] = value;
    setAnswers(new_answers);
    // console.log(new_answers);
  };

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = questionList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const sendResult = (event) => {
    event.preventDefault();

    // 설문 미완료 시 오류 메시지 출력
    const answerCount = Object.keys(answers).length;
    if (answerCount < 14) {
      setOpen(true);
      return;
    }

    getResultPromise(answers).then((data) => {
      navigate("/result", { state: data });
      // console.log(answers);
      // console.log(data);
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SurveySet questionSet={questionList[activeStep]} onAnswer={addAnswer} />

      <MobileStepper
        variant="text"
        position="bottom"
        steps={maxSteps}
        activeStep={activeStep}
        style={{marginBottom: '66px'}}
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            이전
          </Button>
        }
        nextButton={
          activeStep !== maxSteps - 1 ? (
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              다음
              <KeyboardArrowRight />
            </Button>
          ) : (
            // 완료 시 Link의 to로 state 담아서 이동
            <Button size="small" onClick={sendResult}>
              완료
              <KeyboardArrowRight />
            </Button>
          )
        }
      />

      <AlertSnackbar
        severity="error"
        message="설문을 모두 완료해주세요!"
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
}

export default SurveyPage;
