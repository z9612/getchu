import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import ComboBox from "./breedSelectComponent/ComboBox";
import BreedSelectHeader from "./breedSelectComponent/breedSelectHeader";
function dogSelect() {
  return (
    <Container fixed maxWidth="xs">
      <BreedSelectHeader />
      <ComboBox />
    </Container>
  );
}

export default dogSelect;
