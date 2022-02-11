import React from 'react';
import { Rating } from '@mui/material';

const physical = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Energy_Level</div>
        <Rating name='test-rating' value={ props.dogData.physical_Energy_Level } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Intensity</div>
        <Rating name='test-rating' value={ props.dogData.physical_Intensity } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Exercise_Needs</div>
        <Rating name='test-rating' value={ props.dogData.physical_Exercise_Needs } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Potential_For_Playfulness</div>
        <Rating name='test-rating' value={ props.dogData.physical_Potential_For_Playfulness } readOnly />
      </div>
    </div>
  );
};

export default physical;