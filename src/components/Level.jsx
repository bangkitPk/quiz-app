import LevelBox from "./LevelBox";

export default function Level() {
  return (
    <>
      <p className="text-center text-2xl mb-10">Select Difficulties</p>
      <div className="w-screen flex flex-col items-center text-2xl gap-5 cursor-pointer">
        <LevelBox level={"Easy"} />
        <LevelBox level={"Medium"} />
        <LevelBox level={"Hard"} />
      </div>
    </>
  );
}
