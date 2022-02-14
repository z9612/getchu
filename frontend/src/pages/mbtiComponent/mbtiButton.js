import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function mbtibutton() {
  return (
    <ButtonGroup mbtibutton="true" variant="outlined" fullWidth>
      <Button>
        <img src="/img/ENFJ.jpeg" alt="ENFJ"></img>
      </Button>
      <Button>
        <img src="/img/ENFP.jpeg" alt="ENFP"></img>
      </Button>
    </ButtonGroup>
  );
}
