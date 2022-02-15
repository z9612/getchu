import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import FoodPage from '../estimate/food/FoodPage';
import currency from '../estimate/currencyFormatter';
import { foodSumState } from './state';
import './costsComponent.css'

const FeedCosts = () => {
  const foodSum = useRecoilValue(foodSumState)
  
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
      {/* 사료 관련 title, img */}
      <div className='cost-title'>
        사료
      </div>
      <img className='cost-img'
        src= 'https://images.medicanimal.com/image/upload/v1564586575/pethub/dry_food.jpg'
        alt='dog_img' />
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // width: '300'
          width: '65%'
        }}
      >
        {/* 한 달 비용 출력 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <div>■&nbsp;</div>
          <div className='cost-cost'>{ currency(foodSum) }</div>
        </Box>
        <div className='criteria'>(한 달 기준)</div>
      </Box>

      {/* 금액산정기준 on/off */}
      {
        !isShow
        ?
        <div style={{textAlign: 'end', width: '100%'}}>
          <div className='cost-show-more'>
            <div onClick={ DetailButton } 
              // className='flex-row'
            >
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
          <FoodPage />

          <div style={{textAlign: 'end'}}>
            <div className='cost-show-more'>
              <div onClick={ DetailButton }
              // className='flex-row'
              >
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

export default FeedCosts;