import { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FoodDetailPriceList from './FoodDetailPriceList';
import { foodSumState } from '../../costsComponent/state';
import foodList from './foodContent';
import currency from '../currencyFormatter';

const FoodDetailPrice = ({ 
  amounts,
  expanded,
  handleChange, 
  index 
}) => {
  const middleIndex = parseInt(foodList.length / 2)
  const [foodIndex, setFoodIndex] = useState(middleIndex)
  
  const setFoodSum = useSetRecoilState(foodSumState)
  
  const changeFoodIndex = (event) => {
    const amount = amounts.foodPerMonthRounded

    const prevIndex = foodIndex
    const prevPrice = Number(foodList[prevIndex].price) * amount
    
    const newIndex = event.target.value
    const newPrice = Number(foodList[newIndex].price) * amount
    
    setFoodSum(prev => Number(prev) - prevPrice + newPrice)
    setFoodIndex(newIndex)
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