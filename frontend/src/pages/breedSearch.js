import { Container, Stack } from "@mui/material"

import SearchBox from "./breedSearchComponent/SearchBox"

const BreedSearch = () => {
  return (
    <Stack direction="column" alignItems="stretch">
      <Container maxWidth="sm">
        <img width="100%" src="/img/find_dog.jpg" />
      </Container>
      <SearchBox />
    </Stack>
  );
}

export default BreedSearch;
