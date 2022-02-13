import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import { useRecoilValue } from 'recoil';
import { medicalState } from '../teststate';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './costsComponent.css'


// 임시 사용
// import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'

const MedicalCosts = (props) => {
  // state medical 데이터
  const medical = useRecoilValue(medicalState)

  const cost = {
    "medical": 
    {
      "a-cost": 100000,
      "b-cost": 150000,
      "c-cost": 120000,
      "d-cost": 130000,
      "e-cost": 140000,
    }
  }

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
        // width: '80%'
      }}
      py={1}
    >
      {/* 의료비용 관련 title, img */}
      <div className='cost-title'>
        의료비용
      </div>
      <div>
        <img className='cost-img'
          src='https://images.squarespace-cdn.com/content/v1/5aa0bf73af2096458586fb17/1547932498065-AUGFM6FAS19VW32LMSHR/MPC_Dog_Vaccine_Main.jpg?format=1000w' alt='dog-vaccine' />
      </div>

      {/* cost, 기준? 변경 필요 */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ a원</div>
        <div className='criteria'>(A 비용)</div>
      </Box>

      {/* cost 변경 필요 */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ b원</div>
        <div className='criteria'>(B 비용)</div>
      </Box>
      
      {/* cost 변경 필요 */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
      >
        <div className='cost-cost'>■ c원</div>
        <div className='criteria'>(C 비용)</div>
      </Box>

      {/* 금액산정기준 on/off */}
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
          {/* <ResultDogDetail dogData={ props.dogData } /> */}

          <div style={{textAlign: 'end'}}>
            <div className='cost-show-more'>
              <div onClick={ DetailButton }>
                <Button variant="text">
                  금액산정기준
                  <KeyboardArrowUpIcon />
                </Button>
              </div>
            </div>
          </div>
        </Box>
      }
    </Box>
  );
};

export default MedicalCosts;