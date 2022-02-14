import { Alert, AlertTitle } from '@mui/material';

import foodDisclaimer from './foodDisclaimer';

const FoodFooter = () => {
  return (
    <Alert severity="info">
      <AlertTitle>알려드립니다!</AlertTitle>
      {foodDisclaimer.content}
    </Alert>
  );
}

export default FoodFooter;