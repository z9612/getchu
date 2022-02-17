import React from 'react';
import { Rating } from '@mui/material';

const adaptable = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>아파트 생활에 적합</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Adaps_Well_To_Apartment_Living } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>초보자 추천</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Good_For_Novice_Owners } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>예민함</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Sensitivity_Level } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>혼자서도 잘 있음</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Being_Alone } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>추위에 대한 내성</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Cold_Weather } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>더위에 대한 내성</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Hot_Weather } readOnly />
      </div>
    </div>
  );
};

export default adaptable;