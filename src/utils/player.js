export class Player {
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
