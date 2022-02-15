import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import getMbtiResultPromise from "./getMbtiResult";

function MbtiButton() {
  // const [mbti, setMbti] = useState();
  const mbtiList = [
    {
      id: 1,
      name: "ESTJ",
      url: "/img/ESTJ.jpeg",
    },
    {
      id: 2,
      name: "ISTJ",
      url: "/img/ISTJ.jpeg",
    },
    {
      id: 3,
      name: "ESTP",
      url: "/img/ESTP.jpeg",
    },
    {
      id: 4,
      name: "ISTP",
      url: "/img/ISTP.jpeg",
    },
    {
      id: 5,
      name: "ENTP",
      url: "/img/ENTP.jpeg",
    },
    {
      id: 6,
      name: "INTP",
      url: "/img/INTP.jpeg",
    },
    {
      id: 7,
      name: "ENTJ",
      url: "/img/ENTJ.jpeg",
    },
    {
      id: 8,
      name: "INTJ",
      url: "/img/INTJ.jpeg",
    },
    {
      id: 9,
      name: "ENFJ",
      url: "/img/ENFJ.jpeg",
    },
    {
      id: 10,
      name: "INFJ",
      url: "/img/INFJ.jpeg",
    },
    {
      id: 11,
      name: "ENFP",
      url: "/img/ENFP.jpeg",
    },
    {
      id: 12,
      name: "INFP",
      url: "/img/INFP.jpeg",
    },
    {
      id: 13,
      name: "ESFP",
      url: "/img/ESFP.jpeg",
    },
    {
      id: 14,
      name: "ISFP",
      url: "/img/ISFP.jpeg",
    },
    {
      id: 15,
      name: "ESFJ",
      url: "/img/ESFJ.jpeg",
    },
    {
      id: 16,
      name: "ISFJ",
      url: "/img/ISFJ.jpeg",
    },
  ];

  const navigate = useNavigate();

  // const sendResult = (event) => {
  //   event.preventDefault();
  //   getMbtiResultPromise(mbtiList[0].name).then((data) => {
  //     navigate("/result", { state: data });
  //     console.log(event);
  //     console.log(data);
  //   });
  // };

  return (
    <div>
      {mbtiList.map((mbti) => (
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
      ))}
    </div>
    // <div>
    //   <div>
    //     <ButtonGroup mbtibutton="true" variant="outlined" fullWidth>
    //       <Button onClick={sendResult}>
    //         <img src="/img/ENFJ.jpeg" alt="ENFJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[1].name);
    //           navigate("/result", mbtiList[1].name);
    //         }}
    //       >
    //         <img src="/img/ENFP.jpeg" alt="ENFP"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[2].name);
    //           navigate("/result", mbtiList[2].name);
    //         }}
    //       >
    //         <img src="/img/ENTJ.jpeg" alt="ENTJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[3].name);
    //           navigate("/result", mbtiList[3].name);
    //         }}
    //       >
    //         <img src="/img/ENTP.jpeg" alt="ENTP"></img>
    //       </Button>
    //     </ButtonGroup>
    //   </div>

    //   <div>
    //     <ButtonGroup mbtibutton="true" variant="outlined" fullWidth>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[4].name);
    //           navigate("/result", mbtiList[4].name);
    //         }}
    //       >
    //         <img src="/img/ESFJ.jpeg" alt="ESFJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[5].name);
    //           navigate("/result", mbtiList[5].name);
    //         }}
    //       >
    //         <img src="/img/ESFP.jpeg" alt="ESFP"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[6].name);
    //           navigate("/result", mbtiList[6].name);
    //         }}
    //       >
    //         <img src="/img/ESTJ.jpeg" alt="ESTJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[7].name);
    //           navigate("/result", mbtiList[7].name);
    //         }}
    //       >
    //         <img src="/img/ESTP.jpeg" alt="ESTP"></img>
    //       </Button>
    //     </ButtonGroup>
    //   </div>
    //   <div>
    //     <ButtonGroup mbtibutton="true" variant="outlined" fullWidth>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[8].name);
    //           navigate("/result", mbtiList[8].name);
    //         }}
    //       >
    //         <img src="/img/INFJ.jpeg" alt="INFJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[9].name);
    //           navigate("/result", mbtiList[9].name);
    //         }}
    //       >
    //         <img src="/img/INFP.jpeg" alt="INFP"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[10].name);
    //           navigate("/result", mbtiList[10].name);
    //         }}
    //       >
    //         <img src="/img/INTJ.jpeg" alt="INTJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[11].name);
    //           navigate("/result", mbtiList[11].name);
    //         }}
    //       >
    //         <img src="/img/INTP.jpeg" alt="INTP"></img>
    //       </Button>
    //     </ButtonGroup>
    //   </div>
    //   <div>
    //     <ButtonGroup mbtibutton="true" variant="outlined" fullWidth>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[12].name);
    //           navigate("/result", mbtiList[12].name);
    //         }}
    //       >
    //         <img src="/img/ISFJ.jpeg" alt="ISFJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[13].name);
    //           navigate("/result", mbtiList[13].name);
    //         }}
    //       >
    //         <img src="/img/ISFP.jpeg" alt="ISFP"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[14].name);
    //           navigate("/result", mbtiList[14].name);
    //         }}
    //       >
    //         <img src="/img/ISTJ.jpeg" alt="ISTJ"></img>
    //       </Button>
    //       <Button
    //         onClick={() => {
    //           console.log(mbtiList[15].name);
    //           navigate("/result", mbtiList[15].name);
    //         }}
    //       >
    //         <img src="/img/ISTP.jpeg" alt="ISTP"></img>
    //       </Button>
    //     </ButtonGroup>
    //   </div>
    // </div>
  );
}

export default MbtiButton;
