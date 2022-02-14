import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FoodDetailPriceList from './FoodDetailPriceList';
import { foodSumState } from '../../costsComponent/state';
import { foodState } from '../../teststate';
import currency from '../currencyFormatter';

const FoodDetailPrice = ({ 
  expanded,
  handleChange, 
  index 
}) => {
  const foodList = useRecoilValue(foodState)
  // const middleIndex = parseInt(foodList.length / 2)
  const [foodIndex, setFoodIndex] = useState(0)
  
  const setFoodSum = useSetRecoilState(foodSumState)
  
  const changeFoodIndex = (event) => {
    const newIndex = event.target.value
    setFoodIndex(newIndex)
  }

  useEffect(() => {
    const newPrice = foodList[foodIndex].dogFeedPrice
    setFoodSum(newPrice)
  }, [foodList, foodIndex, setFoodSum])

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
          {currency(foodList[foodIndex].productPricePerWeight)}
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