import { PlayerScore, Button, NavButton } from "../components";

const Match = () => {
  let hole = 10;

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-red-50 text-white">
      <div className="flex h-24 w-24 items-center justify-center rounded-full mx-auto bg-red-400">
        <span className=" text-5xl">{hole}</span>
      </div>
      <div className="flex flex-col gap-4">
        <PlayerScore name="David Hasselhoff" score={4} />
        <PlayerScore name="Barney" score={3} />
        <PlayerScore name="Wilma" score={5} />
        <PlayerScore name="Betty" score={5} />
      </div>
      <div className="flex w-full justify-center">
        <Button label="score" />
      </div>
      <div className="flex gap-2">
        <NavButton label="prev" />
        <NavButton label="next" />
      </div>
    </section>
  );
};

export default Match;
