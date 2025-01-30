import { use } from "react";
import { WideButton } from "./";
import { MatchContext } from "../state";

const ShowLeaderboard = () => {
  const { matchState } = use(MatchContext);

  let players = matchState.players;
  // sort in descending order by points
  players.sort((a, b) => b.pointTotal - a.pointTotal);

  return (
    <div className="flex flex-col gap-1 text-primary">
      {players.map((player) => (
        <div key={player.id} className="flex bg-base py-4">
          <div className="flex w-1/2 justify-center items-center">
            <span className="text-accent text-2xl">{player.name}</span>
          </div>

          <div className="flex flex-col w-1/4 text-center">
            <span className="text-accent text-2xl">{player.pointTotal}</span>
            <span className="text-sm">points</span>
          </div>

          <div className="flex flex-col w-1/4 text-center">
            <span className="text-accent text-2xl">{player.strokeTotal}</span>
            <span className="text-sm">strokes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowLeaderboard;
