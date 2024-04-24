const Gameboard = require("./gameboard");

class Player {
  constructor(name) {
    this.name = name;
    this.game = new Gameboard();
  }

  randomPos() {
    let xAxis = Math.floor(Math.random() * 10);
    let yAxis = Math.floor(Math.random() * 10);
    return xAxis, yAxis;
  }

  randomShip(shipName) {
    let xAxis = Math.floor(Math.random() * 10);
    let yAxis = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = "hor";
      //fix to check if space is empty, try again if it isnt
      this.game.place(xAxis, yAxis, shipName, dir);
    }

    if (dir === 1) {
      dir = "ver";
      //fix to check if space is empty, try again if it isnt
      this.game.place(xAxis, yAxis, shipName, dir);
    }
  }
}

module.exports = Player;
