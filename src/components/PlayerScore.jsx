/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from "react-icons/fa";

const PlayerScore = ({ name, score }) => {
  return (
    <div className="flex bg-sky-500 text-white h-20 w-full rounded-xl p-1">
      <div className="flex w-3/5 my-auto">
        <span className="mx-auto text-xl">{name}</span>
      </div>
      <div className="flex w-2/5 my-auto">
        <FaMinus className="mx-auto my-auto" />
        <span className="mx-auto text-4xl">{score}</span>
        <FaPlus className="mx-auto my-auto" />
      </div>
    </div>
  );
};

export default PlayerScore;
