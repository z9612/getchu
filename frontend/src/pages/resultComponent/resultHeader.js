import React from 'react';

import './resultComponent.css'

const resultHeader = () => {
  const testType = '테스트 종류'

  return (
    <div className='result-header'>
      <h2 className='result-header-text'>"당신에게/당신의 MBTI와" 잘 맞는 견종</h2>
      <h2 className='result-header-text'>당신의 "{ testType }"와/과 잘 맞는 견종</h2>
    </div>
  );
};

export default resultHeader;