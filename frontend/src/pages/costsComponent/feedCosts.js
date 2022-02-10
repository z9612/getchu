import React, { useState } from "react";
import { Box } from "@mui/system";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./costsComponent.css";

// 임시 사용
import ResultDogDetail from "../resultComponent/resultBodyComponent/resultDogDetail";

const FeedCosts = (props) => {
  const cost = {
    feed: {
      "avg-cost": 33000,
      "a-cost": 11000,
      "b-cost": 22000,
      "c-cost": 33000,
      "d-cost": 44000,
      "e-cost": 55000,
    },
  };

  const [isShow, setIsShow] = useState(false);

  const Button = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // width: '80%'
      }}
      py={1}
    >
      {/* 견종명, 이미지 */}
      <div className="cost-title">"{props.dogData.name}"의 사료값</div>
      <img
        className="cost-img"
        // src= { props.dogData.image }
        src="https://images.medicanimal.com/image/upload/v1564586575/pethub/dry_food.jpg"
        alt="dog_img"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // width: '300'
          width: "65%",
        }}
      >
        {/* 한 달 비용 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: 'center',
          }}
        >
          {/* <div><SquareIcon fontSize='small' /></div> */}
          <div>■&nbsp;</div>
          <div className="cost-cost">{cost.feed["avg-cost"]}원</div>
        </Box>
        <div className="criteria">(한 달 기준)</div>
      </Box>

      {!isShow ? (
        <div style={{ textAlign: "end", width: "100%" }}>
          <div className="cost-show-more">
            <div onClick={Button} className="flex-row">
              <div>금액산정기준</div>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
      ) : (
        <Box sx={{ width: "85%" }} pt={2}>
          {/* 비용 상세정보 가져오기 */}
          <ResultDogDetail dogData={props.dogData} />

          <div style={{ textAlign: "end" }}>
            <div className="cost-show-more">
              <div onClick={Button} className="flex-row">
                <div>금액산정기준</div>
                <KeyboardArrowUpIcon />
              </div>
            </div>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default FeedCosts;
