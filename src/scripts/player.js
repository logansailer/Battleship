const Gameboard = require("./gameboard");

class Player {
  constructor(name) {
    this.name = name;
    this.game = new Gameboard();
  }

  attack(x, y, enemyBoard) {
    if (enemyBoard.receiveAttack(x, y)) {
      return true;
    }
    return false;
  }
}

let player = new Player();
let computer = new Player();

module.exports = Player;
