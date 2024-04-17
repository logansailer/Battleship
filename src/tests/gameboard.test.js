const Gameboard = require("../scripts/gameboard");

let testBoard = new Gameboard();

test("adds ship at given coordinate of given size and dirction", () => {
  testBoard.place(0, 1, 3, "ver");
  expect(testBoard.board[0][1] && testBoard.board[1][1] && testBoard.board[2][1]).toBe(1);
});
