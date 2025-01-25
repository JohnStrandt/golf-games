import { use } from "react";
import { WideButton } from "./";
import { MatchContext } from "../state";

const ShowLeaderboard = () => {
  const { matchState } = use(MatchContext);

  let players = matchState.players;
  // sort in descending order by points
  players.sort((a, b) => b.pointTotal - a.pointTotal);

  return (
    <div className="gap-2">
      {players.map((player) => (
        <div key={player.id} className="bg-background">
          <div className="text-primary text-center text=xl">{player.name}</div>
          <div className="text-primary text-center">
            Strokes: {player.strokeTotal}
          </div>
          <div className="text-primary text-center">
            Points: {player.pointTotal}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowLeaderboard;
