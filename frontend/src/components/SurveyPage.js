import { useState } from "react";
import Survey from "./Survey";

const questionList = [
  ['1. 활발한 강아지를 원하나요?', 'energy'],
  ['2. 털빠짐에 민감한 편인가요?', 'shedding'],
]

function SurveyPage() {
  const [answers, setAnswers] = useState({})
  const addAnswer = (name, value) => {
    const new_answers = {...answers}
    new_answers[name] = value
    setAnswers(new_answers)
    console.log(new_answers);
  }

  return (
    <div>
      <section>
        {questionList.map((question, index) => (
          <Survey
          key={index}
          question={question[0]}
          paramName={question[1]}
          onAnswer={addAnswer}
          />
          ))}
      </section>
      <aside>
        <button>이전</button>
        <button>다음</button>
      </aside>
    </div>
  );
}

export default SurveyPage;
