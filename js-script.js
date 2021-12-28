const gameBoard = (() => {
    let board = document.getElementById("GB");
    
    for (let i = 0; i < 9; i++) {
        let square = document.createElement("div");
        const content = document.createTextNode("X");
        square.className = "square";
        square.id = "square" + i;
        square.appendChild(content);
        board.appendChild(square);
    }

    return;
})();

const displayController = (() => {


    return;
})();

const players = (name) => {
  

    return {name};
};

const player1 = players("Cody");
const player2 = players("AI");