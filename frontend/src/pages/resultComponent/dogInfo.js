import React from 'react';
import { Rating, Typography } from '@mui/material';

const dogInfo = (props) => {

  const dogInfoData = [
    {
      breed: 'dog-breed',
      hair: 'long',
      hairloss: 3,
      sample: 2
    }
  ]

  const dogInfo = dogInfoData.map(data => 
      <div key={data.breed}>
        {/* {data.id} */}
        <div className='result-dog-Info'>견종</div>
        <div>{ data.breed }</div>
        <div className='result-dog-Info'>털 길이</div>
        <div>{ data.hair }</div>
        <div className='result-dog-Info'>털빠짐</div>
        <Rating name='test-rating' value={ data.hairloss } readOnly />
        <div className='result-dog-Info'>Sample</div>
        <Rating name='test-rating' value={ data.sample } readOnly />
      </div>
    )


  return (
    <div>
      { dogInfo }
      <div style={{color:'red'}}
      >반복문 돌리려면 visible 변수명 어떻게 할지 생각해봐야</div>
      <div style={{color:'purple'}}>텍스트 배치 어떻게 할지</div>
      <div style={{color:'green'}}>더보기 버튼위치/닫기 어떻게 할지</div>
      <div style={{color:'blue'}}>특징은 어떻게 반복문 돌릴지..</div>


      <div>데이터가 없어서</div>
      <div>일단은 </div>
      <div>대충 틀만 잡기</div>
      {/* <Rating name='test-rating' value={2} readOnly />

      <div>대충 틀만 잡기</div>
      <Rating name='test-rating' value={3} readOnly />

      <Typography>틀만 잡기1</Typography>
      <Rating name='test-rating' value={3} readOnly /> */}

      <div>이런식으로 만들고 반복문 어떻게 돌리면 될 듯</div>
      <br />
    </div>
  );
};

export default dogInfo;