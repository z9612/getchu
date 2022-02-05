// import { Box, Container } from "@mui/material";
import BackBar from "./BackBar";

function BackBarLayout({ children }) {
  return (
    <div>
      <BackBar />
      {children}
    </div>
  );
}

export default BackBarLayout;