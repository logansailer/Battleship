const Player = require("./player");
const domFunctions = require("./dom");
const Ship = require("./ship");
const Gameboard = require("./gameboard");

function startGame() {
  let player1 = new Player("Player 1");
  let player2 = new Player("Player 2");

  //creates player 1's (controller's) ships
  let player1Carrier = new Ship(5);
  let player1Battleship = new Ship(4);
  let player1Destroyer = new Ship(3);
  let player1Submarine = new Ship(3);
  let player1Patrol = new Ship(2);

  //randomly places player 1's ships on their gameboard
  while (player1.randomShip(player1Carrier) === false);
  while (player1.randomShip(player1Battleship) === false);
  while (player1.randomShip(player1Destroyer) === false);
  while (player1.randomShip(player1Submarine) === false);
  while (player1.randomShip(player1Patrol) === false);

  //its able to realize when it doesn't work, but it still places the ships before it

  //creates player 2's (CPU's) ships
  let player2Carrier = new Ship(5);
  let player2Battleship = new Ship(4);
  let player2Destroyer = new Ship(3);
  let player2Submarine = new Ship(3);
  let player2Patrol = new Ship(2);

  //randomly places player 2's ships on their gameboard
  while (player2.randomShip(player2Carrier) === false);
  while (player2.randomShip(player2Battleship) === false);
  while (player2.randomShip(player2Destroyer) === false);
  while (player2.randomShip(player2Submarine) === false);
  while (player2.randomShip(player2Patrol) === false);
  domFunctions.makeBoard(player1, player2);
  domFunctions.renderShips(player1);
}

module.exports = startGame;
