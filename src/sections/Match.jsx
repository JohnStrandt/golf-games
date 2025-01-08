import { useState, useContext } from "react";
import { Hole } from "../components";
import { MatchContext } from "../components/MatchContext";

const Match = () => {
  const { matchState, setMatchState } = useContext(MatchContext);

  const setName = (playerId, newName) => {
    setMatchState((prevData) => ({
      ...prevData,
      players: prevData.players.map((player) =>
        player.id === playerId ? { ...player, name: newName } : player,
      ),
    }));
  };

  const [hole, setHole] = useState(1);
  let players = ["A", "B", "C", "D"];
  let par = 4;

  const nextHole = () => {
    let next = hole + 1;
    if (next > 18) next = 1;
    setHole(next);
  };

  const prevHole = () => {
    let prev = hole - 1;
    if (prev < 1) prev = 18;
    setHole(prev);
  };

  const handleClick = () => {
    setName(1, "Fred");
    setName(2, "Barney");
    setName(3, "Wilma");
    setName(4, "Betty");
  };

  let ready = false;

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      {!ready && (
        <div className="h-full text-primary text-center flex flex-col justify-around">
          <p>Setting Up</p>
          <ul>
            {matchState.players.map((player) => (
              <li key={player.id}>{player.name}</li>
            ))}
          </ul>
          <button
            className="bg-base w-44 py-1 rounded-md mx-auto"
            onClick={handleClick}
          >
            Change Names
          </button>
        </div>
      )}
      {ready && (
        <Hole
          players={players}
          hole={hole}
          par={par}
          nextHole={nextHole}
          prevHole={prevHole}
        />
      )}
    </section>
  );
};

export default Match;
