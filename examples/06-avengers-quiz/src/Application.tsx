import * as React from 'react';
import { questions } from './questions';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [isHidden, toggleHidden] = React.useState(true);
  // const [isHidden, toogleHidden] = React.useState<boolean>(true); is the same as above line but not necessary since typescript could figure it out with init value.

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className="blurred">{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(false)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

const Application = () => {
  return (
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id} />
      ))}
    </main>
  );
};

export default Application;
