import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';

import { useRecoilValue } from 'recoil';
import { foodState } from '../teststate';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './costsComponent.css'

// 임시 사용
// import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'


const FeedCosts = () => {
  // state food 데이터
  const food = useRecoilValue(foodState)

  // useEffect(() => {
  //   console.log(food)
  // }, [food]);

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
          <div className='cost-cost'>???원</div>
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