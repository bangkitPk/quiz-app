import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  const openLevelPage = () => {
    navigate("/level");
  };

  return (
    <div className="font-rubik bg-navy min-h-screen text-light-grey py-10 w-screen flex flex-col justify-center items-center gap-28">
      <h1 className="text-5xl">General Knowledge Quiz</h1>
      <button
        className="bg-light-bluish px-8 text-lg py-2 hover:bg-light-grey hover:text-navy"
        onClick={openLevelPage}
      >
        Start Quiz
      </button>
    </div>
  );
}
