import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import foodList from './foodContent';
import currency from '../currencyFormatter';
import FoodDetailPriceList from './FoodDetailPriceList';

const FoodDetailPrice = ({ 
  sum, 
  expanded,
  handleChange, 
  setSum, 
  index 
}) => {
  const middleIndex = parseInt(foodList.length / 2)
  const [foodIndex, setFoodIndex] = useState(middleIndex)
    
  const changeFoodIndex = (event) => {
    const prevIndex = foodIndex
    setFoodIndex(event.target.value)
    
    const prevAmount = Number(foodList[prevIndex].price)
    const thisAmount = Number(foodList[foodIndex].price)
    setSum(current => Number(current) - prevAmount + thisAmount)
  }

  return (
    <Accordion 
      expanded={expanded === index} 
      onChange={handleChange(index)}
    >
      {/* 제목 부분 */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        {/* 좌측 제목 */}
        <Typography sx={{ width: '50%', flexShrink: 0 }}>
          {currency(foodList[foodIndex].price)}
        </Typography>

        {/* 우측 부제목 */}
        <Typography sx={{ color: 'text.secondary' }}>
          1 kg 당 사료 값
        </Typography>
      </AccordionSummary>
      
      {/* 세부 내용 부분 */}
      <AccordionDetails>
        <FoodDetailPriceList 
          foodList={foodList}
          foodIndex={foodIndex}
          changeFoodIndex={changeFoodIndex}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default FoodDetailPrice;