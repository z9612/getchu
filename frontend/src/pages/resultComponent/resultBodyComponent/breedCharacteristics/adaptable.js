import React from 'react';
import { Rating } from '@mui/material';

const adaptable = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Apartment_Living</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Adaps_Well_To_Apartment_Living } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Good_For_Novice_Owners</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Good_For_Novice_Owners } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Sensitivity_Level</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Sensitivity_Level } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Tolerates_Being_Alone</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Being_Alone } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Tolerates_Cold_Weather</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Cold_Weather } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Tolerates_Hot_Weather</div>
        <Rating name='test-rating' value={ props.dogData.adaptable_Tolerates_Hot_Weather } readOnly />
      </div>
    </div>
  );
};

export default adaptable;