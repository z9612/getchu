import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { spacing } from "@mui/system";

import getMbtiResultPromise from "./getMbtiResult";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  const mbtiList = [
    {
      id: 1,
      name: "ESTJ",
      url: "/img/ESTJ.png",
      content: "엄격한 관리자",
    },
    {
      id: 2,
      name: "ISTJ",
      url: "/img/ISTJ.png",
      content: "청렴결백한 논리주의자",
    },
    {
      id: 3,
      name: "ESTP",
      url: "/img/ESTP.png",
      content: "모험을 즐기는 사업가",
    },
    {
      id: 4,
      name: "ISTP",
      url: "/img/ISTP.png",
      content: "만능 재주꾼",
    },
    {
      id: 5,
      name: "ENTP",
      url: "/img/ENTP.png",
      content: "뜨거운 논쟁을 즐기는 변론가",
    },
    {
      id: 6,
      name: "INTP",
      url: "/img/INTP.png",
      content: "논리적인 사색가",
    },
    {
      id: 7,
      name: "ENTJ",
      url: "/img/ENTJ.png",
      content: "대담한 통솔자",
    },
    {
      id: 8,
      name: "INTJ",
      url: "/img/INTJ.png",
      content: "용의주도한 전략가",
    },
    {
      id: 9,
      name: "ENFJ",
      url: "/img/ENFJ.png",
      content: "정의로운 사회운동가",
    },
    {
      id: 10,
      name: "INFJ",
      url: "/img/INFJ.png",
      content: "선의의 옹호자",
    },
    {
      id: 11,
      name: "ENFP",
      url: "/img/ENFP.png",
      content: "재기발랄한 활동가",
    },
    {
      id: 12,
      name: "INFP",
      url: "/img/INFP.png",
      content: "열정적인 중재자",
    },
    {
      id: 13,
      name: "ESFP",
      url: "/img/ESFP.png",
      content: "자유로운 영혼의 연예인",
    },
    {
      id: 14,
      name: "ISFP",
      url: "/img/ISFP.png",
      content: "호기심 많은 예술가",
    },
    {
      id: 15,
      name: "ESFJ",
      url: "/img/ESFJ.png",
      content: "사교적인 외교관",
    },
    {
      id: 16,
      name: "ISFJ",
      url: "/img/ISFJ.png",
      content: "용감한 수호자",
    },
  ];

  const navigate = useNavigate();

  var settings = {
    accessibility: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box sx={{ my: 5 }}>
      <Slider {...settings}>
        {mbtiList.map((mbti) => (
          <Box sx={{ mx: "auto", my: "auto", textAlign: "center" }}>
            <h2>{mbti.content}</h2>
            <Button
              onClick={() => {
                getMbtiResultPromise(mbti.name).then((data) => {
                  navigate("/result", { state: data });
                  // console.log(mbti.name);
                });
              }}
            >
              <img src={mbti.url} />
            </Button>

            <h1>{mbti.name}</h1>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SimpleSlider;
