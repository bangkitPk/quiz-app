import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Answers from "../components/Answers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const questions = location.state;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(300); // waktu 5 menit

  // timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  const handleTryAgain = () => {
    // reset state
    setQuestionIndex(0);
    setScore(0);
    setTime(300);
  };

  const handleSelectDifferentLevel = () => {
    // back to level page
    navigate("/level");
  };

  return (
    <div className="px-48 py-10 bg-navy min-h-screen text-light-grey">
      {questionIndex === questions.length || time === 0 ? (
        <div className="text-center pt-8">
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
            <p className="text-6xl">{questionIndex}</p>
          </div>
          <button
            className="bg-light-bluish rounded-md mr-5 mt-10 px-5 py-1 group hover:bg-light-grey hover:text-dark-navy"
            onClick={handleTryAgain}
          >
            Try Again
            <FontAwesomeIcon
              icon={faArrowsRotate}
              className="ml-2 duration-300 group-hover:rotate-180"
            />
          </button>
          <button
            className="bg-dark-navy rounded-md px-5 py-1 hover:bg-light-grey hover:text-dark-navy"
            onClick={handleSelectDifferentLevel}
          >
            Select Different Level
          </button>
        </div>
      ) : (
        <div>
          <div id="question" className="mb-10">
            <div className="flex justify-between items-center text-2xl mb-5">
              <p className="text-light-bluish">
                {questions[0] &&
                  `Question ${questionIndex + 1} of ${questions.length}`}
              </p>
              {/* {padStart untuk memastikan detik dan menit selalu dua digit
              dengan manambahkan 0 di depan} */}
              <span
                className={`${time < 10 && time % 2 == 1 ? "text-red" : ""}`}
              >{`${String(minutes).padStart(2, "0")} : ${String(
                seconds
              ).padStart(2, "0")}`}</span>
            </div>
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
