const Gameboard = require("../scripts/gameboard");
const Ship = require("../scripts/ship");

const testBoard = new Gameboard();
const testShip = new Ship(3);

test("adds ship at given coordinate of given size and dirction", () => {
  testBoard.place(0, 1, testShip, "ver");
  expect(
    testBoard.board[0][1] && testBoard.board[0][2] && testBoard.board[0][3]
  ).toBe(testShip);
});
