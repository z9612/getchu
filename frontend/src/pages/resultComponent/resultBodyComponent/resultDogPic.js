import React from 'react';

import '../resultComponent.css'

const resultPic = (props) => {
  return (
    <div>
      <img className='result-dog-img'
        src= { props.dogData.image }
        alt='dog_img' />
    </div>
  );
};

export default resultPic;