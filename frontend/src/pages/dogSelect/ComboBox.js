import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DogInfo from "./dogInfo.json";
// import DogBreedList from "./DogBreedList";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="dog-select-box"
      options={DogInfo}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="견종 선택" />}
    />
  );
}
