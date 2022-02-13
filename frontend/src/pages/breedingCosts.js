import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil'
import { Button } from '@mui/material';

import TotalCosts from './costsComponent/totalCosts';
import FeedCosts from './costsComponent/feedCosts';
import MedicalCosts from './costsComponent/medicalCosts';
import OtherCosts from './costsComponent/otherCosts';
import { foodState, medicalState, goodsState } from './teststate'
import { foodAmountState } from './costsComponent/state';
import getFoodAmount from './estimate/food/getFoodAmount';

const BreedingCosts = () => {
  const [loading, setLoading] = useState(true)

  // 견종 이름
  const breed = useParams().breed
  
  // state 데이터 변경 위해
  const setFoodData = useSetRecoilState(foodState)
  const setMedicalData = useSetRecoilState(medicalState)  
  const setGoodsData = useSetRecoilState(goodsState)
  const setFoodAmount = useSetRecoilState(foodAmountState)
  
  // state 데이터를 API 데이터로 변경
  useEffect(() => {
    axios({
      url: `/estimate/estimate?name=${breed}`,
      method: 'get',
    })
    .then(res => {
      const food = res.data.slice(0,7)
      setFoodData(food)

      const medical = res.data.slice(7,14)
      setMedicalData(medical)

      const goods = res.data.slice(14,23)
      setGoodsData(goods)
      // console.log(food)
    })
    .catch(res => {
      console.log('fail')
    })

    // 사료 금액 산정 기준 설명에 필요한 사료 양 저장
    axios({
      url: `/dog/findByName?name=${breed}`,
      method: 'get',
    })
    .then(response => {
      const dogInfo = response.data
      const foodAmount = getFoodAmount(dogInfo)
      setFoodAmount(foodAmount)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);
  
  return (
    <div style={{margin: '40px 20px'}}>
    {
      // dogData[breed]
      !loading  // state에 data가 존재하면 DB 상에 있는 견종으로 인식하고 화면 출력
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