import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import LevelPage from "./pages/LevelPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/level" element={<LevelPage />} />
        <Route path="/start quiz/:level/*" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;
