import { Stack } from '@mui/material';
import MedicationIcon from '@mui/icons-material/Medication';

import currency from '../currencyFormatter';

const MedicalHeader = ({ sum }) => {
  return (
    <Stack alignItems="center">
        <h1>의료비</h1>
        <MedicationIcon sx={{ fontSize: 100 }}/>
        <strong>총합: {currency(sum)}</strong>
    </Stack>
  );
}

export default MedicalHeader;