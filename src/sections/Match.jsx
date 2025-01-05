import { useState } from "react";
import { Hole } from "../components";
// import { Player } from "../utils";

const Match = () => {
  // let players = [
  //   new Player("Fred"),
  //   new Player("Barney"),
  //   new Player("Wilma"),
  //   new Player("Betty"),
  // ];

  let players = ["Fred", "Barney", "Wilma", "Betty"];
  const [hole, setHole] = useState(1);

  let par = 4;

  const nextHole = () => {
    let next = hole + 1;
    if (next > 18) next = 1;
    setHole(next);
  };

  const prevHole = () => {
    let prev = hole - 1;
    if (prev < 1) prev = 18;
    setHole(prev);
  };

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      <Hole
        players={players}
        hole={hole}
        par={par}
        nextHole={nextHole}
        prevHole={prevHole}
      />
    </section>
  );
};

export default Match;
