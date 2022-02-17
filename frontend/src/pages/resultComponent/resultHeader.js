import React from 'react';

import './resultComponent.css'

const resultHeader = () => {
  const testType = 'dogtrait'
  
  const testTitle = {
    "lifestyle" : '당신의 라이프스타일과 잘 맞는 견종',
    "mbti" : '당신의 MBTI와 잘 맞는 견종',
    "dogtrait" : '당신에게 잘 맞는 견종'
  }

  return (
    <div className='result-header'>
      {/* <h2 className='result-header-text'>당신의 "{ testType }"와/과 잘 맞는 견종</h2> */}
      {/* <h2 className='result-header-text'>당신의 "MBTI"와 잘 맞는 견종</h2> */}
      {/* <h2 className='result-header-text'>당신의 "라이프스타일"과 잘 맞는 견종</h2> */}
      <h2 className='result-header-text'>{ testTitle[testType] }</h2>
    </div>
  );
};

export default resultHeader;