/* eslint-disable react/prop-types */

import { PlayerScore, Button, NavButton } from "./";

const Hole = ({ players, hole, par, prevHole, nextHole }) => {
  return (
    <div className="flex flex-col h-full justify-around">
      <div className="flex h-24 w-24 items-center justify-center rounded-full mx-auto bg-accent text-background">
        <span className=" text-5xl font-medium">{hole}</span>
      </div>
      <div className="flex flex-col gap-4">
        <PlayerScore name={players[0]} score={par} isWolf={true} />
        <PlayerScore name={players[1]} score={par} isWolf={false} />
        <PlayerScore name={players[2]} score={par} isWolf={false} />
        <PlayerScore name={players[3]} score={par} isWolf={false} />
      </div>
      <div className="flex w-full justify-center">
        <Button label="score" />
      </div>
      <div className="flex justify-around">
        <NavButton action={prevHole} label="prev" />
        <NavButton action={nextHole} label="next" />
      </div>
    </div>
  );
};

export default Hole;
