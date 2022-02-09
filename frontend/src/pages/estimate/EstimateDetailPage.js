import { useState } from 'react';
import {
  Stack,
  Alert,
  AlertTitle
} from '@mui/material';
import MedicationIcon from '@mui/icons-material/Medication';

import EstimateDetail from './EstimateDetail';
import estimateContent from './estimateContent';
import estimateDisclaimer from './estimateDisclaimer';
import currency from './currencyFormatter';

const EstimateDetailPage = () => {
  const [sum, setSum] = useState(0)
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack
      height="90vh"
      direction="column"
      alignItems="stretch"
      justifyContent="space-between"
    >
      <Stack alignItems="center">
        <h1>의료비</h1>
        <MedicationIcon sx={{ fontSize: 100 }}/>
        <strong>총합: {currency(sum)}</strong>
      </Stack>
      <main>
        {estimateContent.map(content => (
          <EstimateDetail
            sum={content.price}
            title={content.title}
            detail={content.detail}
            checkDefault={content.checkDefault}
            
            expanded={expanded}
            handleChange={handleChange}
            setSum={setSum}
            key={content.title}
          /> 
        ))} 
      </main>
      <footer>
        <Alert severity="info">
          <AlertTitle>알려드립니다!</AlertTitle>
          {estimateDisclaimer.content}
        </Alert>
      </footer>
    </Stack>
  );
}

export default EstimateDetailPage;