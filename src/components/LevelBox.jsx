export default function ({ level, setLevelSelected }) {
  const startQuiz = () => {
    setLevelSelected(level);
  };

  return (
    <div
      className="w-1/3 bg-grey-navy p-5 text-center duration-300 hover:bg-light-grey hover:text-navy"
      onClick={startQuiz}
    >
      {level}
    </div>
  );
}
