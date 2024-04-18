const Ship = require("./ship");

class Gameboard {
  //0 == empty space, 1 == ship in that space
  constructor() {
    this.board = new Array(10).fill("0").map(() => new Array(10).fill("0"));
    this.ships = [];
    this.success = [];
    this.missed = [];
  }

  //places ship in starting position and the positions next to it given length and direction
  place(x, y, length, dir) {
    this.ships.push(length);
    if (dir === "hor") {
      for (let i = 0; i < length; i++) {
        if (x + length > 9 || this.board[x + i][y] != 0) {
          return false;
        }
        this.board[x + i][y] = 1;
      }
    }
    if (dir === "ver") {
      for (let i = 0; i < length; i++) {
        if (y + length > 9 || this.board[x][y + i] != 0) {
          return false;
        }
        this.board[x][y + i] = 1;
      }
    }
  }

  allSunk() {
    //return false if any ships in ship array != sunk, otherwise true
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  // if position has a ship, return true
  receiveAttack(x, y) {
    if (this.board[x][y] === 1) {
      this.success.push([x, y]);
      Ship.hit(); //need to give ship a new variable
      return true;
    } else {
      this.missed.push([x, y]);
      return false;
    }
  }

  victory() {}
}

module.exports = Gameboard;

let testBoard = new Gameboard();
testBoard.place(0, 1, 3, "ver");
