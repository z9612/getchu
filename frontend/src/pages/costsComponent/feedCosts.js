import React, {useEffect, useState} from 'react';
import { useRecoilState } from 'recoil';
import { Box, Button } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import FoodPage from '../estimate/food/FoodPage';
import { foodSumState } from './state';
import './costsComponent.css'

// 임시 사용
import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'


const FeedCosts = (props) => {

  const cost = {
    "feed": 
    {
      "avg-cost" : 33000,
      "a-cost": 11000,
      "b-cost": 22000,
      "c-cost": 33000,
      "d-cost": 44000,
      "e-cost": 55000,
    }
  }

  const [isShow, setIsShow] = useState(false)

  const DetailButton = () => {
    setIsShow((isShow) => (!isShow))
  }

  const getWeightAvg = () => {
    const weight_min = Number(props.dogData.weight_min)
    const weight_max = Number(props.dogData.weight_max)
    return (weight_min + weight_max) / 2
  }
  const weight = getWeightAvg()
  const foodPerDay = weight * 0.02
  const foodPerDayAsGram = Math.round(foodPerDay * 1000)
  const foodPerMonth = foodPerDay * 30
  const foodPerMonthRounded = Math.round(foodPerMonth * 10) / 10
  const amounts = {
    weight,
    foodPerDay, 
    foodPerDayAsGram, 
    foodPerMonth,
    foodPerMonthRounded
  }
  const price = 20000;

  const [foodSum, setFoodSum] = useRecoilState(foodSumState)
  useEffect(() => {
    setFoodSum(18 * price)
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
      {/* 견종명, 이미지 */}
      <div className='cost-title'>
        {/* "{ props.dogData.name }"의 사료값 */}
        사료
      </div>
      <img className='cost-img'
        // src= { props.dogData.image }
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
        {/* 한 달 비용 */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          {/* <div><SquareIcon fontSize='small' /></div> */}
          <div>■&nbsp;</div>
          <div className='cost-cost'>{ foodSum }원</div>
        </Box>
        <div className='criteria'>(한 달 기준)</div>
      </Box>

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
          <FoodPage amounts={amounts}/>

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