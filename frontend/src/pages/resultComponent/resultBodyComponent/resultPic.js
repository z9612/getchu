import React from 'react';
import { Box } from '@mui/material'

import '../resultComponent.css'

const resultPic = (props) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '200px'
      }}>
        {/* <p>이미지 리사이즈/crop 필요</p> */}
        <img className='result-dog-img'
          src= { props.dogData.image }
          alt='dog_img' />
      </Box>
    </div>
  );
};

export default resultPic;