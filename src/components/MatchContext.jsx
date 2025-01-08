/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [matchState, setMatchState] = useState({
    players: [
      {
        id: 1,
        name: "Fonzi",
        roles: Array(18).fill("sheep"), // wolf, partner, or sheep
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
      {
        id: 2,
        name: "Richie",
        roles: Array(18).fill("sheep"),
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
      {
        id: 3,
        name: "Potsy",
        roles: Array(18).fill("sheep"),
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
      {
        id: 4,
        name: "Ralph",
        roles: Array(18).fill("sheep"),
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        total: 0,
      },
    ],
    currentHole: 0,
    wolfIndex: 0,
  });

  const contextValue = { matchState, setMatchState };

  return (
    <MatchContext.Provider value={contextValue}>
      {children}
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchProvider };
