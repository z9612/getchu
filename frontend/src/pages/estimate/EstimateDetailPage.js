import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Alert,
  AlertTitle
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import EstimateDetail from './EstimateDetail';
import estimateContent from './estimateContent'

export default function EstimateDetailPage() {
  return (
    <div>
      <h1>병원비</h1>
      <div>주사 그림</div>
      
      {estimateContent.map(content => (
        <EstimateDetail
          sum={content.price}
          title={content.title}
          detail={content.detail}
        />
      ))} 
      
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert 
        — <strong>check it out!</strong>
      </Alert>
    </div>
  );
}
