import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import ComboBox from "./breedSelectComponent/ComboBox";
import BreedSelectHeader from "./breedSelectComponent/breedSelectHeader";
function dogSelect() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <BreedSelectHeader />

      <ComboBox />
    </Container>
  );
}

export default dogSelect;
