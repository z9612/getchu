import React from 'react';
import { Box } from '@mui/material'

import '../resultComponent.css'

const resultDogInfo = (props) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '200px',
      }}>
        <div className='result-dog-breed'>
          { props.dogData.name }
        </div>
        <div className='result-dog-personality'>
          { props.dogData.personality }
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            width: '100%',
            height: 'auto'
        }}>
        </Box>
      </Box>
    </div>
  );
};

export default resultDogInfo;