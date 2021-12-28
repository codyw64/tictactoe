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
    const xaxis = 3;
    const yaxis = 3;

    
    for (let i = 0; i < xaxis; i++) {
        for (let j = 0; j < yaxis; j++) {
            let square = document.createElement("div");
            const content = document.createTextNode("");
            square.className = "square";
            square.id = "square" + i + j;
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
                    if (displayController.gameOver() == "done") {return};
                }
                setTimeout(displayController.computerTurn, 500);
                displayController.gameOver();
                
            });
            board.appendChild(square);
    }}
    let square = 4;
    return {square};
})();

const displayController = (() => {
    let board = document.getElementById("GB").childNodes;
    let currentPlayer = document.getElementById("playerShower");
    function gameOver() {
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
                return "done";
            } else if (player1.playing) {
                console.log(player2.name + " has won!");
                return "done";
            }
            return "game over";
        }
    }
    function computerTurn() {
        let choice1 = Math.floor(Math.random() * 8);
        if (board[choice1].textContent == "") {
            board[choice1].textContent = "O";
        } else {
            computerTurn();
        }
        currentPlayer.textContent = "Current player: " + player1.name;
        player2.playing = false;
        player1.playing = true;

    }

    return {gameOver, computerTurn};
})();

