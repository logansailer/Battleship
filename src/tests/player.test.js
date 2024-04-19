const Player = require("../scripts/player");

let testPlayer = new Player();

test("adds ship at given coordinate of given size and dirction from player", () => {
  testPlayer.game.place(1, 1, 4, "test", "hor");
  expect(
    testPlayer.game.board[1][1] &&
      testPlayer.game.board[2][1] &&
      testPlayer.game.board[3][1] &&
      testPlayer.game.board[4][1]
  ).toBe("test");
});

test("checks if ship is added to ships array", () => {
  testPlayer.game.place(1, 1, 4, "test2", "hor");
    testPlayer.game.place(1, 1, 2, "test3", "hor");
  expect(testPlayer.game.ships).toEqual(["test", "test2", "test3"]);
});
