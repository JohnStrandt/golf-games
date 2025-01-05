export const getLowest = (team, latest) => {
  let lowest = team[0].scores[latest];
  team.forEach((member) => {
    if (member.scores[latest] < lowest) {
      lowest = member.scores[latest];
    }
  });
  return lowest;
};

export const scoreTeam = (team) => {
  let score;
  team.forEach((player) => {
    do {
      score = prompt(`${player.name}: `);
    } while (isNaN(score));
    player.scores.push(Number(score));
  });
};

export const awardPoints = (winners, losers, points) => {
  // implicit cast to Number via division
  winners.forEach((winner) => {
    winner.points.push(points / winners.length);
  });
  losers.forEach((loser) => {
    loser.points.push(-points / losers.length);
  });
};
