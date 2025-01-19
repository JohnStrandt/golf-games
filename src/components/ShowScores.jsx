import { use, useState, useEffect } from "react";
import { HoleNumber, WideButton } from "./";
import { MatchContext } from "../state";

const ShowScores = () => {
  const { matchState } = use(MatchContext);
  const [pack, setPack] = useState([]);
  const [sheep, setSheep] = useState([]);
  let hole = matchState.currentHole - 1;

  useEffect(() => {
    let tempPack = [];
    let tempSheep = [];

    // set wolf by index, may be lone or blind
    tempPack[0] = matchState.players[matchState.wolfIndex];

    matchState.players.forEach((player) => {
      switch (player.roles[hole]) {
        case "partner":
          tempPack[1] = player;
          break;
        case "sheep":
          tempSheep.push(player);
          break;
        default:
          break;
      }
      setPack(tempPack);
      setSheep(tempSheep);
    });
  }, [matchState, hole]);

  /*
      NOTE:    Work zone
               scoreTotal
               pointTotal
*/
  return (
    <div className="flex flex-col h-full justify-around">
      <HoleNumber hole={matchState.currentHole} />

      <div className="flex flex-col w-full py-4 lpy-4 bg-base text-primary">
        {pack.map((player) => (
          <div key={player.id} className="flex">
            <div className="flex w-2/5 justify-center">{player.name}</div>
            <div className="flex w-1/5 justify-center">
              {player.scores[hole]} strokes
            </div>
            <div className="flex w-1/5 justify-center">
              {player.points[hole]} points
            </div>
            <div className="flex w-1/5 justify-center">
              total {player.pointTotal}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full py-4 bg-base text-primary">
        {sheep.map((player) => (
          <div key={player.id} className="flex">
            <div className="flex w-1/2 justify-center">{player.name}</div>
            <div className="flex w-1/4 justify-center">
              {player.scores[hole]} strokes
            </div>
            <div className="flex w-1/4 justify-center">
              {player.points[hole]} points
            </div>
            <div className="flex w-1/5 justify-center">
              total {player.pointTotal}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <WideButton label="Next Hole" action={() => console.log("click")} />
      </div>
    </div>
  );
};

export default ShowScores;
