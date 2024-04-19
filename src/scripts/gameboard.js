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
  place(x, y, shipName, dir) {
    this.ships.push(shipName);
    if (dir === "hor") {
      for (let i = 0; i < shipName.length; i++) {
        if (x + shipName.length > 9 || this.board[x + i][y] != 0) {
          return false;
        }
        this.board[x + i][y] = shipName;
      }
    }
    if (dir === "ver") {
      for (let i = 0; i < shipName.length; i++) {
        if (y + shipName.length > 9 || this.board[x][y + i] != 0) {
          return false;
        }
        this.board[x][y + i] = shipName;
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
    if (this.board[x][y] != 0) {
      this.success.push([x, y]);
      this.board[x][y].hit()
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
