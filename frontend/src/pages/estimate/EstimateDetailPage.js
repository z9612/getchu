import { useState } from 'react';
import {
  Alert,
  AlertTitle
} from '@mui/material';

import EstimateDetail from './EstimateDetail';
import estimateContent from './estimateContent'
import currency from './currencyFormatter';

const EstimateDetailPage = () => {
  const [sum, setSum] = useState(0)
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>병원비</h1>
      <div>주사 그림</div>
      <div>총합: {currency(sum)}</div>
      
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
      
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert 
        — <strong>check it out!</strong>
      </Alert>
    </div>
  );
}

export default EstimateDetailPage;