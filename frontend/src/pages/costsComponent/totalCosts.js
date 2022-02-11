import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './costsComponent.css'

// 임시 사용
import ResultDogDetail from '../resultComponent/resultBodyComponent/resultDogDetail'

const TotalCosts = (props) => {

  const [isShow, setIsShow] = useState(false)
  // console.log(isShow)

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
      <div className='cost-title'>
        "{ props.dogData.name }"의 첫 1년 비용은?
      </div>
      <img className='cost-dog-img'
        src= { props.dogData.image }
        alt='dog_img' />

      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ 원</div>
      </Box>


      {/* 금액산정기준 */}
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