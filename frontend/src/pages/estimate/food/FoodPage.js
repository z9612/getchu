import { useState } from 'react';
import { Stack } from '@mui/material';

import FoodDetailAmount from './FoodDetailAmount';
import FoodDetailPrice from './FoodDetailPrice';
import FoodFooter from './FoodFooter';

const FoodPage = ({ amounts }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack
      direction="column"
      alignItems="stretch"
    >
      <main>
        <FoodDetailAmount 
          amounts={amounts}
          handleChange={handleChange}
          expanded={expanded}
          index={1}
        />
        <FoodDetailPrice 
          amounts={amounts}
          handleChange={handleChange}
          expanded={expanded}
          index={2}
        />
      </main>
      <FoodFooter />
    </Stack>
  );
}

export default FoodPage;