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
          alt={item.title}
          width="100%"
        />
        <Typography align='center' height='50px'>
          {item.title}
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
        {currency(item.price)}
      </div>
    </Stack>
  )
}

export default GoodsDetailItem