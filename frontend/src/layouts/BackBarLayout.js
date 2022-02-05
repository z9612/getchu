// import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BackBar from "./BackBar";

const BackBarLayout = () => (
  <>
    <BackBar />
    <Outlet />
  </>
);

export default BackBarLayout;