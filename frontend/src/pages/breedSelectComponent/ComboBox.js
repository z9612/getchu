import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Autocomplete, Button } from "@mui/material";

import DogInfo from "./dogInfo.json";
import AlertSnackbar from "../../components/AlertSnackbar";

import "./breedSelectComponent.css";

export default function ComboBox() {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    if (selected) {
      navigate(`/cost/${selected}`);
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <Autocomplete
        selectOnFocus="true"
        onChange={(event, value) => setSelected(value.label)}
        disablePortal
        id="dog-select-box"
        options={DogInfo}
        sx={{ mx: "auto" }}
        renderInput={(params) => (
          <TextField {...params} label="견종을 선택해주세요" />
        )}
      />
      <br />
      <Button
        sx={{ width: "100%" }}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        견적내기
      </Button>

      <AlertSnackbar
        severity="info"
        message="빈 칸은 입력할 수 없어요!"
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
