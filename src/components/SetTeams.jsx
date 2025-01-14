import { use, useState, useEffect } from "react";
import { MatchContext } from "../data";
import { HoleNumber, WideButton, CustomRadioButton } from "./";

// this component is only used for Wolf - might wanna rename
const SetTeams = () => {
  const { matchState, setMatchState } = use(MatchContext);
  const [loading, setLoading] = useState(true);

  const [wolf, setWolf] = useState(null);
  const [sheep, setSheep] = useState([]);
  const [wolfChoice, setWolfChoice] = useState(null);

  useEffect(() => {
    setWolf(matchState.players[matchState.wolfIndex]);

    let index = (matchState.wolfIndex + 1) % 4;
    let temp = [];
    for (let i = 0; i < 3; i++) {
      temp[i] = matchState.players[index];
      index = (index + 1) % 4;
    }

    setSheep(temp);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*

   TODO: onClick for lone and blind will have a function that updates Wolf role 

   TODO: onClick for sheep will update their role as partner using their IDs

   TODO: Sheep and Pack arrays created in scoring page

  */

  const handleChange = (event) => {
    setWolfChoice(event.target.value);
  };

  const setRoles = () => {
    if (wolfChoice == "lonewolf" || wolfChoice == "blindwolf") {
      updateRole(wolf.id, wolfChoice);
      console.log(wolf.roles);
    } else {
      updateRole(wolfChoice, "partner");
      displaySheepRoles(wolfChoice);
    }
  };

  // delete this later
  const displaySheepRoles = (id) => {
    let index;

    switch (id) {
      case "player1":
        index = 0;
        break;
      case "player2":
        index = 1;
        break;
      case "player3":
        index = 2;
        break;
      case "player4":
        index = 3;
        break;
      default:
        break;
    }
    console.log(matchState.players[index].roles);
  };

  /*
       TODO: PlayerId only here 2x

       It crashed when I changed ids to == index
       I must have missed something...
 */

  const updateRole = (playerId, role) => {
    let holeIndex = matchState.currentHole - 1;

    setMatchState((prevState) => {
      // Find the golfer by id
      const playerIndex = prevState.players.findIndex(
        (player) => player.id === playerId,
      );

      if (playerIndex === -1) {
        console.error("Golfer not found");
        return prevState;
      }

      const updatedPlayers = [...prevState.players];
      const player = { ...updatedPlayers[playerIndex] };

      // Update the score for the specific hole
      player.roles[holeIndex] = role;

      // Update the golfer in the array
      updatedPlayers[playerIndex] = player;

      return {
        ...prevState,
        players: updatedPlayers,
      };
    });
  };

  return (
    !loading && (
      <div className="flex flex-col h-full justify-around text-primary">
        <HoleNumber hole={matchState.currentHole} />
        <div className="flex flex-col items-center h-24 justify-around">
          <h1 className="text-4xl">{wolf.name}</h1>
          <p className="italic">Select a partner or go it alone</p>
        </div>

        <div className="flex w-4/5 h-1/2 mx-auto">
          {sheep.length > 0 && (
            <div className="w-full flex flex-col bg-background rounded-2xl text-xl space-y-2">
              {sheep.map((player) => (
                <CustomRadioButton
                  key={player.id}
                  id={player.id}
                  label={player.name}
                  checked={wolfChoice === player.id}
                  handleChange={handleChange}
                />
              ))}
              <CustomRadioButton
                id="lonewolf"
                label="Lone Wolf"
                checked={wolfChoice === "lonewolf"}
                handleChange={handleChange}
              />
              <CustomRadioButton
                id="blindwolf"
                label="Blind Wolf"
                checked={wolfChoice === "blindwolf"}
                handleChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className="flex w-full justify-center">
          <WideButton label="Next" action={setRoles} />
        </div>
      </div>
    )
  );
};

//    TODO: Disable Next button while choice is still null

export default SetTeams;
