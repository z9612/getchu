import ImageButton from "./ImageButton";

function Survey({question, paramName, onAnswer}) {
  const indexList = [1, 2, 3, 4, 5]
  const getSelectedIndex = (event) => {
    console.log(event.target.value);
    onAnswer(paramName, event.target.value)
  }

  return (
    <article>
      <h5>{question}<ImageButton /></h5>

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
    </article>
  );
}

export default Survey;