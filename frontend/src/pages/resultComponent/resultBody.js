import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Divider, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './resultComponent.css';
import ResultDogDetail from './resultBodyComponent/resultDogDetail';
import ResultDogPic from './resultBodyComponent/resultDogPic';

const ResultBody = (props) => {
  /** dogData는 Array여야 함. Object 형태로 오면 에러 */
  const dogData = props.dogData
  // console.log(dogData)

  const MakeButton = (info, dog) => {

    const [isShow,setIsShow] = useState(false)

    return (
      <div>
        {
          isShow
          ? info // 버튼 클릭되면(isShow === true) info 보여주기
          : 
          <div>
            {/* 일정 길이 이상의 텍스트는 말줄임(...) 표시 */}
            { dog.personality.length > 90 
              ? `${dog.personality.slice(0, 89)}...`
              : dog.personality}
          </div>
        }
        {/* 버튼 기능 구현 */}
        <div onClick={ () => setIsShow((isShow) => (!isShow)) }>
          {
            isShow // true 일 때 '닫기'로 표시
            ? <Box className='show-more'
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                <Button variant="text">
                  닫기
                  <KeyboardArrowUpIcon
                  fontSize='small'
                  color='primary' />
                </Button>
              </Box>
            // false 일 때 '더보기'로 표시
            : <Box className='show-more'
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Button variant="text">
                  특징 더보기
                  <KeyboardArrowDownIcon
                  fontSize='small'
                  color='primary' />
                </Button>
              </Box>
          }
        </div>
      </div>
    )
  }

  // 견종 데이터에서 4종의 데이터만 이용
  const dogInfoLoop = dogData.slice(0,4).map((dog, index) => {
    return (
      <div key={ index }>
        {/* 그리드 */}
        <Grid container spacing={0} py={1} justifyContent='center'>

          {/* 견종이미지/이름 */}
          <Grid item xs={10}>
            <ResultDogPic dogData={ dog } />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }} py={1}
            >
              <div className='result-dog-breed'>
                { dog.name }
              </div>
            </Box>
          </Grid>

          {/* 상세 정보 */}
          <Grid item xs={10}>
            { MakeButton(
              <ResultDogDetail dogData={ dog } />, dog
            )}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Link to={`/cost/${dog.name}`}>
                <Button 
                  variant="text" 
                >초기 자금 견적내기</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider variant='middle' />
      </div>
    )
  })
  
  return (
    <div>
      { dogInfoLoop }
    </div>
  );
};

export default ResultBody;