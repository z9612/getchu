import { Link, useNavigate } from "react-router-dom";
import { 
  styled,
  AppBar, 
  Toolbar,
  Typography,
  Box,
  IconButton,
  Link as LinkText
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
}));


// function BackBar({ to, title }) {
function BackBar({ title }) {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              navigate(-1)
            }}
            // component={Link}
            // to={to}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          {/* <LinkText
            underline="none"
            color="inherit"
            onClick={() => {
              navigate(`${to}`)
            }}
          > */}
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ flexGrow: 1 }}
            >
              { title }
            </Typography>
          {/* </LinkText>   */}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default BackBar;