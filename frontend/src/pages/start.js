import React from 'react';

import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom';

import './start.css'

const Start = () => {

  return (
    <Box className='start-bg'
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div className='start-header'>
        <div className='start-header-text'>getchu</div>
      </div>

      <div className='start-footer'>
        <Link className='start-link' to="/recommend">
          <Button style={{
            fontSize: '30px', fontWeight: '700', color: 'white'
          }} variant='text'>
            검사하러가기
          </Button>
        </Link>
        <Link className='start-link' to="/recommend/breedSearch">
          <Button style={{fontSize: '30px', fontWeight: '700', color: 'white'}} variant='text'>
            견종정보보기
          </Button>
        </Link>
        <Link className='start-link' to="/cost/breedselect">
          <Button style={{fontSize: '30px', fontWeight: '700', color: 'white'}} variant='text'>
            견적내러가기
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default Start;