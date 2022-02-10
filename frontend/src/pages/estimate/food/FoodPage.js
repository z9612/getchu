import { useState } from 'react';
import { Stack } from '@mui/material';

import FoodDetailAmount from './FoodDetailAmount';
import FoodDetailPrice from './FoodDetailPrice';
import FoodFooter from './FoodFooter';

const FoodPage = () => {
  const [sum, setSum] = useState(0)

  const weight = 19
  const foodPerDay = weight * 0.02
  const foodPerDayAsGram = Math.round(foodPerDay * 1000)
  const foodPerMonth = foodPerDay * 30
  const foodPerMonthRounded = Math.round(foodPerMonth * 10) / 10
  const amounts = {
    weight,
    foodPerDay, 
    foodPerDayAsGram, 
    foodPerMonth,
    foodPerMonthRounded
  }

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack
      height="90vh"
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
          sum={sum}
          setSum={setSum}
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