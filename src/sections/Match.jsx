import { Hole, WolfSetup } from "../components";
import { use } from "react";

import { MatchContext } from "../components/MatchContext";

const Match = () => {
  const { matchState } = use(MatchContext);
  let ready = matchState.playersSet;
  // update to state machine variable?

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      {!ready && <WolfSetup />}
      {ready && <Hole />}
    </section>
  );
};

export default Match;
