import { useRecoilState } from 'recoil'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import GoodsDetailItem from './GoodsDetailItem';
import { goodsState } from '../../teststate';
import { goodsSumState } from '../../costsComponent/state'
import currency from '../currencyFormatter';

const GoodsDetail = ({ 
  accordionIndex,
  accordionExpanded,
  expandAccordion,
}) => {
  const [goods, setGoods] = useRecoilState(goodsState)
  const [goodsSum, setGoodsSum] = useRecoilState(goodsSumState)

  const changeSumByIndex = (index, checked) => {
    const price = Number(goods[index].price_avg)
    const diff = checked ? -price : price
    setGoodsSum(prev => prev + diff)

    const newList = goods.map((item, idx) => {
      if (idx === index) {
        return {...item, checked: !checked}
      } else {
        return {...item}
      }
    })
    // console.log(newList)
    setGoods(newList)
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
          { currency(goodsSum) }
        </Typography>

        {/* 우측 부제목 */}
        <Typography sx={{ color: 'text.secondary' }}>
          물품 비용
        </Typography>
      </AccordionSummary>
      
      {/* 세부 내용 부분 */}
      <AccordionDetails>
        <Grid container>
          {goods.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2}
              key={index}
            >
              <GoodsDetailItem 
                item={item} 
                index={index}
                changeSumByIndex={changeSumByIndex}
              />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default GoodsDetail;