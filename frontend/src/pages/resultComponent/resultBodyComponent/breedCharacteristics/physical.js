import React from 'react';
import { Rating } from '@mui/material';

const physical = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>에너지 수준</div>
        <Rating name='test-rating' value={ props.dogData.physical_Energy_Level } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>활발함</div>
        <Rating name='test-rating' value={ props.dogData.physical_Intensity } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>운동 요구량</div>
        <Rating name='test-rating' value={ props.dogData.physical_Exercise_Needs } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>장난기</div>
        <Rating name='test-rating' value={ props.dogData.physical_Potential_For_Playfulness } readOnly />
      </div>
    </div>
  );
};

export default physical;