import Survey from './Survey';

function SurveySet({questionSet, onAnswer}) {
  return (
    <div>
      {questionSet.map(question => (
        <Survey
        key={question.paramName}
        question={question.text}
        paramName={question.paramName}
        onAnswer={onAnswer}
        />
        ))}
    </div>
  );
}

export default SurveySet;