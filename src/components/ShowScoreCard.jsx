/* eslint-disable react/prop-types */

const ShowScoreCard = ({ team, hole }) => {
  return (
    <div className="flex flex-col gap-1 w-full text-primary">
      {team.map((player) => (
        <div key={player.id} className="flex bg-base py-4">
          <div className="flex w-2/5 justify-center items-center text-2xl">
            {player.name}
          </div>
          <div className="flex flex-col w-1/5 text-center">
            <span className="text-accent text-xl">{player.scores[hole]}</span>
            strokes
          </div>

          <div className="flex flex-col w-1/5 text-center">
            <span className="text-accent text-xl">{player.points[hole]}</span>
            points
          </div>

          <div className="flex flex-col w-1/5 text-center">
            <span className="text-accent text-xl">{player.pointTotal}</span>
            total
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowScoreCard;
