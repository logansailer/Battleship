//create 10x10 grid
//fill grid with [0]
//fill with [1] == ship

const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.board = new Array(10).fill("0").map(() => new Array(10).fill("0"));
  }
  //takes an array as an arguement, places ship in that square
  place(position) {
    if (
      position[0] < 0 ||
      position[0] > 9 ||
      position[1] < 0 ||
      position[1] > 9
    ) {
      return null;
    }
    new Ship(position);
  }

  receiveAttack() {}

  victory() {}
}

let board1 = new Gameboard();
console.log(board1.board);
