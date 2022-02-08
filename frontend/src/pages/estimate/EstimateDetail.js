import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EstimateDetail = ({ sum, title, detail, index }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography sx={{ width: '50%', flexShrink: 0 }}>
          { sum }
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          { title }
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {detail.map(item => (
            <li>
              <Typography>
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}

export default EstimateDetail;