import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import currency from './currencyFormatter';

const EstimateDetail = ({ 
  sum, 
  title, 
  detail,
  checkDefault,
  
  expanded,
  handleChange, 
  setSum, 
  index 
}) => {
  const [checked, setChecked] = useState(Boolean(checkDefault))
  
  useEffect(() => {
    const amount = checked ? Number(sum) : -Number(sum);
    setSum(current => Number(current) + amount);
  }, [setSum, sum, checked])

  return (
    <Accordion 
      expanded={expanded === title} 
      onChange={handleChange(title)}
    >
      {/* 제목 부분 */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        {/* 좌측 제목 */}
        <Typography sx={{ width: '50%', flexShrink: 0 }}>
          { checked ? currency(sum) : currency(0) }
        </Typography>

        {/* 우측 부제목 */}
        <Typography sx={{ color: 'text.secondary' }}>
          { title }
        </Typography>
      </AccordionSummary>
      
      {/* 세부 내용 부분 */}
      <AccordionDetails>
        <ul>
          {detail.map((item, index) => (
            <li key={index}>
              <Typography>{item}</Typography>
            </li>
          ))}
        </ul>
        {/* 항목 포함 여부 */}
        <div>
          <Checkbox 
            checked={checked}
            onClick={() => {setChecked(!checked)}}/
          >
          {checked ? "포함" : "미포함"}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default EstimateDetail;