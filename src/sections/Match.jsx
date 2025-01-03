import { PlayerScore, Button, NavButton } from "../components";

const Match = () => {
  let hole = 10;

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      <div className="flex h-24 w-24 items-center justify-center rounded-full mx-auto bg-accent text-background">
        <span className=" text-5xl font-medium">{hole}</span>
      </div>
      <div className="flex flex-col gap-4">
        <PlayerScore name="Fred" score={4} isWolf={true} />
        <PlayerScore name="Barney" score={3} isWolf={false} />
        <PlayerScore name="Wilma" score={5} isWolf={false} />
        <PlayerScore name="Betty" score={5} isWolf={false} />
      </div>
      <div className="flex w-full justify-center">
        <Button label="score" />
      </div>
      <div className="flex justify-around">
        <NavButton label="prev" />
        <NavButton label="next" />
      </div>
    </section>
  );
};

export default Match;
