import React from 'react';
import { Rating } from '@mui/material';

const friendly = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>가족에게 다정함</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Affectionate_With_Family } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>아이와 잘 지냄</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Kid_Friendly } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>다른 개와 잘 지냄</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Dog_Friendly } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>낯선 사람에게 우호적</div>
        <Rating name='test-rating' value={ props.dogData.friendly_Friendly_Toward_Strangers } readOnly />
      </div>
    </div>
  );
};

export default friendly;