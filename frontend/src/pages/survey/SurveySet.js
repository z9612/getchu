import { Stack } from '@mui/material';
import Survey from './Survey';

function SurveySet({questionSet, onAnswer}) {
  return (
    <Stack
      height="70vh"
      justifyContent="space-evenly"
    >
      {questionSet.map(question => (
        <Survey
        key={question.paramName}
        question={question}
        onAnswer={onAnswer}
        />
        ))}
    </Stack>
  );
}

export default SurveySet;