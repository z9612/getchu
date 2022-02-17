import React from 'react';
import { Rating } from '@mui/material';

const trainable = (props) => {
  return (
    <div>
      <div className='row-arrange'>
        <div className='result-dog-info'>훈련이 쉬운가</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Easy_To_Train } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>지능</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Intelligence } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>무는 경향</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Potential_For_Mouthiness } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>추격 경향</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Prey_Drive } readOnly />
      </div>
      {/* <div className='explanation'>먹이를 찾고, 쫓고, 포획하는 본능적인 성향</div> */}
      <div className='row-arrange'>
        <div className='result-dog-info'>짖는 경향</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Tendency_To_Bark_Or_Howl } readOnly />
      </div>
      <div className='row-arrange'>
        <div className='result-dog-info'>돌아다니는 경향</div>
        <Rating name='test-rating' value={ props.dogData.trainable_Wanderlust_Potential } readOnly />
      </div>
      {/* <div className='explanation'>이리저리 떠돌아다니기를 좋아하는가</div> */}
    </div>
  );
};

export default trainable;