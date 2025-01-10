import { use } from "react";
import { PlayerScore, Button, NavButton } from "./";
import { MatchContext } from "../components/MatchContext";

const ScoreHole = () => {
  const { matchState } = use(MatchContext);
  let players = matchState.players;
  let par = 4;
  let hole = 1;

  return (
    <div className="flex flex-col h-full justify-around">
      <div className="flex h-24 w-24 items-center justify-center rounded-full mx-auto bg-accent text-background">
        <span className=" text-5xl font-medium">{hole}</span>
      </div>
      <div className="flex flex-col gap-4">
        <PlayerScore name={players[0].name} score={par} isWolf={true} />
        <PlayerScore name={players[1].name} score={par} isWolf={false} />
        <PlayerScore name={players[2].name} score={par} isWolf={false} />
        <PlayerScore name={players[3].name} score={par} isWolf={false} />
      </div>
      <div className="flex w-full justify-center">
        <Button label="score" action={() => console.log("score")} />
      </div>
      <div className="flex justify-around">
        <NavButton action={() => console.log("prev")} label="prev" />
        <NavButton action={() => console.log("next")} label="next" />
      </div>
    </div>
  );
};

export default ScoreHole;
