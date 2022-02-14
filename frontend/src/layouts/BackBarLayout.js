// import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import BackBar from "./BackBar";

const BackBarLayout = ({ to, title }) => (
  <>
    <BackBar to={to} title={title} />
    <Outlet />
  </>
);

export default BackBarLayout;