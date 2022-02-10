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
import Costs from "../costs";

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
        renderInput={(params) => <TextField {...params} label="견종 선택" />}
      />
      <Button>
        <Link to={`/costs/${selected}`} className="links">
          견적페이지 이동
        </Link>
      </Button>
    </div>
  );
}
