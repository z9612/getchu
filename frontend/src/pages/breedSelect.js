import { Container, Stack } from "@mui/material";
import ComboBox from "./breedSelectComponent/ComboBox";

function dogSelect() {
  return (
    <Stack direction="column" alignItems="stretch">
      <Container maxWidth="sm">
        <img width="100%" src="/img/find_dog.jpg" />
      </Container>
      <ComboBox />
    </Stack>
  );
}

export default dogSelect;
