<<<<<<< HEAD
import React, {useState} from 'react';
import { Box, Button } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import HouseIcon from '@mui/icons-material/House';

import './costsComponent.css'

// 임시 사용
import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'


const OtherCosts = (props) => {
  const cost = {
    "other": 
    {
=======
import React, { useState } from "react";
import { Box } from "@mui/system";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import HouseIcon from "@mui/icons-material/House";

import "./costsComponent.css";

// 임시 사용
import ResultDogDetail from "../resultComponent/resultBodyComponent/resultDogDetail";

const OtherCosts = (props) => {
  const cost = {
    other: {
>>>>>>> feature/dog-select-page
      "a-cost": 3000,
      "b-cost": 4000,
      "c-cost": 12000,
      "d-cost": 10000,
      "e-cost": 8000,
<<<<<<< HEAD
    }
  }

  const sumValues = obj => 
    Object.values(obj).reduce((a, b) => a + b);

  const sumCost = sumValues(cost.other)

  const [isShow, setIsShow] = useState(false)

  const DetailButton = () => {
    setIsShow((isShow) => (!isShow))
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
=======
    },
  };

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);

  const sumCost = sumValues(cost.other);

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
>>>>>>> feature/dog-select-page
        // width: '80%'
      }}
      py={1}
    >
<<<<<<< HEAD
      <div className='cost-title'>
        기타 생필품
      </div>
      <div>
        <img className='cost-img' 
          src='https://media.istockphoto.com/photos/accessories-for-cat-and-dog-on-blue-background-pet-care-and-training-picture-id1248454290?k=20&m=1248454290&s=612x612&w=0&h=Ajti5uiVqrJ4Ll66-1JS3qfSwSwvSHBAK-dOyJDj8Ow=' alt='dog-supply' />
=======
      <div className="cost-title">기타 생필품</div>
      <div>
        <img
          className="cost-img"
          src="https://media.istockphoto.com/photos/accessories-for-cat-and-dog-on-blue-background-pet-care-and-training-picture-id1248454290?k=20&m=1248454290&s=612x612&w=0&h=Ajti5uiVqrJ4Ll66-1JS3qfSwSwvSHBAK-dOyJDj8Ow="
          alt="dog-supply"
        />
>>>>>>> feature/dog-select-page
      </div>
      {/* <div className='cost-icon'>
        <HouseIcon 
          sx={{
            width: 70, height: 70, 
          }} />
      </div> */}
      <Box
<<<<<<< HEAD
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
      >
        <div className='cost-cost'>■ { sumCost }원</div>
        <div className='criteria'>(??? 기준)</div>
      </Box>

      {
        !isShow
        ?
        <div style={{textAlign: 'end', width: '100%'}}>
          <div className='cost-show-more'>
            <div onClick={ DetailButton }>
              <Button variant="text">
                금액산정기준
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </div>
        </div>
        :
        <Box sx={{width: '85%'}} pt={2}>

          {/* 비용 상세정보 가져오기 */}
          <ResultDogDetail dogData={ props.dogData } />

          <div style={{textAlign: 'end'}}>
            <div className='cost-show-more'>
              <div onClick={ DetailButton }>
                <Button variant="text">
                  금액산정기준
                  <KeyboardArrowUpIcon />
                </Button>
=======
        sx={{ display: "flex", justifyContent: "space-between", width: "65%" }}
      >
        <div className="cost-cost">■ {sumCost}원</div>
        <div className="criteria">(??? 기준)</div>
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
>>>>>>> feature/dog-select-page
              </div>
            </div>
          </div>
        </Box>
<<<<<<< HEAD
      }
=======
      )}
>>>>>>> feature/dog-select-page
    </Box>
  );
};

<<<<<<< HEAD
export default OtherCosts;
=======
export default OtherCosts;
>>>>>>> feature/dog-select-page
