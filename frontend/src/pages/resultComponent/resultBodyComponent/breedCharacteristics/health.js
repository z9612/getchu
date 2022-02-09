import React from 'react';
import { Rating } from '@mui/material';

const health = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Amount_Of_Shedding</div>
        <Rating name='test-rating' value={ props.dogData.health_Amount_Of_Shedding } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Drooling_Potential</div>
        <Rating name='test-rating' value={ props.dogData.health_Drooling_Potential } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Easy_To_Groom</div>
        <Rating name='test-rating' value={ props.dogData.health_Easy_To_Groom } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>General_Health</div>
        <Rating name='test-rating' value={ props.dogData.health_General_Health } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Potential_For_Wieght_Gain</div>
        <Rating name='test-rating' value={ props.dogData.health_Potential_For_Wieght_Gain } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>health_Size</div>
        <Rating name='test-rating' value={ props.dogData.health_Size } readOnly />
      </div>
    </div>
  );
};

export default health;