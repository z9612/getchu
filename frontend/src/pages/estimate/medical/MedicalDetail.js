import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  Stack,
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
        {/* <Typography>설명: {medical.comment}</Typography> */}
        <Stack direction="row" justifyContent="space-between">
          <Typography>최저가</Typography>
          <Typography>평균가</Typography>
          <Typography>최고가</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>{currency(medical.min)}</Typography>
          <Typography>{currency(medical.avg)}</Typography>
          <Typography>{currency(medical.max)}</Typography>
        </Stack>

        {/* 항목 포함 여부 */}
        <Stack direction="row" alignItems="center" justifyContent="center">
          {medical.defaultCheck ? "포함" : "미포함"}
          <Checkbox 
            checked={medical.defaultCheck}
            onClick={() => {
              changeSumByIndex(index, medical.defaultCheck)
            }}
          />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default MedicalDetail;