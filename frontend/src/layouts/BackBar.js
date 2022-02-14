import { Link } from "react-router-dom";
import { 
  AppBar, 
  Toolbar,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function BackBar({ to, title }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to={to}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}>
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BackBar;