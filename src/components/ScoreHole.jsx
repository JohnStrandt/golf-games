import { use, useState, useEffect } from "react";
import { HoleNumber, WideButton, ScoringCard } from "./";
import { MatchContext } from "../state";

const ScoreHole = () => {
  const { matchState, setMatchState } = use(MatchContext);
  const [pack, setPack] = useState([]);
  const [sheep, setSheep] = useState([]);

  // the scores could be initialized to a hole's par...
  const [scores, setScores] = useState({
    player1: 4,
    player2: 4,
    player3: 4,
    player4: 4,
  });

  // this handles the clicking of + or - on scoring page
  const handleScoreUpdate = (key, value) => {
    setScores((prev) => ({ ...prev, [key]: value }));
  };

  const nextState = (state) => {
    setMatchState((prevData) => ({
      ...prevData,
      playState: state,
    }));
  };

  useEffect(() => {
    let tempPlayer = []; //   pointers
    let tempPack = [];
    let tempSheep = [];

    for (let i = 0; i <= 3; i++) {
      tempPlayer = matchState.players[i];
      switch (tempPlayer.roles[matchState.currentHole - 1]) {
        case "wolf":
          tempPack[0] = tempPlayer;
          break;
        case "lonewolf":
          tempPack[0] = tempPlayer;
          break;
        case "blindwolf":
          tempPack[0] = tempPlayer;
          break;
        case "partner":
          tempPack[1] = tempPlayer;
          break;
        default:
          tempSheep.push(tempPlayer);
          break;
      }
    }
    setPack(tempPack);
    setSheep(tempSheep);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLowest = (team) => {
    let best = scores[team[0].id];
    if (team.length > 1) {
      for (let i = 1; i < sheep.length; i++) {
        best = scores[team[i].id] < best ? scores[team[i].id] : best;
      }
    }
    return best;
  };

  const setPoints = () => {
    // wolf status determine's points

    let points = 2;
    if (pack[0].roles[matchState.currentHole - 1] == "lonewolf") {
      points = 6;
    } else if (pack[0].roles[matchState.currentHole - 1] == "blindwolf") {
      points = 9;
    }
    return points;
  };

  const handleScoreHoleButton = () => {
    let packPoints = 0;
    let sheepPoints = 0;

    // find lowest score of each team
    let packBest = getLowest(pack);
    let sheepBest = getLowest(sheep);

    if (packBest != sheepBest) {
      let points = setPoints();

      // determine share of points
      if (packBest < sheepBest) {
        packPoints = points / pack.length;
        sheepPoints = -(points / sheep.length);
      } else {
        packPoints = -(points / pack.length);
        sheepPoints = points / sheep.length;
      }
    }

    stageUpdates(pack, packPoints);
    stageUpdates(sheep, sheepPoints);

    nextState("leaderboard");
  };

  const stageUpdates = (team, points) => {
    // resolve player id to an index, then update score

    team.forEach((member) => {
      const index = matchState.players.findIndex(
        (player) => player.id === member.id,
      );
      updateScore(index, scores[member.id], points);
    });
  };

  const updateScore = (playerIndex, score, points) => {
    setMatchState((prevMatchState) => {
      const newPlayers = [...prevMatchState.players];
      const playerData = newPlayers[playerIndex];

      const newScores = [...playerData.scores];
      const newPoints = [...playerData.points];

      newScores[prevMatchState.currentHole - 1] = score;
      newPoints[prevMatchState.currentHole - 1] = points;

      const newScoreTotal = newScores.reduce((sum, s) => sum + s, 0);
      const newPointTotal = newPoints.reduce((sum, s) => sum + s, 0);

      newPlayers[playerIndex] = {
        ...playerData,
        scores: newScores,
        points: newPoints,
        scoreTotal: newScoreTotal,
        pointTotal: newPointTotal,
      };

      return {
        ...prevMatchState,
        players: newPlayers,
      };
    });
  };

  return (
    <div className="flex flex-col h-full justify-around">
      <HoleNumber hole={matchState.currentHole} />

      <div className="flex flex-col h-2/3 gap-3 justify-around">
        <div className="flex flex-col gap-1">
          {pack.map((player) => (
            <ScoringCard
              key={player.id}
              name={player.name}
              scoreKey={player.id}
              scoreValue={scores[player.id]}
              updateScores={handleScoreUpdate}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {sheep.map((player) => (
            <ScoringCard
              key={player.id}
              name={player.name}
              scoreKey={player.id}
              scoreValue={scores[player.id]}
              updateScores={handleScoreUpdate}
            />
          ))}
        </div>
        <div className="flex w-full justify-center">
          <WideButton label="Score Hole" action={handleScoreHoleButton} />
        </div>
      </div>
    </div>
  );
};

export default ScoreHole;
