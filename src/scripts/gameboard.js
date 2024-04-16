//create 10x10 grid
//fill grid with [0]
//fill with [1] == ship
const Ship = require("./ship");

class Gameboard {
  //0 == empty space, 1 == ship in that space
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
    //new Ship(position);
    console.log(position[0], position[1]);
    this.board[position[0]][position[1]] = 1;
  }

  // if position has a ship, return true
  receiveAttack(coordinate) {
    if (this.board[coordinate] === 1) {
      Ship.hit();
      return true;
    }
  }

  victory() {}
}

let board1 = new Gameboard();

board1.place([0, 1]);

console.log(board1.board[0][1]);

module.exports = Gameboard;
