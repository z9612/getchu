import * as React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import MbtiBody from "./mbtiComponent/mbtiBody";
import MbtiHeader from "./mbtiComponent/mbtiHeader";

function mbti() {
  return (
    <div>
      <MbtiBody />
      <div className="result-retest">
        {/* 링크 추가하기 */}
        <Button
          variant="text"
          style={{ color: "gray" }}
          onClick={() =>
            window.open(
              "https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC",
              "_blank"
            )
          }
        >
          MBTI 검사하러 가기
        </Button>
      </div>
    </div>
  );
}

export default mbti;
