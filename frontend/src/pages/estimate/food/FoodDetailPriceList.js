import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

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
        {foodList.map((food, index) => (
          <FormControlLabel 
            control={<Radio />} 
            value={index} 
            img={""}
            label={food.title + food.price}
            key={food.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default FoodDetailPriceList;