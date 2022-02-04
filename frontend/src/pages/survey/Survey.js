import { Stack } from "@mui/material";
import HelpIconButton from "../../components/HelpIconButton";

function Survey({question, detail, paramName, onAnswer}) {
  const indexList = [5, 4, 3, 2, 1]
  const getSelectedIndex = (event) => {
    onAnswer(paramName, event.target.value)
  }

  return (
    <Stack
      direction="column"
      alignItems="center"
    >
      <p>
        {question}
        <HelpIconButton content={detail} />
      </p>

      <div>
        <strong>YES </strong>

        {indexList.map((button, index) => (
          <input
            key={index}
            type="radio"
            name={`survey_${paramName}`} 
            value={index}
            onClick={getSelectedIndex}
            />
          ))}

        <strong> NO</strong>
      </div>
    </Stack>
  );
}

export default Survey;