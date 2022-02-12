import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DogInfo from "./dogInfo.json";
import { Button } from "@mui/material";

export default function ComboBox() {
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <Autocomplete
        onChange={(event, value) => setSelected(value.label)}
        disablePortal
        id="dog-select-box"
        options={DogInfo}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="견종을 선택해주세요" />
        )}
      />
      <Button variant="outlined" color="success">
        <Link
          to={`/cost/${selected}`}
          style={{ textDecoration: "none" }}
          className="견종별 견적"
        >
          견적페이지 이동
        </Link>
      </Button>
    </div>
  );
}
