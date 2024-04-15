const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board.push([i, j]);
      }
    }
  }

  place(position) {
    if (
      position[0] < 0 ||
      position[0] > 9 ||
      position[1] < 0 ||
      position[1] > 9
    ) {
      return null;
    }
    new Ship();
  }

  receiveAttack() {}

  victory() {}
}

let board1 = new Gameboard();
console.log(board1.board[]);
