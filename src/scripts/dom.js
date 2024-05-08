const startGame = require("./start");

const delay = (delayTime) => {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
};

function makeBoard(player1, player2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("p1-row");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("player1-board").appendChild(row);

    player1.game.board[i].forEach((e, j) => {
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

function checkWin(player1, player2) {
  if (player1.game.allSunk() === true) {
    alert("Player 2 Wins");
  }

  if (player2.game.allSunk() === true) {
    alert("Player 1 wins");
  }
}

//fires shot onto selected board position of player2
async function loadPlayer1Attack(e, x, y, player1, player2) {
  let attack = player1.attack(player2, x, y);
  if (
    player2.game.success.includes([[x, y]]) ||
    player2.game.missed.includes([[x, y]])
  ) {
    return;
  }
  if (attack === false) {
    e.target.classList.add("miss");
    await delay(1000);
  }
  if (attack === true) {
    e.target.classList.add("hit");
    await delay(500);
    checkWin(player1, player2);
  }
  loadPlayer2Attack(player1, player2);
}

//fires random shot onto player1 board
function loadPlayer2Attack(player1, player2) {
  let x = player2.randomPos([0]);
  let y = player2.randomPos([1]);
  let attack = player2.attack(player1, x, y);
  let e = document.getElementById(`p1-row${x}-cell${y}`);

  if (attack != 0) {
    return;
  }
  if (attack === false) {
    e.classList.add("miss");
  }
  if (attack === true) {
    e.classList.add("hit");
    checkWin(player1, player2);
  }
}

module.exports = { makeBoard, renderShips };
