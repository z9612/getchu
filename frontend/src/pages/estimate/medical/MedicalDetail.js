import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import currency from '../currencyFormatter';

const MedicalDetail = ({ 
  medical,  
  expanded,
  handleChange, 
  changeSumByIndex,
  index 
}) => {
  return (
    <Accordion 
      expanded={expanded === medical.name} 
      onChange={handleChange(medical.name)}
    >
      {/* 제목 부분 */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        {/* 좌측 제목 */}
        <Typography sx={{ width: '50%', flexShrink: 0 }}>
          { medical.defaultCheck ? currency(medical.avg) : currency(0) }
        </Typography>

        {/* 우측 부제목 */}
        <Typography sx={{ color: 'text.secondary' }}>
          { medical.name }
        </Typography>
      </AccordionSummary>
      
      {/* 세부 내용 부분 */}
      <AccordionDetails>
        <Typography>{medical.min}</Typography>
        <Typography>{medical.max}</Typography>
        {/* 항목 포함 여부 */}
        <div>
          <Checkbox 
            checked={medical.defaultCheck}
            onClick={() => {
              changeSumByIndex(index, medical.defaultCheck)
            }}
          />
          {medical.defaultCheck ? "포함" : "미포함"}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default MedicalDetail;