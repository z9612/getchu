import { useRecoilValue } from 'recoil';
import { Box } from '@mui/material';
import { totalSumState } from './state';
import { breedState } from '../teststate';
// import { foodState } from '../teststate';
import currency from '../estimate/currencyFormatter';

import './costsComponent.css'

const TotalCosts = () => {
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
        {/* "{dogData.name}"의 첫 1년 비용은? */}
        <div>
          <div className='cost-dog-breed'>"{dogData.name}"</div>
          <div className='cost-total-cost'>처음 1년 비용은?</div>
        </div>
      </div>
      <img 
        className='cost-dog-img'
        src= { dogData.image }
        alt='dog_img' />      

      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '65%' }}
        >
        <div className='cost-cost'>■ { currency(totalSum) }</div>
      </Box>
      <div className='explanation'>(12개월분 사료 + 의료비 + 생필품 비용)</div>
    </Box>
  );
};

export default TotalCosts;