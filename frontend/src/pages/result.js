import React from 'react';
import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
import { Divider } from '@mui/material';

import ResultHeader from './resultComponent/resultHeader';
import ResultBody from './resultComponent/resultBody';
// import ResultBody1 from './result/resultBody1';
// import ResultBody2 from './result/resultBody2';

import './result.css'

const Result = () => {

  // const 
  return (
    <div>
      <ResultHeader />
      <Divider variant='middle' />

      <ResultBody />
      {/* <Grid container spacing={0}>
        <Grid item xs={4} item p={2}>
          <ResultBody1 />
        </Grid>
        <Grid item xs={8}>
          <ResultBody2 />
        </Grid>
      </Grid> */}

      <div className='result-retest'>
        <Link className='result-retest-link' to={ '/test' }>다시 검사할래요</Link>
      </div>
    </div>
  );
};

export default Result;