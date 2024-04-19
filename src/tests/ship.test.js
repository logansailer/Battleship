const Ship = require("../scripts/ship");

let testShip = new Ship(2);

test("checks if test ship has proper length", () => {
  expect(testShip.length).toBe(2);
});

test("adds 1 to hit count", () => {
  testShip.hit();
  expect(testShip.timesHit).toBe(1);
});

test("tests if ship recognizes it is not sunk", () => {
  testShip.isSunk();
  expect(testShip.sunk).toBe(false);
});

test("tests if ship recognizes it is sunk", () => {
  testShip.hit();
  testShip.isSunk();
  expect(testShip.sunk).toBe(true);
});
