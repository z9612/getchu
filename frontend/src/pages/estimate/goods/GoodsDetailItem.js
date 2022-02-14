import { useState } from 'react'
import { Stack, Checkbox, Typography } from '@mui/material'
import currency from '../currencyFormatter'

const GoodsDetailItem = ({ 
  item, 
  index,
  changeSumByIndex
}) => {
  const [checked, setChecked] = useState(true)

  return (
    <Stack>
      <div>
        <img 
          src={item.image} 
          alt={item.name}
          width="100%"
        />
        <Typography align='center' height='50px'>
          {item.name}
        </Typography>
      </div>
      <div>
        <Checkbox 
          checked={checked}
          onClick={() => {
            changeSumByIndex(index, checked)
            setChecked(!checked)
          }}
        />
        {currency(item.price_avg)}
      </div>
    </Stack>
  )
}

export default GoodsDetailItem