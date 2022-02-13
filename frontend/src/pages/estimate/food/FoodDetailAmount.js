import { useRecoilValue } from 'recoil';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { foodAmountState } from '../../costsComponent/state';

const FoodDetailAmount = ({ 
  expanded,
  handleChange, 
  index 
}) => {
  const amounts = useRecoilValue(foodAmountState)

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
          {amounts.foodPerMonthRounded} kg
        </Typography>

        {/* 우측 부제목 */}
        <Typography sx={{ color: 'text.secondary' }}>
          한 달 급여량
        </Typography>
      </AccordionSummary>
      
      {/* 세부 내용 부분 */}
      <AccordionDetails>
        <ul>
          <li>
            <Typography>
              몸무게 * 2% = 하루 섭취량 
            </Typography>
          </li>
          <li>
            <Typography>
              {amounts.weightAvg} kg * 2% 
              = {amounts.foodPerDayAsGram} g
            </Typography>
          </li>
          <li>
            <Typography>
              30일 * {amounts.foodPerDayAsGram} g 
              = {amounts.foodPerMonthRounded} kg
            </Typography>
          </li>
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}

export default FoodDetailAmount;