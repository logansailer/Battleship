const Ship = require("../scripts/ship");

let testShip = new Ship();

test("adds 1 to hit count", () => {
    expect(testShip.hit()).toBe(1)
});
