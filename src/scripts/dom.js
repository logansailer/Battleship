const startGame = require("./start");

function makeBoard(player1, player2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("p1-row");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("player1-board").appendChild(row);

    player1.game.board[i].forEach((j) => {
      let cell = document.createElement("div");
      cell.classList.add("p1-cell");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("p2-row");
    row.setAttribute("id", `p2-row${i}`);
    document.getElementById("player2-board").appendChild(row);

    player2.game.board[i].forEach((j) => {
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

    if (player.game.board[xAxis][yAxis] === "0") return;
    if (player.game.board[xAxis][yAxis] === "res") e.classList.add("res");
    else e.classList.add("fleet");
  });
}

module.exports = { makeBoard, renderShips };
