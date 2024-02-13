export default function ResultPage() {
  return (
    <div className="px-48 py-10 bg-navy min-h-screen text-light-grey">
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
          <p className="text-6xl">{questionIndex}</p>
        </div>
      </div>
    </div>
  );
}
