import { useEffect } from "react";
import LevelBox from "../components/LevelBox";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";

export default function LevelPage() {
  const { levelSelected, setLevelSelected, questions, setQuestions } =
    useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (levelSelected !== "") {
      const fetchQuestions = async () => {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=10&category=9&difficulty=${levelSelected.toLowerCase()}&encode=url3986`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await res.json();
        setQuestions(data.results);

        // simpan pertanyaan ke localStorage

        // navigate to Quiz Page
        navigate(`/start quiz/${levelSelected}`);
      };

      fetchQuestions();
    }
  }, [levelSelected]);

  return (
    <div className="bg-navy min-h-screen text-light-grey w-screen flex flex-col items-center justify-center">
      <p className="text-2xl mb-5">Select Difficulties</p>
      <p className="text-lg mb-10 w-1/3 text-center">
        <span className="block text-4xl font-bold text-red">!</span>
        After you choose the difficulty level, the quiz will start immediately,
        and the timer will start running immediately.
      </p>
      <div className="w-screen flex flex-col items-center text-2xl gap-5 cursor-pointer">
        <LevelBox level={"Easy"} setLevelSelected={setLevelSelected} />
        <LevelBox level={"Medium"} setLevelSelected={setLevelSelected} />
        <LevelBox level={"Hard"} setLevelSelected={setLevelSelected} />
      </div>
    </div>
  );
}
