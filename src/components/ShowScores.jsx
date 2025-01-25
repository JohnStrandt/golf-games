import { use, useState, useEffect } from "react";
import { HoleNumber, ShowScoreCard, WideButton } from "./";
import { MatchContext } from "../state";

const ShowScores = () => {
  const { matchState, setMatchState } = use(MatchContext);
  const [pack, setPack] = useState([]);
  const [sheep, setSheep] = useState([]);
  let hole = matchState.currentHole - 1;

  useEffect(() => {
    let tempPack = [];
    let tempSheep = [];

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

  //    NOTE:   Player in last place is wolf on 17 & 18

  const getLastPlaceIndex = () => {
    let players = matchState.players;
    let lowest = players[0].pointTotal;
    let lowIndex;

    // find lowest point total
    for (let i = 1; i < 4; i++) {
      if (players[i].pointTotal < lowest) {
        lowest = players[i].pointTotal;
      }
    }

    // find all players with lowest point total
    let lowIndices = [];
    for (let i = 0; i < 4; i++) {
      if (players[i].pointTotal === lowest) {
        lowIndices.push(i);
      }
    }

    // if there is a tie for low total, pick a random wolf
    if (lowIndices.length > 1) {
      let randomElement = Math.floor(Math.random() * lowIndices.length);
      lowIndex = lowIndices[randomElement];
    } else {
      lowIndex = lowIndices[0];
    }

    return lowIndex;
  };

  const handleNextHoleButton = () => {
    if (matchState.currentHole < 18) {
      let nextHole = matchState.currentHole + 1;
      let nextState = "teams";
      let nextWolfIndex;

      // update who is the next wolf:
      if (matchState.currentHole >= 16) {
        nextWolfIndex = getLastPlaceIndex();
      } else {
        nextWolfIndex = (matchState.wolfIndex + 1) % 4;
      }

      setMatchState((prevData) => ({
        ...prevData,
        currentHole: nextHole,
        wolfIndex: nextWolfIndex,
        playState: nextState,
      }));
    } else {
      setMatchState((prevData) => ({
        ...prevData,
        playState: "leaderboard",
      }));
    }
  };

  return (
    <div className="flex flex-col h-full justify-around">
      <HoleNumber hole={matchState.currentHole} />

      <ShowScoreCard team={pack} hole={hole} />
      <ShowScoreCard team={sheep} hole={hole} />

      <div className="flex w-full justify-center">
        <WideButton
          label={matchState.currentHole === 18 ? "Final Scores" : "Next Hole"}
          action={handleNextHoleButton}
        />
      </div>
    </div>
  );
};

export default ShowScores;
