const Player = require("../scripts/player");
const Ship = require("../scripts/ship");

const testPlayer = new Player();
const testShip = new Ship(4);
const testShip2 = new Ship(4);

test("adds ship at given coordinate of given size and dirction from player", () => {
  testPlayer.game.place(1, 1, testShip, "hor");
  expect(
    testPlayer.game.board[1][1] &&
      testPlayer.game.board[2][1] &&
      testPlayer.game.board[3][1] &&
      testPlayer.game.board[4][1]
  ).toBe(testShip);
});

test("checks if ship is added to ships array", () => {
  testPlayer.game.place(1, 1, testShip2, "hor");
  expect(testPlayer.game.ships).toEqual([testShip, testShip2]);
});

test("checks if ships can recieves hits properly from gameboard", () => {
  testPlayer.game.receiveAttack(1, 1);
  testPlayer.game.receiveAttack(2, 1);
  testPlayer.game.receiveAttack(3, 1);
  testShip.isSunk();
  expect(testShip.sunk).toBe(false);
});

test("checks if ships can sink from gameboard", () => {
  testPlayer.game.receiveAttack(4, 1);
  testShip.isSunk();
  expect(testShip.sunk).toBe(true);
});
