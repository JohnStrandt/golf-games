import { Hole, WolfSetup } from "../components";
import { useState } from "react";
const Match = () => {
  let [ready, setReady] = useState(false);

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      {!ready && <WolfSetup setReady={setReady} />}
      {ready && <Hole />}
    </section>
  );
};

export default Match;
