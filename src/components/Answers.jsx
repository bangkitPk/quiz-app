import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Answers({ question }) {
  const { questionIndex, setQuestionIndex, score, setScore } = useQuiz();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    let combinedAnswers = [
      question.correct_answer,
      ...question.incorrect_answers,
    ];
    let arrLength = combinedAnswers.length;
    let x;

    // acak jawaban jika tipe soal multiple
    // algoritma fisher yates
    if (question.type === "multiple") {
      for (x = arrLength - 1; x > 0; x--) {
        var y = Math.floor(Math.random() * x);
        var temp = combinedAnswers[x];
        combinedAnswers[x] = combinedAnswers[y];
        combinedAnswers[y] = temp;
      }
    } else {
      if (combinedAnswers[0] !== "True") {
        [combinedAnswers[0], combinedAnswers[1]] = [
          combinedAnswers[1],
          combinedAnswers[0],
        ];
      }
    }

    setAnswers(combinedAnswers);
  }, [question]);

  const handleAnswer = (answer) => {
    setQuestionIndex(questionIndex + 1);
    if (answer === question.correct_answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="text-3xl">
      {answers.map((answer, index) => (
        <div
          key={answer}
          className="p-5 bg-dark-navy mb-5 rounded-lg font-semibold cursor-pointer flex items-center hover:bg-light-bluish"
          onClick={() => handleAnswer(answer)}
        >
          {question.type === "multiple" ? (
            <span className="mr-5 bg-light-grey text-navy px-4 py-3 rounded-md">
              {String.fromCharCode(65 + index)} {/* Generate A,B,C,D */}
            </span>
          ) : (
            <></>
          )}
          <span>{decodeURIComponent(answer)}</span>
        </div>
      ))}
    </div>
  );
}
