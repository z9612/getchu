import { 
  AppBar, 
  Toolbar,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function BackBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default BackBar;