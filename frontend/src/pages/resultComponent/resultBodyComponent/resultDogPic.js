import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import '../resultComponent.css'

const ResultPic = (props) => {

  const [open, setOpen] = useState(false);
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  return (
    <div>
      <img 
        onClick={ OpenModal }
        className='result-dog-img'
        src= { props.dogData.image }
        alt='dog_img' />

      <Modal open={open}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '0px solid white'
        }}
      >
          <img
            src= { props.dogData.image }
            alt='dog_img' />
          
          <div onClick={ CloseModal } className='close-box'>
            <CloseIcon color='primary' sx={{ fontSize: 50 }} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ResultPic;