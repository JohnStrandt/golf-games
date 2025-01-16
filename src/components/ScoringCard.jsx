/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import WolfIcon from "./WolfIcon";

const ScoringCard = ({ name, score, isWolf }) => {
  const [playerScore, setScore] = useState(score);

  return (
    <div className="flex py-4 bg-base text-primary w-full">
      {/* <div className="flex w-1/5 justify-center items-center"> */}
      {/*   {isWolf ? <WolfIcon /> : null} */}
      {/* </div> */}
      <div className="flex w-1/2 my-auto">
        <span className="mx-auto text-xl">{name}</span>
      </div>
      <div className="flex w-1/2 my-auto">
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

export default ScoringCard;
