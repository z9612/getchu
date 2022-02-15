import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import MedicalPage from '../estimate/medical/MedicalPage';
import { medicalSumState } from './state';
import currency from '../estimate/currencyFormatter';
import './costsComponent.css'


const MedicalCosts = () => {
  // state medical 데이터
  const medicalSum = useRecoilValue(medicalSumState)
  
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
        의료비
      </div>
      <div>
        <img className='cost-img'
          src='https://images.squarespace-cdn.com/content/v1/5aa0bf73af2096458586fb17/1547932498065-AUGFM6FAS19VW32LMSHR/MPC_Dog_Vaccine_Main.jpg?format=1000w' alt='dog-vaccine' />
      </div>

      {/* cost */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ { currency(medicalSum) }</div>
        <div className='criteria'>(1년 기준)</div>
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
          <MedicalPage />

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