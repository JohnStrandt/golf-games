import { SetPlayers, SetTeams, ScoreHole, ShowScores } from "../components";

import { use } from "react";
import { MatchContext } from "../state";

const Match = () => {
  const { matchState } = use(MatchContext);
  let state = matchState.playState;

  let four = 4;

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      {state == "setup" && <SetPlayers count={four} />}
      {state == "teams" && <SetTeams />}
      {state == "score" && <ScoreHole />}
      {state == "leaderboard" && <ShowScores />}
    </section>
  );
};

export default Match;
