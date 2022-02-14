import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import MbtiButton from "./mbtiButton";

const images = [
  {
    url: "/img/ENFJ.jpeg",
    title: "ENFJ",
    width: "40%",
    link: "lifeStyle",
  },
  {
    url: "/img/ENFP.jpeg",
    title: "ENFP",
    width: "40%",
    link: "lifeStyle",
  },
  {
    url: "/img/ENTJ.jpeg",
    title: "ENTJ",
    width: "40%",
    link: "lifeStyle",
  },
  {
    url: "/img/ENTP.jpeg",
    title: "ENTP",
    width: "40%",
    link: "lifeStyle",
  },
];

export default function mbtiBody() {
  return <MbtiButton />;
}
