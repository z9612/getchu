import { Alert, AlertTitle } from '@mui/material';

const GoodsFooter = () => {
  return (
    <Alert severity="info">
      <AlertTitle>알려드립니다!</AlertTitle>
      {"저희가 최소한으로 필요하다고 생각하는 물품들을 기준으로 삼았으며, 이외 추가 물품을 구매할 경우 비용이 더 추가될 수 있습니다."}
    </Alert>
  );
}

export default GoodsFooter;