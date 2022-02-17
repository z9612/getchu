import {
  Radio,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material'

import HelpIconButton from '../../../components/HelpIconButton'
import currency from '../currencyFormatter'

const FoodDetailPriceItem = ({ item, index }) => {
  return (
    <Stack alignItems="center">
      <div>
        <img 
          src={item.image} 
          alt={item.comment}
          width="100%"
        />
        <Typography align='center'>
          <HelpIconButton content={item.comment} />
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