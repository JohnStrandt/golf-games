import { useState, useEffect } from "react";

const Score = () => {
  const [gameState, setGameState] = useState({
    players: [
      {
        name: "Player 1",
        scores: Array(18).fill(0),
        currentPoints: 0,
        pointsPerHole: Array(18).fill(0),
        isWolf: false,
        partner: null,
      },
      {
        name: "Player 2",
        scores: Array(18).fill(0),
        currentPoints: 0,
        pointsPerHole: Array(18).fill(0),
        isWolf: false,
        partner: null,
      },
      {
        name: "Player 3",
        scores: Array(18).fill(0),
        currentPoints: 0,
        pointsPerHole: Array(18).fill(0),
        isWolf: false,
        partner: null,
      },
      {
        name: "Player 4",
        scores: Array(18).fill(0),
        currentPoints: 0,
        pointsPerHole: Array(18).fill(0),
        isWolf: false,
        partner: null,
      },
    ],
    currentHole: 0,
    wolfIndex: 0,
    scoresPerHole: Array(18).fill({ winner: [], wolf: null, team: null }),
  });

  // ... (keep setWolf, setPartner, goLoneWolf, and updateIndividualScore as they were)

  // Function to set a new wolf
  const setWolf = (index) => {
    setGameState((prev) => ({
      ...prev,
      players: prev.players.map((player, i) => ({
        ...player,
        isWolf: i === index,
        partner: null,
      })),
      wolfIndex: index,
    }));
  };

  // Function to team up wolf with another player
  const setPartner = (partnerIndex) => {
    setGameState((prev) => ({
      ...prev,
      players: prev.players.map((player, i) => ({
        ...player,
        partner:
          i === prev.wolfIndex
            ? partnerIndex
            : i === partnerIndex
              ? prev.wolfIndex
              : null,
      })),
      scoresPerHole: prev.scoresPerHole.map((hole, i) =>
        i === prev.currentHole
          ? { ...hole, team: [prev.wolfIndex, partnerIndex] }
          : hole,
      ),
    }));
  };

  // Function to go Lone Wolf
  const goLoneWolf = () => {
    setGameState((prev) => ({
      ...prev,
      players: prev.players.map((player, i) => ({
        ...player,
        partner: i === prev.wolfIndex ? null : player.partner,
      })),
      scoresPerHole: prev.scoresPerHole.map((hole, i) =>
        i === prev.currentHole ? { ...hole, team: null } : hole,
      ),
    }));
  };

  // Function to update individual scores
  const updateIndividualScore = (playerIndex, score) => {
    setGameState((prev) => ({
      ...prev,
      players: prev.players.map((player, i) =>
        i === playerIndex
          ? {
              ...player,
              scores: [
                ...player.scores.slice(0, prev.currentHole),
                score,
                ...player.scores.slice(prev.currentHole + 1),
              ],
            }
          : player,
      ),
    }));
  };

  // Function to handle scoring based on who won the hole
  const scoreHole = (winnerIndices) => {
    setGameState((prev) => {
      const newPlayers = [...prev.players];
      const isLoneWolf = newPlayers[prev.wolfIndex].partner === null;
      const newScoresPerHole = [...prev.scoresPerHole];
      newScoresPerHole[prev.currentHole] = {
        ...newScoresPerHole[prev.currentHole],
        winner: winnerIndices,
        wolf: prev.wolfIndex,
        team: isLoneWolf
          ? null
          : [prev.wolfIndex, newPlayers[prev.wolfIndex].partner],
      };

      newPlayers.forEach((player, i) => {
        let pointsChange = 0;

        if (isLoneWolf) {
          if (winnerIndices.includes(i)) {
            pointsChange = i === prev.wolfIndex ? 6 : -2;
          } else {
            pointsChange = i === prev.wolfIndex ? -6 : 2;
          }
        } else {
          if (winnerIndices.includes(i)) {
            pointsChange =
              i === prev.wolfIndex || i === newPlayers[prev.wolfIndex].partner
                ? 1
                : -1;
          } else {
            pointsChange =
              i === prev.wolfIndex || i === newPlayers[prev.wolfIndex].partner
                ? -1
                : 1;
          }
        }

        player.currentPoints += pointsChange;
        player.pointsPerHole[prev.currentHole] = pointsChange;
      });

      return {
        ...prev,
        players: newPlayers,
        currentHole: prev.currentHole + 1,
        scoresPerHole: newScoresPerHole,
        wolfIndex: (prev.wolfIndex + 1) % 4, // Rotate wolf index
      };
    });
  };

  // Function to generate scorecard data including points won or lost per hole
  const generateScorecard = () => {
    return gameState.players.map((player) => ({
      name: player.name,
      scores: player.scores,
      currentPoints: player.currentPoints,
      pointsPerHole: player.pointsPerHole,
      wasWolfOnHoles: gameState.scoresPerHole.reduce(
        (acc, hole, index) =>
          hole.wolf === player.name ? [...acc, index + 1] : acc,
        [],
      ),
    }));
  };

  useEffect(() => {
    setWolf(gameState.wolfIndex); // Set the initial wolf or rotate after each hole
  }, [gameState.wolfIndex]);

  return (
    <div>
      <h2>Hole: {gameState.currentHole + 1}</h2>
      <p>Current Wolf: {gameState.players[gameState.wolfIndex].name}</p>
      {gameState.players.map((player, index) => (
        <div key={index}>
          <p>
            {player.name} - Points: {player.currentPoints}
            {player.isWolf && "(Wolf)"}
            <br />
            Stroke on Hole: {player.scores[gameState.currentHole] || 0}
          </p>
          <input
            type="number"
            value={player.scores[gameState.currentHole] || ""}
            onChange={(e) =>
              updateIndividualScore(index, parseInt(e.target.value) || 0)
            }
            placeholder="Enter score"
          />
          {player.isWolf && player.partner === null && (
            <>
              <button onClick={goLoneWolf}>Go Lone Wolf</button>
              {gameState.players.map(
                (_, i) =>
                  i !== gameState.wolfIndex && (
                    <button key={i} onClick={() => setPartner(i)}>
                      Team with {gameState.players[i].name}
                    </button>
                  ),
              )}
            </>
          )}
          <p>
            Points on Hole {gameState.currentHole + 1}:{" "}
            {player.pointsPerHole[gameState.currentHole] || 0}
          </p>
        </div>
      ))}
      <button onClick={() => scoreHole([0, 1])}>
        Score Hole (Team A wins)
      </button>
      <button onClick={() => scoreHole([2, 3])}>
        Score Hole (Team B wins)
      </button>
      <button onClick={() => scoreHole([gameState.wolfIndex])}>
        Score Hole (Lone Wolf wins)
      </button>
      <button
        onClick={() =>
          scoreHole([0, 1, 2, 3].filter((i) => i !== gameState.wolfIndex))
        }
      >
        Score Hole (Lone Wolf loses)
      </button>

      <button
        onClick={() =>
          console.log(JSON.stringify(generateScorecard(), null, 2))
        }
      >
        Generate Scorecard
      </button>
    </div>
  );
};

export default Score;
