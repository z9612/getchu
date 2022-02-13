import { useState } from 'react';
import { Stack } from '@mui/material';

import FoodDetailAmount from './FoodDetailAmount';
import FoodDetailPrice from './FoodDetailPrice';
import FoodFooter from './FoodFooter';

const FoodPage = () => {
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
          handleChange={handleChange}
          expanded={expanded}
          index={1}
        />
        <FoodDetailPrice 
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