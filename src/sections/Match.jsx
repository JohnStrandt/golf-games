import {
  SetPlayers,
  SetTeams,
  ScoreHole,
  ShowScores,
  ShowLeaderboard,
} from "../components";

import { use } from "react";
import { MatchContext } from "../state";

const Match = () => {
  const { matchState } = use(MatchContext);
  let state = matchState.playState;

  let playerCount = 4;

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      {state == "setup" && <SetPlayers count={playerCount} />}
      {state == "teams" && <SetTeams />}
      {state == "score" && <ScoreHole />}
      {state == "showscores" && <ShowScores />}
      {state == "leaderboard" && <ShowLeaderboard />}
    </section>
  );
};

export default Match;
