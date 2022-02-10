import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import ComboBox from "./dogSelect/ComboBox";

function dogSelect() {
  return (
    <Container fixed maxWidth="xs">
      <ComboBox />
    </Container>
  );
}

export default dogSelect;
