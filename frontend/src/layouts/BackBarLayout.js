// import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BackBar from "./BackBar";

const BackBarLayout = ({ to }) => (
  <>
    <BackBar to={to} />
    <Outlet />
  </>
);

export default BackBarLayout;