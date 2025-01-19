/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { roles } from "./";

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [matchState, setMatchState] = useState({
    players: [
      {
        id: "player1",
        name: "",
        roles: roles.player1,
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        scoreTotal: 0,
        pointTotal: 0,
      },
      {
        id: "player2",
        name: "",
        roles: roles.player2,
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        scoreTotal: 0,
        pointTotal: 0,
      },
      {
        id: "player3",
        name: "",
        roles: roles.player3,
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        scoreTotal: 0,
        pointTotal: 0,
      },
      {
        id: "player4",
        name: "",
        roles: roles.player4,
        scores: Array(18).fill(0),
        points: Array(18).fill(0),
        scoreTotal: 0,
        pointTotal: 0,
      },
    ],
    currentHole: 1,
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
