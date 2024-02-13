import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function HomePage() {
  const { isAuth } = useAuth();
  const {
    levelSelected,
    setLevelSelected,
    questions,
    setQuestions,
    questionIndex,
    setQuestionIndex,
    score,
    setScore,
    time,
    setTime,
  } = useQuiz();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  // cek apakah ada state quiz yang tersimpan di localStorage
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("quizState"));
    if (savedState) {
      setLevelSelected(savedState.levelSelected);
      setQuestions(savedState.questions);
      setQuestionIndex(savedState.questionIndex);
      setScore(savedState.score);
      setTime(savedState.time);
    }
  }, []);

  const openLevelPage = () => {
    navigate("/level");
  };

  const resumeQuiz = () => {
    navigate(`/start quiz/${levelSelected}`);
  };

  return (
    <div className="font-rubik bg-navy min-h-screen text-light-grey py-10 w-screen flex flex-col justify-center items-center gap-28">
      <h1 className="text-5xl">General Knowledge Quiz</h1>
      {levelSelected === "" ? (
        <button
          className="bg-light-bluish px-8 text-lg py-2 hover:bg-light-grey hover:text-navy"
          onClick={openLevelPage}
        >
          Start Quiz
        </button>
      ) : (
        <button
          className="bg-light-bluish px-8 text-lg py-2 hover:bg-light-grey hover:text-navy"
          onClick={resumeQuiz}
        >
          Resume Quiz
        </button>
      )}
    </div>
  );
}
