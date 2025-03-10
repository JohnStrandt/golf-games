import { use, useState, useEffect } from "react";
import { MatchContext } from "../state";
import { HoleNumber, AccentButton, CustomRadioButton } from "./";

// this component is only used for Wolf - might wanna rename
const SetTeams = () => {
  const { matchState, setMatchState } = use(MatchContext);
  const [wolf, setWolf] = useState([]);
  const [sheep, setSheep] = useState([]);
  const [wolfChoice, setWolfChoice] = useState(null);

  /*
         NOTE:   wolfIndex sets the stage
     
  */

  useEffect(() => {
    setWolf(matchState.players[matchState.wolfIndex]);

    // index of next player (with wrap-around logic)
    let index = (matchState.wolfIndex + 1) % 4;
    let temp = [];
    for (let i = 0; i < 3; i++) {
      temp[i] = matchState.players[index];
      index = (index + 1) % 4;
    }
    setSheep(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setWolfChoice(event.target.value);
  };

  /*
   
       NOTE:    Set new roles here, default was sheep,
                wolfIndex only cue until now
  */

  // partner choice returns a player id, blind/lone wolf returns a new role
  const setRoles = () => {
    if (wolfChoice == "lonewolf" || wolfChoice == "blindwolf") {
      updateRole(wolf.id, wolfChoice);
    } else {
      updateRole(wolf.id, "wolf");
      updateRole(wolfChoice, "partner");
    }
    nextState("score");
  };

  /*
   
     NOTE:   Update roles in State 
 
 */

  const updateRole = (playerId, role) => {
    let holeIndex = matchState.currentHole - 1;

    setMatchState((prevState) => {
      // resolve player id to player index
      const playerIndex = prevState.players.findIndex(
        (player) => player.id === playerId,
      );

      // spread players array, then spread player object
      const updatedPlayers = [...prevState.players];
      const player = { ...updatedPlayers[playerIndex] };

      player.roles[holeIndex] = role;
      updatedPlayers[playerIndex] = player;

      return {
        ...prevState,
        players: updatedPlayers,
      };
    });
  };

  const nextState = (state) => {
    setMatchState((prevData) => ({
      ...prevData,
      playState: state,
    }));
  };

  return (
    <div className="flex flex-col h-full justify-around text-primary">
      <HoleNumber hole={matchState.currentHole} />
      <div className="flex flex-col items-center h-24 justify-around">
        <h1 className="text-4xl">{wolf.name}</h1>
        <p className="italic">Select a partner or go it alone</p>
      </div>

      <div className="flex w-11/12 h-1/2 mx-auto">
        {sheep.length > 0 && (
          <div className="w-full flex flex-col bg-background rounded-2xl text-xl gap-1">
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
        <AccentButton
          label="Next"
          action={setRoles}
          disabled={wolfChoice == null}
        />
      </div>
    </div>
  );
};

export default SetTeams;
