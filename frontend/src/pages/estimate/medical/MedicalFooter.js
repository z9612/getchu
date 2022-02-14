import { Alert, AlertTitle } from '@mui/material';

import medicalDisclaimer from './medicalDisclaimer';

const MedicalFooter = () => {
  return (
    <Alert severity="info">
      <AlertTitle>알려드립니다!</AlertTitle>
      {medicalDisclaimer.content}
    </Alert>
  );
}

export default MedicalFooter;