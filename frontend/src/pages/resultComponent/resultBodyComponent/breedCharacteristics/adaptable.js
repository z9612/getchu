import React from 'react';
import { Rating } from '@mui/material';

const adaptable = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>아파트 생활</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Adaps_Well_To_Apartment_Living } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>초보자가 키우기 쉬운가</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Good_For_Novice_Owners } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>민감성</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Sensitivity_Level } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>혼자 있는 것을 잘 견딤</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Being_Alone } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>추운 날씨를 잘 견딤</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Cold_Weather } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>더운 날씨를 잘 견딤</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Hot_Weather } readOnly />
      </div>
    </div>
  );
};

export default adaptable;