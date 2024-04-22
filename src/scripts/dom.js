const startGame = require("./start");

function makeBoard(player1, player2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-player1");
    row.setAttribute("id", `player1-row${i}`);
    document.getElementById("player1-board").appendChild(row);

    player1.game.board[i].forEach((j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-player1");
      cell.setAttribute("id", `player1-row${i}-cell${j}`);
      row.appendChild(cell);

      cell.addEventListener("click", (e) => {
        loadPlayer1Attack(e, i, j, player1, player2);
      });
    });
  }

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-player2");
    row.setAttribute("id", `player2-row${i}`);
    document.getElementById("player2-board").appendChild(row);

    player2.game.board[i].forEach((j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-player2");
      cell.setAttribute("id", `player2-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }
}

module.exports = makeBoard;