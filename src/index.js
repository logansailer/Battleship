function makeBoard(player1, player2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-player");
    row.setAttribute("id", `player-row${i}`);
    document.getElementById("player-board").appendChild(row);
    
  }
}
