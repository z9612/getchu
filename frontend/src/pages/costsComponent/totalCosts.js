import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, Button } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { totalSumState } from './state';
// import { foodState } from '../teststate';
import currency from '../estimate/currencyFormatter';
import './costsComponent.css'

// 임시 사용
// import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'

const TotalCosts = (props) => {
  const totalSum = useRecoilValue(totalSumState);

  const [dog, setDog] = useState([])
    
  useEffect(() => {
    axios({
      method: 'get',
      url: `/dog/findByName?name=${props.breed}`
    })
    .then(res => {
      const dogdog = res.data
      setDog([dogdog])
    })
  }, [props.breed])


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

      {/* 견종명, 이미지 */}
      { dog.map(data => 
        <div key={data}>
          <div className='cost-title'>
            "{data.name}"의 첫 1년 비용은?
          </div>
          <img className='cost-dog-img'
          src= { data.image }
          alt='dog_img' />      
        </div>
      )}
      {/* <div className='cost-title'>
        "{ props.dogData.name }"의 첫 1년 비용은?
      </div>
      <img className='cost-dog-img'
        src= { props.dogData.image }
        alt='dog_img' /> */}

      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ { currency(totalSum) }</div>
      </Box>


      {/* 금액산정기준 on/off */}
      {
        !isShow
        ?
        <div style={{textAlign: 'end', width: '100%'}}>
          <div className='cost-show-more'>
            <div onClick={ DetailButton }>
              <Button variant="text">
                {/* 금액산정기준 */}
                <KeyboardArrowDownIcon />
              </Button>
            </div>
          </div>
        </div>
        :
        <Box sx={{width: '85%'}} pt={2}>

          {/* 비용 상세정보 가져오기 */}
          <div>
            <div>
              사료 33000 * 12
            </div>
            <div>
              (한 달 비용 * 12개월)
            </div>
            <div>
              의료비 ?????
            </div>
            <div>
              (초기접종비용)
            </div>
            <div>
              의료비 ?????
            </div>
            <div>
              (주기적접종비용)
            </div>
            <div>
              기타생필품비용 ?????원
            </div>

          </div>

          <div style={{textAlign: 'end'}}>
            <div className='cost-show-more'>
              <div onClick={ DetailButton }>
                <Button variant="text">
                  {/* 금액산정기준 */}
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

export default TotalCosts;