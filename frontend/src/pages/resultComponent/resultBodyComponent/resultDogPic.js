import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import { Carousel } from 'react-carousel-minimal';
import dogPics from './dogtime_images.json'

import '../resultComponent.css'

const ResultPic = (props) => {

  const [open, setOpen] = useState(false);
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  const breed = props.dogData.name_english

  return (
    <div>
      <img 
        onClick={OpenModal}
        className='result-dog-img'
        src= { props.dogData.image }
        alt='dog_img' />

      <Modal open={open} onClose={CloseModal}>
        <Box>
          <div className='modal-box' style={{ textAlign: "center"}}>
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={dogPics[breed]}
                time={2000}
                width="850px"
                height="500px"
                radius="10px"
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="black"
                pauseIconSize="40px"
                // slideBackgroundColor="darkgrey"
                slideBackgroundColor='rgb(127,127,127)'
                // slideImageFit="cover"
                slideImageFit="contain"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "600px",
                  margin: "15px auto",
                }}
              />
            </div>
            <div>
              <CloseIcon  onClick={ CloseModal }
                sx={{ 
                  color: 'white',
                  fontSize: 40, borderRadius: '50%', 
                  // backgroundColor: 'black'
                }} 
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ResultPic;