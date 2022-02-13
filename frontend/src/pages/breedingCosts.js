import React, { useState, useEffect } from 'react';

import { foodState, medicalState, goodsState } from './teststate'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios'

import TotalCosts from './costsComponent/totalCosts';
import FeedCosts from './costsComponent/feedCosts';
import MedicalCosts from './costsComponent/medicalCosts';
import OtherCosts from './costsComponent/otherCosts';

const BreedingCosts = () => {

  // 견종 이름
  const breed = useParams().breed

  const food = useRecoilValue(foodState)

  // state 데이터 변경 위해
  const setFoodDataUseSetRecoilState = useSetRecoilState(foodState)
  const setMedicalDataUseSetRecoilState = useSetRecoilState(medicalState)  
  const setGoodsDataUseSetRecoilState = useSetRecoilState(goodsState)
  
  // state 데이터를 API 데이터로 변경
  useEffect(() => {
    axios({
      url: `/estimate/estimate?name=${breed}`,
      method: 'get',
    })
    .then(res => {
      const food = res.data.slice(0,7)
      setFoodDataUseSetRecoilState(food)

      const medical = res.data.slice(7,14)
      setMedicalDataUseSetRecoilState(medical)

      const goods = res.data.slice(14,23)
      setGoodsDataUseSetRecoilState(goods)
      // console.log(food)
    })
    .catch(res => {
      console.log('fail')
    })
  }, []);
  
  
  return (
    <div style={{margin: '40px 20px'}}>
    {
      // dogData[breed]
      food  // state에 data가 존재하면 DB 상에 있는 견종으로 인식하고 화면 출력
            // data가 존재하지 않으면 172줄 부분 출력 

      ? // 해당 견종에 대한 정보가 있으면
      <div>
        {/* 총 비용 */}
        {/* <TotalCosts dogData={ dogData[breed] } /> */}
        <TotalCosts breed={ breed } />

        {/* 사료값 */}
        {/* <FeedCosts dogData={ dogData[breed] } /> */}
        {/* <FeedCosts foodData={ foodData } /> */}
        <FeedCosts />
        
  
        {/* 의료비 */}
        {/* <MedicalCosts dogData={ dogData[breed] } /> */}
        <MedicalCosts />
  
        {/* 기타 생필품 */}
        {/* <OtherCosts dogData={ dogData } /> */}
        <OtherCosts />
      </div>
      
      : // 해당 견종에 대한 정보가 없으면
      <div className='non-data'>
        <div>데이터가 없는 견종입니다.</div>
        <Button variant="text" component={Link} to='/cost/breedselect'>견종 다시 고르기</Button>
      </div>
    }
    </div>
  );
};

export default BreedingCosts;