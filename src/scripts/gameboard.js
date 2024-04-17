//create 10x10 grid
//fill grid with [0]
//fill with [1] == ship
const Ship = require("./ship");

class Gameboard {
  //0 == empty space, 1 == ship in that space
  constructor() {
    this.board = new Array(10).fill("0").map(() => new Array(10).fill("0"));
  }

  //places ship in starting position and the positions next to it given length and direction
  place(x, y, length, dir) {
    let ship = new Ship(length);
    if (dir === "hor") {
      for (let i = 0; i < length; i++) {
        this.board[x][y + i] = 1;
      }
    }
    if (dir === "ver") {
      for (let i = 0; i < length; i++) {
        this.board[x + i][y] = 1;
      }
    }
    // if (
    //   position[0] < 0 ||
    //   position[0] > 9 ||
    //   position[1] < 0 ||
    //   position[1] > 9
    // ) {
    //   return null;
    // }
  }

  allSunk() {
    //if all ships == sunk, return true
    return false;
  }

  decideWinner() {
    let winner = null;
    //if all p1 ships sunk, winner = p2, else p1;
  }

  // if position has a ship, return true
  receiveAttack(coordinate) {
    if (this.board[coordinate[0]][coordinate[1]] === 1) {
      Ship.hit(); //need to give ship a new variable
      return true;
    }
    if (allSunk() === true) {
      return decideWinner();
    }
    return false;
  }

  victory() {}
}

let board1 = new Gameboard();

board1.place(0, 1, 3, "hor");
console.log(board1.board[0][4]);

module.exports = Gameboard;
