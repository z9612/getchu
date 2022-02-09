import { useState } from 'react';
import { Stack } from '@mui/material';

import MedicalHeader from './MedicalHeader';
import MedicalDetail from './MedicalDetail';
import MedicalFooter from './MedicalFooter';
import medicalContent from './medicalContent';

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
      <MedicalHeader sum={sum} />
      <main>
        {medicalContent.map(content => (
          <MedicalDetail
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
      <MedicalFooter />
    </Stack>
  );
}

export default EstimateDetailPage;