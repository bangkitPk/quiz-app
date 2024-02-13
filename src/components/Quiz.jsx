import { useState } from "react";
import Answers from "./Answers";

export default function Quiz({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div className="px-48">
      {questionIndex + 1 === questions.length ? (
        <div className="text-center pt-20">
          <p className="text-3xl uppercase mb-10">Quiz Result</p>
          <div className="result-item mb-5">
            <p className="text-xl">Correct Answers</p>
            <p className="text-6xl">{score}</p>
          </div>
          <div className="result-item mb-5">
            <p className="text-xl">Incorrect Answers</p>
            <p className="text-6xl">{questions.length - score}</p>
          </div>
          <div className="result-item">
            <p className="text-xl">Answered Questions</p>
            <p className="text-6xl">{questionIndex + 1}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-4xl mb-16">General Knowledge Quiz</h1>
          <div id="question" className="mb-10">
            <p className="text-light-bluish text-2xl">
              {questions[0] &&
                `Question ${questionIndex + 1} of ${questions.length}`}
            </p>
            <p className="text-4xl">
              {questions[0] &&
                decodeURIComponent(questions[questionIndex].question)}
            </p>
          </div>
          <div id="answers">
            {questions[0] && (
              <Answers
                question={questions[questionIndex]}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
                score={score}
                setScore={setScore}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
