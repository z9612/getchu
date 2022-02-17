// import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BottomNavigationBar from "./BottomNavigationBar";

const BottomNavigationBarLayout = ({ to, title }) => (
  <>
    <BottomNavigationBar to={to} title={title} />
    <Outlet />
  </>
);

export default BottomNavigationBarLayout;