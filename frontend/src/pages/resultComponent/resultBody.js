import React, { useState } from 'react';
import { Grid, Box, Divider } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import './resultComponent.css';
import DogInfo from './dogInfo';

const ResultBody = () => {

  // 반복문 사용하게 되면 견종에 따라 visible 어떻게 다르게 구분할 지 고민해보기
  const [visible, setVisible] = useState(false)
  const seeMore = () => {
    setVisible(!visible)
  }

  return (
    <div>
      {/* 반복문 필요한 구간 */}
      {/* <DogInfo /> */}
      <Grid container spacing={0} justifyContent='center'>
        <Grid item xs={4} sm={3} md={2} p={2}>
          <div>
            <p>이미지 리사이즈/crop 필요</p>
            <img className='result-dog-img'
              src='https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              alt='dog_img' />
          </div>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '240px',
              // backgroundColor: 'wheat',
              p: 2
            }}
          >
            <div className='result-dog-breed'>
              견종명 / height 조절 필요
            </div>
            <div className='result-dog-feature'>
              견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징
            </div>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'end',
                width: '100%',
              }}>

              <div onClick={ seeMore }>
                {
                  visible
                  ? <div>더보기닫기</div>
                  : <div>
                      특징 더보기
                      <ArrowDropDownCircleIcon 
                        fontSize='inherit'
                        color='primary' 
                      />
                    </div>
                }
              </div>
            </Box>
          </Box>
        </Grid>
        {
          visible
          && <Grid item xs={8}>
            <DogInfo />
          </Grid>
        }
      </Grid>
      <Divider variant='middle' />
      {/* 반복문 필요구간 */}
      <Grid container spacing={0} justifyContent='center'>
        <Grid item xs={4} sm={3} md={2} p={2}>
          <div>
            <p>이미지 리사이즈/crop 필요</p>
            <img className='result-dog-img'
              src='https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              alt='dog_img' />
          </div>
        </Grid>
        <Grid item xs={8} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '240px',
              // backgroundColor: 'wheat',
              p: 2
            }}
          >
            <div className='result-dog-breed'>
              견종명 / height 조절 필요
            </div>
            <div className='result-dog-feature'>
              견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징 견종특징
            </div>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'end',
                width: '100%',
              }}>

              <div onClick={ seeMore }>
                {
                  visible
                  ? <div>더보기닫기</div>
                  : <div>
                      특징 더보기
                      <ArrowDropDownCircleIcon 
                        fontSize='inherit'
                        color='primary' 
                      />
                    </div>
                }
              </div>
            </Box>
          </Box>
        </Grid>
        {
          visible
          && <Grid item xs={10}>
            <DogInfo />
          </Grid>
        }
      </Grid>
      <Divider variant='middle' />
    </div>
  );
};

export default ResultBody;