import React, {useEffect, useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import FoodPage from '../estimate/food/FoodPage';
import currency from '../estimate/currencyFormatter';
import { foodSumState } from './state';
import { foodState } from '../teststate';
import './costsComponent.css'

// 임시 사용
// import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'


const FeedCosts = () => {
  // state food 데이터
  const [foodSum, setFoodSum] = useRecoilState(foodSumState)
  const foodList = useRecoilValue(foodState)
  
  const [isShow, setIsShow] = useState(false)
  const DetailButton = () => {
    setIsShow((isShow) => (!isShow))
  }
  
  useEffect(() => {
    if (foodList[0]) {
      setFoodSum(Number(foodList[0].dogFeedPrice))
    }
  }, [])
  
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
        {/* "{ props.dogData.name }"의 사료값 */}
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
          {/* <ResultDogDetail dogData={ props.dogData } /> */}

          {/* 비용 확인용 */}
          {/* <div>test</div>
          { food.map(data => 
          <div key={data.name}>
            <div className='cost-title'>
              "{data.name}"
              "{data.price}"
            </div>
            <img className='cost-dog-img'
            src= { data.image }
            alt='dog_img' />      
          </div>
          )}
          <div>{food.name}</div> */}
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