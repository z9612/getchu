import { useState } from "react";
import { IconButton, Popover, Typography } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';

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
        <HelpIcon />
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
      </Popover>
    </span>
  );
}

export default HelpIconButton;