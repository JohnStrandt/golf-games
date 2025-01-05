//
//
//
class Player {
  constructor(name) {
    this.name = name;
    this.scores = [];
    this.points = [];
    this.roles = []; //  wolf, partner, sheep
  }

  getScore() {
    let total = 0;
    this.scores.forEach((score) => {
      total += score;
    });
    return total;
  }

  getPoints() {
    let points = 0;
    this.points.forEach((point) => {
      points += point;
    });
    return points;
  }
}

const getLowest = (team, latest) => {
  let lowest = team[0].scores[latest];
  team.forEach((member) => {
    if (member.scores[latest] < lowest) {
      lowest = member.scores[latest];
    }
  });
  return lowest;
};

const scoreTeam = (team) => {
  let score;
  team.forEach((player) => {
    do {
      score = prompt(`${player.name}: `);
    } while (isNaN(score));
    player.scores.push(Number(score));
  });
};

const awardPoints = (winners, losers, points) => {
  // implicit cast to Number via division
  winners.forEach((winner) => {
    winner.points.push(points / winners.length);
  });
  losers.forEach((loser) => {
    loser.points.push(-points / losers.length);
  });
};
//
//
//
//

//              PLAY

let players = [
  new Player("Fred"),
  new Player("Barney"),
  new Player("Wilma"),
  new Player("Betty"),
];

let currentHole = 1;
let honors = 0;

while (currentHole <= 18) {
  let wolf = players[honors];

  console.log(`hole: ${currentHole}`);
  console.log("Tee Box order:");

  for (let i = 0; i < 4; i++) {
    let player = players[(honors + i) % 4];
    if (player == wolf) {
      console.log(`${player.name} (wolf)`);
    } else {
      console.log(`${player.name}`);
    }
  }

  console.log();

  let partner = null;
  let sheep = [];
  let choice = prompt("Wolf Partner (or NONE): ");
  console.log();

  // React version will use id on tap event
  players.forEach((player) => {
    if (player.name == choice) {
      player.roles.push("p");
      partner = player;
    } else if (player != wolf) {
      player.roles.push("s");
      sheep.push(player);
    } else {
      player.roles.push("w");
    }
  });

  let pack = [wolf];
  if (partner) {
    pack.push(partner);
  }

  // prompt for scores
  scoreTeam(pack);
  scoreTeam(sheep);
  console.log();

  let latest = currentHole - 1;

  let packScore = getLowest(pack, latest);
  let sheepScore = getLowest(sheep, latest);
  let points = 2;

  if (pack.length == 1) {
    points = 6;
  }

  if (packScore < sheepScore) {
    awardPoints(pack, sheep, points);
  } else if (sheepScore < packScore) {
    awardPoints(sheep, pack, points);
  } else {
    // tie - no points awarded
    awardPoints(sheep, pack, 0);
  }

//   console.log(`Low pack score:  ${packScore}`);
//   console.log(`Low sheep score:  ${sheepScore}`);
//   console.log();
//
//   pack.forEach((player) => {
//     console.log(`${player.name}: ${player.points}`);
//   });
//
//   sheep.forEach((player) => {
//     console.log(`${player.name}: ${player.points}`);
//   });
//   console.log();
//
//   currentHole++;
//   honors++;
//   honors = honors % 4;
// }
//
// players.forEach((player) => {
//   console.log();
//   console.log(`${player.name}`);
//   console.log(`Roles: ${player.roles}`);
//   console.log(`Scores: ${player.scores}`);
//   console.log(`Points: ${player.points}`);
//   console.log(`Total Score:  ${player.getScore()}`);
//   console.log(`Total Points:  ${player.getPoints()}`);
// });
