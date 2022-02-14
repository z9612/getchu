import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Divider, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import './resultComponent.css';
import ResultDogDetail from './resultBodyComponent/resultDogDetail';
import ResultDogPic from './resultBodyComponent/resultDogPic';

const ResultBody = (props) => {
  const dogData = props.dogData
  // console.log(dogData)

  const MakeButton = (info, dog) => {

    const [isShow,setIsShow] = useState(false)

    return (
      <div>
        {
          isShow
          ? info
          : 
          <div>
            { dog.personality.length > 80 
              ? `${dog.personality.slice(0, 79)}...`
              : dog.personality}
          </div>
        }
        <div onClick={ () => setIsShow((isShow) => (!isShow)) }>
          {
            isShow
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
          </Grid>

        <Link to={`/cost/${dog.name}`}>
          <Button 
            variant="text"
          >견적 내러 가기</Button>
        </Link>
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