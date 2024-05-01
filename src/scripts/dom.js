const startGame = require("./start");

function loadPlayer1Attack() {}

function makeBoard(player1, player2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("p1-row");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("player1-board").appendChild(row);

    player1.game.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("p1-cell");
      cell.setAttribute("id", `p1-row${i}-cell${j.length}`);
      row.appendChild(cell);
    });
  }

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("p2-row");
    row.setAttribute("id", `p2-row${i}`);
    document.getElementById("player2-board").appendChild(row);

    player2.game.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("p2-cell");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);

      cell.addEventListener("click", (e) => {
        loadPlayer1Attack(e, i, j, player1, player2);
      });
    });
  }
}

function makeButtons(player) {
  const boardButtons = document;
}

//renders player 1's board
function renderShips(player) {
  document.querySelectorAll(".p1-cell").forEach((e, i) => {
    let xAxis, yAxis;
    let pos = "" + i;

    // transform index string to array of xAxis and yAxis
    if (i < 10) {
      xAxis = 0;
      yAxis = i;
    } else {
      pos = pos.split("");
      xAxis = pos[0];
      yAxis = pos[1];
    }

    if (player.game.board[xAxis][yAxis] === 0) return;
    else e.classList.add("fleet");
  });
}

function loadPlayer1Attack(e, x, y, player1, player2) {
  let attack = player1.attack(player2, x, y);
  if (attack === false) {
    e.target.classList.add("miss");
  }
  if (attack === true) {
    e.target.classList.add("hit");

    if (player2.game.board[x][y].sunk) return;
  }
}

module.exports = { makeBoard, renderShips};
