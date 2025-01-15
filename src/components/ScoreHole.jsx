import { use, useState, useEffect } from "react";
import { HoleNumber, PlayerScore, WideButton, NavButton } from "./";
import { MatchContext } from "../state";

const ScoreHole = () => {
  const { matchState } = use(MatchContext);
  let holeIndex = matchState.currentHole - 1;
  const [pack, setPack] = useState([]);
  const [sheep, setSheep] = useState([]);

  let par = 4;

  useEffect(() => {
    let temp = [];
    let tPack = [];
    let tSheep = [];

    for (let i = 0; i <= 3; i++) {
      temp = matchState.players[i];
      switch (temp.roles[holeIndex]) {
        case "wolf":
          tPack[0] = temp;
          break;
        case "lonewolf":
          tPack[0] = temp;
          break;
        case "blindwolf":
          tPack[0] = temp;
          break;
        case "partner":
          tPack[1] = temp;
          break;
        default:
          tSheep.push(temp);
          break;
      }
    }
    setPack(tPack);
    setSheep(tSheep);
    // setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*

   TODO: I need a teamCard for scoring teams 

  */

  return (
    <div className="flex flex-col h-full justify-around">
      <HoleNumber hole={matchState.currentHole} />
      <div>
        {pack.map((player) => (
          <p key={player.id} className="text-red-700">
            {player.name}
          </p>
        ))}
        {sheep.map((player) => (
          <p key={player.id} className="text-blue-700">
            {player.name}
          </p>
        ))}
      </div>

      <div className="flex w-full justify-center">
        <WideButton label="score" action={() => console.log("score")} />
      </div>
      <div className="flex justify-around">
        <NavButton action={() => console.log("prev")} label="prev" />
        <NavButton action={() => console.log("next")} label="next" />
      </div>
    </div>
  );
};

export default ScoreHole;
