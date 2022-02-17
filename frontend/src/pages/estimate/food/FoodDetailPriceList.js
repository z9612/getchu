import {
  RadioGroup,
  FormControl,
  FormLabel,
  Grid,
} from '@mui/material';

import FoodDetailPriceItem from './FoodDetailPriceItem';

const FoodDetailPriceList = ({ 
  foodList, 
  foodIndex, 
  changeFoodIndex
}) => {
  return (
    <FormControl>
      <FormLabel id="controlled-radio-buttons-group">
        사료 목록
      </FormLabel>
      <RadioGroup
        aria-labelledby="controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={foodIndex}
        onChange={changeFoodIndex}
      >
        <Grid container spacing={2}>
          {foodList.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <FoodDetailPriceItem item={item} index={index}/>
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}

export default FoodDetailPriceList;