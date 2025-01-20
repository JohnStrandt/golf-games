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

  //
  //  NOTE:   Player in last place is wolf on 17 & 18
  //          same guy can be wolf on both holes (possibly 16, 17, & 18!)
  //
  const getLastPlaceIndex = () => {
    let players = matchState.players;

    let lowest = players[0].pointTotal;
    let lowIndex = 0;
    for (let i = 1; i < 4; i++) {
      if (players[i].pointTotal < lowest) {
        lowest = players[i].pointTotal;
        lowIndex = i;
      }
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
        console.log(nextWolfIndex);
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
      console.log("Match Over!");

      // NOTE:    update to go to final page,
      //          Score card?  LeaderBoard?
      //          also update button label
    }
  };

  return (
    <div className="flex flex-col h-full justify-around">
      <HoleNumber hole={matchState.currentHole} />

      <ShowScoreCard team={pack} hole={hole} />
      <ShowScoreCard team={sheep} hole={hole} />

      <div className="flex w-full justify-center">
        <WideButton label="Next Hole" action={handleNextHoleButton} />
      </div>
    </div>
  );
};

export default ShowScores;
