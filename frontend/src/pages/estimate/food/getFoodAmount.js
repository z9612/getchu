const getFoodAmount = ({ weight_min, weight_max }) => {
  const weightAvg = (weight_min + weight_max) / 2
  const foodPerDay = weightAvg * 0.02
  const foodPerDayAsGram = Math.round(foodPerDay * 1000)
  const foodPerMonth = foodPerDay * 30
  const foodPerMonthRounded = Math.round(foodPerMonth * 10) / 10
  const amounts = {
    weightAvg,
    foodPerDay, 
    foodPerDayAsGram, 
    foodPerMonth,
    foodPerMonthRounded
  }
  return amounts;
}

export default getFoodAmount;