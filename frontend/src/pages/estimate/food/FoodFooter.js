import { Alert, AlertTitle } from '@mui/material';

const FoodFooter = () => {
  return (
    <Alert severity="info">
      <AlertTitle>알려드립니다!</AlertTitle>
      {"이는 성견 체중(중간값)의 2%를 급여했을 때의 기준입니다!"}
    </Alert>
  );
}

export default FoodFooter;