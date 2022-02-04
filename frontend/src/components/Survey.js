import { Grid } from "@mui/material";

function Survey({question, paramName, onAnswer}) {
  const indexList = [1, 2, 3, 4, 5]
  const getSelectedIndex = (event) => {
    console.log(event.target.value);
    onAnswer(paramName, event.target.value)
  }

  return (
    <Grid 
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <p>{question}</p>
      </Grid>
      <Grid item>
        <strong>YES </strong>

        {indexList.map(index => (
          <input
          key={index}
          type="radio" 
          name={`survey_${paramName}`} 
          value={index}
          onClick={getSelectedIndex}
          />
          ))}

        <strong> NO</strong>
      </Grid>
    </Grid>
  );
}

export default Survey;