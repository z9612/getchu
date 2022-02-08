import React, { useState } from 'react';

import { Box } from '@mui/material'
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import './start.css'


const Start = () => {

  // 이미지 url 임시 사용
  // const img_url = "https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  // const img_url2 = "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"


  // 메뉴 초기 false
  const [isOpen, setIsOpen] = useState(false) 

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen) 
  } 

  return (
    <Box className='start-bg'
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div className='start-header'>
        <div className='start-header-text'>getchu</div>
      </div>

      <div className='start-footer'>
        <div className='start-link-p'>
          <Link className='start-link' to="/test">&nbsp;검사하러가기&nbsp;</Link>
        </div>
        <div className='start-link-p'>
          <Link className='start-link' to="/test">견적내러가기</Link>
        </div>
      </div>

      <BottomNavigation sx={{ width: 500 }} value={0} onChange={ toggleMenu }>
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<MenuIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<MenuIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Start;