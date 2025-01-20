/* eslint-disable react/prop-types */

import { FaPlus, FaMinus } from "react-icons/fa";

const ScoreHoleCard = ({ name, scoreKey, scoreValue, updateScores }) => {
  const handleScores = (value) => {
    updateScores(scoreKey, value);
  };

  return (
    <div className="flex py-4 bg-base text-primary w-full">
      <div className="flex w-3/5 my-auto">
        <span className="mx-auto text-xl">{name}</span>
      </div>
      <div className="flex w-2/5 my-auto">
        <FaMinus
          className="mx-auto my-auto"
          onClick={() => {
            handleScores(scoreValue - 1);
          }}
        />
        <span className="mx-auto text-4xl text-accent">{scoreValue}</span>
        <FaPlus
          className="mx-auto my-auto"
          onClick={() => {
            handleScores(scoreValue + 1);
          }}
        />
      </div>
    </div>
  );
};

export default ScoreHoleCard;
