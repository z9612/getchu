// import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BackBar from "./BackBar";
import BottomNavigationBar from "./BottomNavigationBar";

const BackBarLayout = ({ to, title }) => (
  <>
    <BackBar to={to} title={title} />
    <Outlet />
    <BottomNavigationBar />
  </>
);

export default BackBarLayout;