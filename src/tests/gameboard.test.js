const Gameboard = require("../scripts/gameboard");

let testBoard = new Gameboard();

test("adds ship at given coordinate of given size and dirction", () => {
  testBoard.place(0, 1, 3, "test", "ver");
  expect(testBoard.board[0][1] && testBoard.board[0][2] && testBoard.board[0][3]).toBe("test");
});
