let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        checkWin();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementsByClassName('message').innerText = "Now it's the turn of player " + currentPlayer;
    }

}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            alert("Player " + currentPlayer + " wins!");
            resetBoard();
            return;
        }
    }

    if (!board.includes("")) {
        alert("It's a tie!");
        resetBoard();
    }
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".restart")) {
        resetBoard();
    }
})

