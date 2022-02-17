import React from 'react';
import { Rating } from '@mui/material';

const health = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>털 빠짐</div>
        <Rating name='test-rating' value={ props.dogData.health_Amount_Of_Shedding } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>침 흘림</div>
        <Rating name='test-rating' value={ props.dogData.health_Drooling_Potential } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>털 관리</div>
        <Rating name='test-rating' value={ props.dogData.health_Easy_To_Groom } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>건강</div>
        <Rating name='test-rating' value={ props.dogData.health_General_Health } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>체중 증가 경향</div>
        <Rating name='test-rating' value={ props.dogData.health_Potential_For_Wieght_Gain } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>몸 크기</div>
        <Rating name='test-rating' value={ props.dogData.health_Size } readOnly />
      </div>
    </div>
  );
};

export default health;