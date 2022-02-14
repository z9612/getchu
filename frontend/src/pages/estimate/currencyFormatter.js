const currency = (number) => {
  if (number === 0) return '0 원';
  
  let amount = String(number);
  const currencyPattern = /(^[+-]?\d+)(\d{3})/;
  while (currencyPattern.test(amount)) {
    amount = amount.replace(currencyPattern, `$1,$2`);
  }
  return amount + ' 원';
}

export default currency;