import {
  Radio,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material'

import currency from '../currencyFormatter'

const FoodDetailPriceItem = ({ item, index }) => {
  return (
    <Stack alignItems="center">
      <div>
        <img 
          src={item.image} 
          alt={item.name}
          width="100%"
        />
        <Typography align='center'>
          {item.name}
        </Typography>
      </div>
      <div>
        <FormControlLabel 
          control={<Radio />} 
          value={index} 
          label={currency(item.productPrice)}
          key={item.name}
        />
      </div>
    </Stack>
  )
}

export default FoodDetailPriceItem