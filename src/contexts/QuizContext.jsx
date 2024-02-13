import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [levelSelected, setLevelSelected] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(300);

  return (
    <QuizContext.Provider
      value={{
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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
