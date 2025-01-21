/* eslint-disable react/prop-types */

const ShowScoreCard = ({ team, hole }) => {
  return (
    <div className="flex flex-col gap-1 w-full text-primary">
      {team.map((player) => (
        <div key={player.id} className="flex bg-base py-4">
          <div className="flex w-1/2 px-2 justify-center items-center text-2xl">
            {player.name}
          </div>
          <div className="flex flex-col w-1/6 text-center">
            <span className="text-accent text-2xl">{player.scores[hole]}</span>
            <span className="text-sm">strokes</span>
          </div>

          <div className="flex flex-col w-1/6 text-center">
            <span className="text-accent text-2xl">{player.points[hole]}</span>
            <span className="text-sm">points</span>
          </div>

          <div className="flex flex-col w-1/6 text-center">
            <span className="text-accent text-2xl">{player.pointTotal}</span>
            <span className="text-sm">total</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowScoreCard;
