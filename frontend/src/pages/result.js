import React from 'react';
// import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

import ResultHeader from './resultComponent/resultHeader';
import ResultBody from './resultComponent/resultBody';


import './result.css'

const Result2 = () => {
  return (
    <div>
      <div className='result-arrange'>
        <ResultHeader />
      </div>
      <Divider variant='middle' />
      <ResultBody />

      <div className='result-retest'>
        다시 검사할래요 / 테스트 페이지 링크 추가하기
        {/* <Link className='result-retest-link' to={ '/test' }>다시 검사할래요</Link> */}
      </div>
    </div>
  );
};

export default Result2;