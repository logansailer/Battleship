const Player = require("../scripts/player");

let testPlayer = new Player();

test("adds ship at given coordinate of given size and dirction from player", () => {
  testPlayer.game.place(1, 1, 4, "hor");
  expect(
    testPlayer.game.board[1][1] &&
    testPlayer.game.board[1][2] &&
    testPlayer.game.board[1][3] &&
    testPlayer.game.board[1][4]
  ).toBe(1);
});
