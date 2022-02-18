import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Autocomplete, Button } from "@mui/material";

import DogInfo from "../breedSelectComponent/dogInfo.json";
import AlertSnackbar from "../../components/AlertSnackbar";
import getSearchResult from "./getSearchResult"

export default function SearchBox() {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClick = async (event) => {
    event.preventDefault();
    if (selected) {
      const result = await getSearchResult(selected)
      navigate('/result', {state: [result]})
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
        결과보기
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
