import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BackBar from "./BackBar";
import BottomNavigationBar from "./BottomNavigationBar";

const BackBarLayout = ({ to, title }) => (
  <>
    <Box sx={{paddingBottom: '56px'}}>
      <BackBar to={to} title={title} />
      <Outlet />
    </Box>
    <BottomNavigationBar />
  </>
);

export default BackBarLayout;