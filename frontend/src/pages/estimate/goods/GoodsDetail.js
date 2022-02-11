import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GoodsDetailItem from './GoodsDetailItem';
import currency from '../currencyFormatter';

const GoodsDetail = ({ 
  accordionIndex,
  accordionExpanded,
  expandAccordion,
  goodsContent
}) => {
  const defaultSum = goodsContent.reduce((acc, cur) => {
    return acc + Number(cur.price)
  }, 0)
  const [sum, setSum] = useState(defaultSum)

  const changeSumByIndex = (index, checked) => {
    const price = Number(goodsContent[index].price)
    const diff = checked ? -price : price
    setSum(prev => prev + diff)
  }

  return (
    <Accordion 
      expanded={accordionExpanded === accordionIndex} 
      onChange={expandAccordion(accordionIndex)}
    >
      {/* 제목 부분 */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${accordionIndex}-content`}
        id={`panel${accordionIndex}-header`}
      >
        {/* 좌측 제목 */}
        <Typography sx={{ width: '50%', flexShrink: 0 }}>
          {currency(sum)}
        </Typography>

        {/* 우측 부제목 */}
        <Typography sx={{ color: 'text.secondary' }}>
          물품 비용
        </Typography>
      </AccordionSummary>
      
      {/* 세부 내용 부분 */}
      <AccordionDetails>
        <Stack>
          {goodsContent.map((item, index) => (
            <GoodsDetailItem 
              item={item} 
              index={index}
              changeSumByIndex={changeSumByIndex}
            />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default GoodsDetail;