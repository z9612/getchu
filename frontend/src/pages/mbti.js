import * as React from "react";
import MbtiBody from "./mbtiComponent/mbtiBody";
import MbtiHeader from "./mbtiComponent/mbtiHeader";

function mbti() {
  return (
    <div>
      <MbtiHeader />
      <MbtiBody />
    </div>
  );
}

export default mbti;
