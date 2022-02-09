import React from 'react';
import { Rating } from '@mui/material';

const friendly = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Affectionate_With_Family</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Affectionate_With_Family } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Kid_Friendly</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Kid_Friendly } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Dog_Friendly</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Dog_Friendly } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>Friendly_Toward_Strangers</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Friendly_Toward_Strangers } readOnly />
      </div>
    </div>
  );
};

export default friendly;