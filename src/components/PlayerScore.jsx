/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import WolfIcon from "./WolfIcon";

const PlayerScore = ({ name, score, isWolf }) => {
  const [playerScore, setScore] = useState(score);

  return (
    <div className="flex border border-primary text-primary h-16 w-full bg-base rounded-xl p-1">
      <div className="flex w-1/5 justify-center items-center">
        {isWolf ? <WolfIcon /> : null}
      </div>
      <div className="flex w-2/5 my-auto">
        <span className="mx-auto text-xl">{name}</span>
      </div>
      <div className="flex w-2/5 my-auto">
        <FaMinus
          className="mx-auto my-auto"
          onClick={() => {
            setScore(playerScore - 1);
          }}
        />
        <span className="mx-auto text-4xl text-accent">{playerScore}</span>
        <FaPlus
          className="mx-auto my-auto"
          onClick={() => {
            setScore(playerScore + 1);
          }}
        />
      </div>
    </div>
  );
};

export default PlayerScore;
