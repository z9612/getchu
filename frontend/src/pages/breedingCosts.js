import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { checkState } from './teststate'
import { Button, CircularProgress } from '@mui/material';

import TotalCosts from './costsComponent/totalCosts';
import FeedCosts from './costsComponent/feedCosts';
import MedicalCosts from './costsComponent/medicalCosts';
import OtherCosts from './costsComponent/otherCosts';
import useInitState from './costsComponent/useStateInit';

const BreedingCosts = () => {
  const [loading, setLoading] = useState(true)
  // console.log('loading', loading)

  const data_check = useRecoilValue(checkState)
  
  // 견종 이름
  const breed = useParams().breed
  useInitState(breed, setLoading)

  // console.log('datacheck', data_check)
    
  return (
    <div style={{margin: '40px 20px'}}>
      {
        !loading  // state에 data가 존재하면 
                  // DB 상에 있는 견종으로 인식하고 로딩화면 => 화면 순으로 출력
                  // data가 존재하지 않으면 55줄 부분 출력 (데이터가 없는 견종)

        ? // 해당 견종에 대한 정보가 있으면
        <div>
          {/* 총 비용 */}
          <TotalCosts breed={ breed } />

          {/* 사료값 */}
          <FeedCosts />
          
          {/* 의료비 */}
          <MedicalCosts />
    
          {/* 기타 생필품 */}
          <OtherCosts />
        </div>

        : // loading이 true 일 때
        (
          data_check
          ? // data가 존재하면
          <div className='load-data'>
            <div>잠시만 기다리시개</div>
            <CircularProgress style={{padding: '10px 0'}} />
          </div>
          : // data가 존재하지 않으면
          <div className='load-data'>
            <div>데이터가 없는 견종입니다.</div>
            <Button variant="text" component={Link} to='/cost/breedselect'>견종 다시 고르기</Button>
          </div>
        )
      }
    </div>
  );
};

export default BreedingCosts;