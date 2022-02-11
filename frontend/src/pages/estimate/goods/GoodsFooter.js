import { Alert, AlertTitle } from '@mui/material';

import goodsDisclaimer from './goodsDisclaimer';

const GoodsFooter = () => {
  return (
    <Alert severity="info">
      <AlertTitle>알려드립니다!</AlertTitle>
      {goodsDisclaimer.content}
    </Alert>
  );
}

export default GoodsFooter;