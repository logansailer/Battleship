const Gameboard = require("./gameboard");

class Player {
  constructor() {
    this.game = new Gameboard();
  }
}

let player = new Player();
let computer = new Player();

module.exports = Player;