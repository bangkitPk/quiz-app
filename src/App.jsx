import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LevelPage from "./pages/LevelPage";
import QuizPage from "./pages/QuizPage";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";

function App() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<AuthPage />}></Route>
        <Route path="/register" element={<AuthPage />}></Route>
        <Route path="/level" element={<LevelPage />} />
        <Route path="/start quiz/:level/*" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;
