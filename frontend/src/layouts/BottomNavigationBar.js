import React from 'react';
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import MapIcon from '@mui/icons-material/Map';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BottomNavigationBar = () => {

  // const [value, setValue] = React.useState(0);

  return (
    <Box 
      sx={{ 
        position: 'fixed',
        bottom: 0,
        width: '100vw' 
      }}>
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="견종추천" icon={<PetsIcon color="primary" />} component={Link} to={'/recommend'} />
        <BottomNavigationAction label="홈으로" icon={<HomeIcon color="primary" />} component={Link} to={'/'} />
        <BottomNavigationAction label="초기견적" icon={<PriceCheckIcon color="primary" />} component={Link} to={'/cost/breedselect'} />
        {/* <BottomNavigationAction label="Map" icon={<LocationOnIcon />} component={Link} to={'/map'} /> */}
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationBar;