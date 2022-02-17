import { Stack, Checkbox, Typography } from '@mui/material'

import HelpIconButton from '../../../components/HelpIconButton'
import currency from '../currencyFormatter'

const HelpContent = ({ item }) => {
  return (
    <Stack>
      <Typography>
        {item.comment}
      </Typography>
      <br />
      <Stack direction="row" justifyContent="space-between">
        <Typography>최저가</Typography>
        <Typography>평균가</Typography>
        <Typography>최고가</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{currency(item.price_min)}</Typography>
        <Typography>{currency(item.price_avg)}</Typography>
        <Typography>{currency(item.price_max)}</Typography>
      </Stack>
    </Stack>
  )
} 

const GoodsDetailItem = ({ item, index, changeSumByIndex }) => {
  

  return (
    <Stack>
      <div>
        <img 
          src={item.image} 
          alt={item.name}
          width="100%"
        />
        <Typography align='center'>
          <HelpIconButton content={<HelpContent item={item} />} />
          {item.name}
        </Typography>
      </div>
      <div>
        <Checkbox 
          checked={item.checked}
          onClick={() => {
            changeSumByIndex(index, item.checked)
          }}
        />
        {currency(item.price_avg)}
      </div>
    </Stack>
  )
}

export default GoodsDetailItem