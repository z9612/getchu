import React from 'react';

import './resultComponent.css'

const resultHeader = () => {
  return (
    <div className='result-header'>
      <h2 className='result-header-text'>"당신에게/당신의 MBTI와" 잘 맞는 견종</h2>
      <h6>테스트 방식에 따라서 문구가 달라지면 좋을 것 같음</h6>
    </div>
  );
};

export default resultHeader;