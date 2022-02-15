import * as React from "react";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MbtiButton from "./mbtiButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import mbtiList from "./mbtiList";
import MbtiButtonSet from "./mbtiButtonSet";
import getMbtiResultPromise from "./getMbtiResult";

// const images = [
//   {
//     url: "/img/ENFJ.jpeg",
//     title: "ENFJ",
//     width: "40%",
//     link: "lifeStyle",
//   },
//   {
//     url: "/img/ENFP.jpeg",
//     title: "ENFP",
//     width: "40%",
//     link: "lifeStyle",
//   },
//   {
//     url: "/img/ENTJ.jpeg",
//     title: "ENTJ",
//     width: "40%",
//     link: "lifeStyle",
//   },
//   {
//     url: "/img/ENTP.jpeg",
//     title: "ENTP",
//     width: "40%",
//     link: "lifeStyle",
//   },
// ];

function mbtiBody() {
  return (
    <div>
      <MbtiButton />
    </div>
  );
}

export default mbtiBody;
