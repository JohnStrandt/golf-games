import { use, useState } from "react";
import { MatchContext } from "../components/MatchContext";

const WolfSetup = () => {
  const { matchState, setMatchState } = use(MatchContext);

  const [playerNames, setPlayerNames] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  });

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

  const updateNames = (e) => {
    e.preventDefault();
    updateName(1, playerNames.player1);
    updateName(2, playerNames.player2);
    updateName(3, playerNames.player3);
    updateName(4, playerNames.player4);

    togglePlayersSet();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerNames((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="flex flex-col p-2 h-[calc(100vh-80px)] justify-around bg-background">
      <div className="h-full text-primary text-center flex flex-col justify-around">
        <p className="px-4 text-left">
          Determine the teeing order, then add player names in that order. The
          wolf always tees off first, and the role of wolf rotates throughout
          the round.
        </p>
        <form
          onSubmit={updateNames}
          className="flex flex-col gap-4 text-primary mx-auto"
        >
          <input
            name="player1"
            type="text"
            onChange={handleChange}
            placeholder="Enter first player's name..."
            className="border border-gray-500 rounded w-56 py-2 pl-4 text-xl bg-base"
          />
          <input
            name="player2"
            type="text"
            onChange={handleChange}
            placeholder="Enter second player's name..."
            className="border border-gray-500 rounded w-56 py-2 pl-4 text-xl bg-base"
          />
          <input
            name="player3"
            type="text"
            onChange={handleChange}
            placeholder="Enter third player's name..."
            className="border border-gray-500 rounded w-56 py-2 pl-4 text-xl bg-base"
          />
          <input
            name="player4"
            type="text"
            onChange={handleChange}
            placeholder="Enter fourth player's name..."
            className="border border-gray-500 rounded w-56 py-2 pl-4 text-xl bg-base"
          />
          <button>Submit</button>
        </form>
        <ul>
          {matchState.players.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
        <button className="bg-base w-44 py-1 rounded-md mx-auto" type="submit">
          Change Names
        </button>
      </div>
    </section>
  );
};

export default WolfSetup;
