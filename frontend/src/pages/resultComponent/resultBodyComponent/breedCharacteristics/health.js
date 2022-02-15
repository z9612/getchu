import React from 'react';
import { Rating } from '@mui/material';

const health = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>털갈이 정도</div>
        <Rating name='test-rating' value={ props.dogData.health_Amount_Of_Shedding } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>침흘릴 가능성</div>
        <Rating name='test-rating' value={ props.dogData.health_Drooling_Potential } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>그루밍 난이도?</div>
        <Rating name='test-rating' value={ props.dogData.health_Easy_To_Groom } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>일반적인 건강</div>
        <Rating name='test-rating' value={ props.dogData.health_General_Health } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>살찔 가능성</div>
        <Rating name='test-rating' value={ props.dogData.health_Potential_For_Wieght_Gain } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>사이즈</div>
        <Rating name='test-rating' value={ props.dogData.health_Size } readOnly />
      </div>
    </div>
  );
};

export default health;