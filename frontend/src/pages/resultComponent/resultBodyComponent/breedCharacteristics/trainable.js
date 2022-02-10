import React from 'react';
import { Rating } from '@mui/material';

const trainable = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Easy_To_Train</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Easy_To_Train } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Intelligence</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Intelligence } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Potential_For_Mouthiness</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Potential_For_Mouthiness } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Prey_Drive</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Prey_Drive } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Tendency_To_Bark_Or_Howl</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Tendency_To_Bark_Or_Howl } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Wanderlust_Potential</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Wanderlust_Potential } readOnly />
      </div>
    </div>
  );
};

export default trainable;