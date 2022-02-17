/** 미사용 - 스크롤 기능 없어서 불편함 */

import { useState } from 'react'
import { 
  Box, 
  Button, 
  IconButton,
  Typography, 
  Modal,
} from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const HelpIconModal = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton 
        variant="contained"
        onClick={handleOpen}
      >
        <ContactSupportIcon color="primary"/>
      </IconButton>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  )
}

export default HelpIconModal