import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import MbtiButton from "./mbtiButton";
import mbtiList from "./mbtiList";

import { ButtonGroup } from "@mui/material";

function MbtiButtonSet({ buttonSet, onClick }) {
  return (
    <Stack justifyContent="space-evenly">
      {buttonSet.map((button) => (
        <MbtiButton key={mbtiList.id}>{mbtiList.name}</MbtiButton>
      ))}
    </Stack>
  );
}

export default MbtiButtonSet;
