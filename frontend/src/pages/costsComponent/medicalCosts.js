import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
// import VaccinesIcon from '@mui/icons-material/Vaccines';

import './costsComponent.css'


// 임시 사용
import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'

const MedicalCosts = (props) => {

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
  // console.log(isShow)

  const DetailButton = () => {
    setIsShow((isShow) => (!isShow))
    // console.log('button 확인용')
    // console.log(isShow)
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
      <div className='cost-title'>
        의료비용
      </div>
      <div>
        <img className='cost-img'
          src='https://images.squarespace-cdn.com/content/v1/5aa0bf73af2096458586fb17/1547932498065-AUGFM6FAS19VW32LMSHR/MPC_Dog_Vaccine_Main.jpg?format=1000w' alt='dog-vaccine' />
      </div>
      {/* <div className='cost-icon'>
        <VaccinesIcon 
          sx={{
            // color: '#b1b1b1', 
            width: 70, height: 70, 
            // border: 5, borderRadius: '100%'
          }} />
      </div> */}

      {/* cost 변경 필요 */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ { cost.medical['a-cost'] }원</div>
        <div className='criteria'>(A 비용)</div>
      </Box>

      {/* cost 변경 필요 */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ { cost.medical['b-cost'] }원</div>
        <div className='criteria'>(B 비용)</div>
      </Box>
      
      {/* cost 변경 필요 */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
      >
        <div className='cost-cost'>■ { cost.medical['c-cost'] }원</div>
        <div className='criteria'>(C 비용)</div>
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
              </div>
            </div>
          </div>
        </Box>
      }
    </Box>
  );
};

export default MedicalCosts;