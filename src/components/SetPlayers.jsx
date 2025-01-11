/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import { use } from "react";
import { MatchContext } from "../components/MatchContext";
import { AccentButton } from "./";

const SetPlayers = ({ count }) => {
  const { setMatchState } = use(MatchContext);

  const nextState = (state) => {
    setMatchState((prevData) => ({
      ...prevData,
      playState: state,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validateUnique = (value, allValues) => {
    const values = Object.values(allValues);
    return (
      values.indexOf(value) === values.lastIndexOf(value) ||
      "Names must be unique"
    );
  };

  const submitPlayerNames = (data) => {
    Object.keys(data).map((key) => {
      updateName(key, data[key]);
    });
    reset();
    nextState("score"); // change back to setTeams
  };

  const updateName = (playerId, newName) => {
    setMatchState((prevData) => ({
      ...prevData,
      players: prevData.players.map((player) =>
        player.id === playerId ? { ...player, name: newName } : player,
      ),
    }));
  };

  return (
    <div className="flex flex-col h-full justify-around text-primary">
      <div className="flex flex-col w-full h-24 justify-between text-center">
        <span className="text-3xl text-bold text-accent">
          Enter Player Names
        </span>
        <p>...in teeing order when appropriate</p>
        <p>(check the rules)</p>
      </div>
      <form
        onSubmit={handleSubmit(submitPlayerNames)}
        className="flex flex-col h-3/5 w-full justify-around"
      >
        {[...Array(count)].map((_, index) => (
          <div key={index} className="w-3/4 mx-auto">
            <input
              className="h-14 bw-full border border-primary focus:border-accent outline-none rounded-xl bg-base px-10 text-lg"
              placeholder={`player ${index + 1}`}
              {...register(`player${index + 1}`, {
                required: "Name required",
                maxLength: { value: 12, message: "Max 12 letters per name" },
                validate: validateUnique,
              })}
            />
            {errors[`player${index + 1}`] && (
              <p className="text-alert text-center">
                {errors[`player${index + 1}`].message}
              </p>
            )}
          </div>
        ))}
        <div className="flex w-full h-1/5 items-center justify-center">
          <AccentButton label="Update Players" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SetPlayers;
