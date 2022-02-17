import { useState } from "react";
import { IconButton, Popover, Stack, Typography } from "@mui/material";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';

function HelpIconButton({ content }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <span>
      <IconButton
        variant="contained"
        onClick={handleClick}
      >
        <ContactSupportIcon color="primary"/>
      </IconButton>
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleClose}
      >
        <Typography sx={{ p: 2 }}>
          {content}
        </Typography>
        <Stack alignItems="center">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Popover>
    </span>
  );
}

export default HelpIconButton;