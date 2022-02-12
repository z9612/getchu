import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Divider, Button } from '@mui/material';

import ResultHeader from './resultComponent/resultHeader';
import ResultBody from './resultComponent/resultBody';
import './result.css'

const Result = () => {
  // 이전 주소에서 넘겨받은 인자 (개 특징 정보)
  const { state } = useLocation();
  for (const key in state) {
    console.log(key, state[key]);
  }

  return (
    <div>
      <div className='result-arrange'>
        <ResultHeader />
      </div>
      <Divider variant='middle' />
      <ResultBody />

      <div className='result-retest'>
        {/* 링크 추가하기 */}
        <Button 
          variant='text'
          style={{color: 'gray'}}
          component={Link}
          to='/recommend'
        >다시 검사할래요</Button>
        {/* 다시 검사할래요 */}
        {/* <Link className='result-retest-link' to={ '/test' }>다시 검사할래요</Link> */}
      </div>
    </div>
  );
};

export default Result;