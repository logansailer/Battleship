const Player = require("./player");
const makeBoard = require("./dom");
const Ship = require("./ship")

function startGame() {
  let player1 = new Player("Player 1");
  let player2 = new Player("Player 2");

  //creates player 1's (controller's) ships
  let player1Carrier = new Ship(5);
  let player1Battleship = new Ship(4);
  let player1Destroyer = new Ship(3);
  let player1Submarine = new Ship(3);
  let player1Patrol = new Ship(2);

  //creates player 2's (CPU's) ships
  let player2Carrier = new Ship(5);
  let player2Battleship = new Ship(4);
  let player2Destroyer = new Ship(3);
  let player2Submarine = new Ship(3);
  let player2Patrol = new Ship(2);

  //randomly places player 2's ships on their gameboard
  player2.randomShip(player2Carrier);
  player2.randomShip(player2Battleship);
  player2.randomShip(player2Destroyer);
  player2.randomShip(player2Submarine);
  player2.randomShip(player2Patrol);

  makeBoard(player1, player2);
}

module.exports = startGame;
