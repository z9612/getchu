import React from 'react';
import { useLocation } from 'react-router-dom';
import { Divider } from '@mui/material';

import ResultHeader from './resultComponent/resultHeader';
import ResultBody from './resultComponent/resultBody';
import './result.css'

const Result = () => {
  // 이전 페이지에서 견종 정보 배열 (Array) 받음
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <div className='result-arrange'>
        <ResultHeader />
      </div>
      <Divider variant='middle' />
      <ResultBody />

      <div className='result-retest'>
        {/* 링크 추가하기 */}
        다시 검사할래요
        {/* <Link className='result-retest-link' to={ '/test' }>다시 검사할래요</Link> */}
      </div>
    </div>
  );
};

export default Result;