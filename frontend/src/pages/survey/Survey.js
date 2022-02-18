import { Stack } from "@mui/material";
import HelpIconButton from "../../components/HelpIconButton";

function Survey({ question, onAnswer }) {
  let optionList = question.optionNum === '5' ? [5, 4, 3, 2, 1] : [5, 1]
  optionList = question.reverse ? optionList.reverse() : optionList

  const getSelectedIndex = (event) => {
    onAnswer(question.paramName, event.target.value)
  }

  return (
    <Stack
      direction="column"
      alignItems="center"
    >
      <p>
        { question.text }
        {/* { question.detail ? <HelpIconButton content={question.detail} /> : null } */}
      </p>

      <div>
        <strong>YES </strong>

        {optionList.map((button, index) => (
          <input
            key={index}
            type="radio"
            name={`survey_${question.paramName}`} 
            value={button}
            onClick={getSelectedIndex}
            />
          ))}

        <strong> NO</strong>
      </div>
    </Stack>
  );
}

export default Survey;