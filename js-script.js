const players = (name, XorO) => {
    let playing = false;
    return {name, playing, XorO};
};

const player1 = players("Cody", "X");
const player2 = players("AI", "O");

const gameBoard = (() => {
    let board = document.getElementById("GB");
    let identifier1 = document.getElementById("identifier1");
    identifier1.textContent = player1.name + " playing as: " + player1.XorO;
    let identifier2 = document.getElementById("identifier2");
    identifier2.textContent = player2.name + " playing as: " + player2.XorO;
    let currentPlayer = document.getElementById("playerShower");
    currentPlayer.textContent = "Current player: " + player1.name;
    player1.playing = true;

    for (let i = 0; i < 9; i++) {
        let square = document.createElement("div");
        const content = document.createTextNode("");
        square.className = "square";
        square.id = "square" + i;
        square.appendChild(content);
        square.addEventListener("click", function() {
            if (square.textContent !== "") {
                return;
            }

            if (player1.playing) {
                square.textContent = "X";
            } else if (player2.playing) {
                square.textContent = "O";
            }

            if (player1.playing) {
                currentPlayer.textContent = "Current player: " + player2.name;
                player1.playing = false;
                player2.playing = true;
            } else if (player2.playing) {
                currentPlayer.textContent = "Current player: " + player1.name;
                player1.playing = true;
                player2.playing = false;
            }
            if (displayController.gameOver() == "game over") {
                return;
            }
        });
        board.appendChild(square);
    }
    return; 
})();

const displayController = (() => {
    function gameOver() {
        let board = document.getElementById("GB").childNodes;
        if (((board[0].textContent == board[1].textContent && board[1].textContent == board[2].textContent) && board[0].textContent != "")
        || ((board[0].textContent == board[4].textContent && board[4].textContent == board[8].textContent)  && board[0].textContent != "")
        || ((board[0].textContent == board[3].textContent && board[3].textContent == board[6].textContent)  && board[0].textContent != "")
        || ((board[1].textContent == board[4].textContent && board[4].textContent == board[7].textContent) && board[1].textContent != "")
        || ((board[2].textContent == board[5].textContent && board[5].textContent == board[8].textContent) && board[2].textContent != "")
        || ((board[3].textContent == board[4].textContent && board[4].textContent == board[5].textContent) && board[3].textContent != "")
        || ((board[6].textContent == board[7].textContent && board[7].textContent == board[8].textContent) && board[6].textContent != "")
        || ((board[6].textContent == board[4].textContent && board[4].textContent == board[2].textContent) && board[6].textContent != "")) {
            if (player2.playing) {
                console.log(player1.name + " has won!");
            } else if (player1.playing) {
                console.log(player2.name + " has won!");
            }
            return "game over";
        }
    }

    return {gameOver};
})();

