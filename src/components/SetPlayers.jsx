/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import { use } from "react";
import { MatchContext } from "../components/MatchContext";

const SetPlayers = ({ count }) => {
  const { setMatchState } = use(MatchContext);

  const nextState = (state) => {
    console.log(state);
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
    <form
      onSubmit={handleSubmit(submitPlayerNames)}
      className="flex flex-col gap-y-2 text-gray-800 mx-auto"
    >
      {[...Array(count)].map((_, index) => (
        <div key={index}>
          <input
            className="px-4 py-2 rounded"
            placeholder={`player ${index + 1}`}
            {...register(`player${index + 1}`, {
              required: "Name required",
              maxLength: { value: 15, message: "Max 15 letters per name" },
              validate: validateUnique,
            })}
          />
          {errors[`player${index + 1}`] && (
            <p className="text-red-500">
              {errors[`player${index + 1}`].message}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Add Players
      </button>
    </form>
  );
};

export default SetPlayers;
