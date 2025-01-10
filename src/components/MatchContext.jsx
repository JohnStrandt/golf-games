/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [matchState, setMatchState] = useState({
    players: [
      {
        id: "player1",
        name: "",
        roles: Array(18).fill("sheep"),
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
      {
        id: "player2",
        name: "",
        roles: Array(18).fill("sheep"),
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
      {
        id: "player3",
        name: "",
        roles: Array(18).fill("sheep"),
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
      {
        id: "player4",
        name: "",
        roles: Array(18).fill("sheep"),
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
    ],
    currentHole: 0,
    wolfIndex: 0,
    playState: "setup",
  });

  const contextValue = { matchState, setMatchState };

  return (
    <MatchContext.Provider value={contextValue}>
      {children}
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchProvider };
