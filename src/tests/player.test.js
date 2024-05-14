const Player = require("../scripts/player");
const Ship = require("../scripts/ship");

const testPlayer = new Player();
const testShip = new Ship(4);
const testShip2 = new Ship(4);
const testPlayer2 = new Player()
const testShip3 = new Ship(2)

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
  testPlayer.game.place(1, 2, testShip2, "hor");
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

test("checks if coordinate without a ship is free", () => {
  expect(testPlayer.game.board[0][0]).toBe(0);
});

test("checks if player 1 can sink player 2's ship", () => {
  testPlayer2.game.place(1, 1, testShip3, "hor");
  testPlayer.attack(testPlayer2, 1, 1);
  testPlayer.attack(testPlayer2, 2, 1)
  testShip3.isSunk();
  expect(testShip3.sunk).toBe(true);
});

test("tests if success attempts are being added to array", () => {
  console.log(testPlayer2.game.success.includes("2, 1"))
  expect(testPlayer2.game.success).toBe("1, 1", "2, 1");
});