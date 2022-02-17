import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, IconButton } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import { totalSumState } from './state';
import { breedState } from '../teststate';
import currency from '../estimate/currencyFormatter';

import './costsComponent.css'

const TotalCosts = () => {
  const [isYearlyCost, setIsYearlyCost] = useState(true)
  const totalSum = useRecoilValue(totalSumState);
  const dogData = useRecoilValue(breedState)

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
        "{dogData.name}"의 첫 1년 비용은?
      </div>
      <img 
        className='cost-dog-img'
        src= { dogData.image }
        alt='dog_img' />      

      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
      >
        {isYearlyCost ? (
          <div className='cost-cost'>■ { currency(totalSum) }</div>
        ) : (
          <div className='cost-cost'>■ { currency(totalSum) }</div>
        )}
        <IconButton 
          onClick={() => {setIsYearlyCost(!isYearlyCost)}}
        >
          <CompareArrowsIcon />
        </IconButton>
      </Box>
      <div className='explanation'>(12개월분 사료 + 의료비 + 생필품 비용)</div>
    </Box>
  );
};

export default TotalCosts;