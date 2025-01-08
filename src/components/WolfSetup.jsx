import { use } from "react";
import { MatchContext } from "../components/MatchContext";

const WolfSetup = () => {
  const { matchState, setMatchState } = use(MatchContext);

  const handleNamesUpdated = () => {
    updateNames();
    togglePlayersSet();
  };

  const togglePlayersSet = () => {
    setMatchState((prevData) => ({
      ...prevData,
      playersSet: true,
    }));
  };

  const updateName = (playerId, newName) => {
    setMatchState((prevData) => ({
      ...prevData,
      players: prevData.players.map((player) =>
        player.id === playerId ? { ...player, name: newName } : player,
      ),
    }));
  };

  const updateNames = () => {
    updateName(1, "Fred");
    updateName(2, "Barney");
    updateName(3, "Wilma");
    updateName(4, "Betty");
  };

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      <div className="h-full text-primary text-center flex flex-col justify-around">
        <p className="px-4 text-left">
          Determine the teeing order, then add player names in that order. The
          wolf always tees off first, and the role of wolf rotates throughout
          the round.
        </p>
        <ul>
          {matchState.players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
        <button
          className="bg-base w-44 py-1 rounded-md mx-auto"
          onClick={handleNamesUpdated}
        >
          Change Names
        </button>
      </div>
    </section>
  );
};

export default WolfSetup;
