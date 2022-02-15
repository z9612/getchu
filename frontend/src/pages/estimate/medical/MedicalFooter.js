import { Alert, AlertTitle } from '@mui/material';

const MedicalFooter = () => {
  return (
    <Alert severity="info">
      <AlertTitle>알려드립니다!</AlertTitle>
      {"이는 대략적인 비용이므로, 병원마다 차이가 있을 수 있습니다. 실제 비용은 근처 동물 병원에 문의해주시기 바랍니다."}
    </Alert>
  );
}

export default MedicalFooter;