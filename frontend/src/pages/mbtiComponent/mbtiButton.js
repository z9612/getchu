import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import mbtiList from "./mbtiList";
import getMbtiResultPromise from "./getMbtiResult";

function MbtiButton() {
  const [mbti, setMbti] = useState({});
  const navigate = useNavigate();
  const sendResult = (event) => {
    event.preventDefault();
    getMbtiResultPromise(mbti).then((data) => {
      navigate("/result", { state: data });
    });
  };

  return (
    <ButtonGroup mbtibutton="true" variant="outlined" fullWidth>
      <Button
        onClick={() => {
          console.log(mbtiList[0].name);
          navigate("/result", mbtiList[0].name);
        }}
      >
        <img src="/img/ENFJ.jpeg" alt="ENFJ"></img>
      </Button>
      <Button
        onClick={() => {
          console.log(mbtiList[1].name);
          navigate("/result", mbtiList[1].name);
        }}
      >
        <img src="/img/ENFP.jpeg" alt="ENFP"></img>
      </Button>
      <Button
        onClick={() => {
          console.log(mbtiList[1].name);
          navigate("/result", mbtiList[1].name);
        }}
      >
        <img src="/img/ENTJ.jpeg" alt="ENTJ"></img>
      </Button>
      <Button
        onClick={() => {
          console.log(mbtiList[1].name);
          navigate("/result", mbtiList[1].name);
        }}
      >
        <img src="/img/ENTP.jpeg" alt="ENTP"></img>
      </Button>
    </ButtonGroup>
  );
}

export default MbtiButton;
