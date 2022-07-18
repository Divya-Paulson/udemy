let player1, player2, editBtn1, editBtn2, startBtn;
let gameBoard, currentPlayerName;
let nameDialog, nameInput, cancelBtn, confirmBtn;
let gameStatus, statusContainer;

let currentPlayer;
let currentSymbol;
let gameState;
let gameOver = false;

window.addEventListener('DOMContentLoaded', initializeGame);

function initializeGame() {
    attachToDom();
    attachEventListeners();

}

function attachToDom() {
    player1 = document.getElementById('player-1');
    player2 = document.getElementById('player-2');
    editBtn1 = document.getElementById('btn-edit-1');
    editBtn2 = document.getElementById('btn-edit-2');
    startBtn = document.getElementById('start-btn');
    gameBoard = document.getElementById('game-board');
    currentPlayerName = document.getElementById('player-name');
    nameDialog = document.getElementById('dialog-name');
    nameInput = document.getElementById('name-input');
    cancelBtn = document.getElementById('btn-cancel');
    confirmBtn = document.getElementById('btn-confirm');
    gameStatus = document.getElementById('game-status');
    statusContainer = document.getElementById('status-container');
}

function attachEventListeners() {
    editBtn1.addEventListener('click', () => {
        currentPlayer = player1;
        editNameShowDialog();
    });
    editBtn2.addEventListener('click', () => {
        currentPlayer = player2;
        editNameShowDialog();
    });

    cancelBtn.addEventListener('click', editNameCloseDialog);
    confirmBtn.addEventListener('click', confirmName)
    startBtn.addEventListener('click', startNewGame);
    attachGameBoardEventListners();
}

function attachGameBoardEventListners() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.getElementById(`cell-${i}${j}`);
            cell.addEventListener('click', () => {
                markCell(i, j, cell);
            });
        }
    }
}

//function gets called when clicked on edit button
function editNameShowDialog() {
    nameInput.value = currentPlayer.textContent;
    if (nameInput.value == 'Player name') {
        nameInput.value = '';
    }
    nameDialog.classList.remove('invisible');
}

function editNameCloseDialog() {
    nameDialog.classList.add('invisible');
    nameInput.value = '';
}

function confirmName() {
    currentPlayer.textContent = nameInput.value;
    editNameCloseDialog();
}

function startNewGame() {
    let player1Ready = player1.textContent != '' && player1.textContent != 'Player name';
    let player2Ready = player2.textContent != '' && player2.textContent != 'Player name';
    if (!player1Ready || !player2Ready) {
        alert('Enter name of the players');
        return;
    }
    resetGame();
    statusContainer.classList.add('invisible');
}

function resetGame() {
    currentSymbol = 'X';
    currentPlayerName.textContent = player1.textContent;
    gameState = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    gameOver = false;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.getElementById(`cell-${i}${j}`);
            cell.textContent = '';
        }
    }
    gameBoard.classList.remove('invisible');
}

function markCell(i, j, cell) {
    if (gameState[i][j] != '' || gameOver) {
        return;
    }
    cell.textContent = currentSymbol;
    gameState[i][j] = currentSymbol;
    if (currentSymbol == 'X') {
        currentSymbol = 'O';
        currentPlayerName.textContent = player2.textContent;
    } else {
        currentSymbol = 'X';
        currentPlayerName.textContent = player1.textContent;
    }
    checkGameOver();
}

function checkGameOver() {
    for (let i = 0; i < 3; i++) {
        if (checkRow(i)) {
            gameWon(gameState[i][0]);
            return;
        }
        if (checkColumn(i)) {
            gameWon(gameState[0][i]);
        }
    }
    let d = checkDiagonal()
    if (d) {
        gameWon(d);
        return
    }
    if (checkAllNotFilled()) {
        return
    }
    gameDraw();
}

function checkRow(i) {
    return gameState[i][0] == gameState[i][1] && gameState[i][0] == gameState[i][2] && gameState[i][0] != '';
}

function checkColumn(i) {
    return gameState[0][i] == gameState[1][i] && gameState[0][i] == gameState[2][i] && gameState[0][i] != '';
}

function checkDiagonal() {
    let d1 = gameState[0][0] == gameState[1][1] && gameState[0][0] == gameState[2][2] && gameState[2][2] != '';
    if (d1) {
        return gameState[0][0]
    }
    let d2 = gameState[2][0] == gameState[1][1] && gameState[1][1] == gameState[0][2] && gameState[0][2] != '';
    if (d2) {
        return gameState[2][0]
    }
    return '';
}

function checkAllNotFilled() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameState[i][j] == '') {
                return true;
            }
        }
    }
    return false;
}

function gameWon(symbol) {
    let result = player1.textContent;
    if (symbol == 'O') {
        result = player2.textContent;
    }
    gameStatus.textContent = `You won, ${result}`;
    statusContainer.classList.remove('invisible');
    gameOver = true;
}

function gameDraw() {
    gameStatus.textContent = 'It\'s a draw';
    statusContainer.classList.remove('invisible');
    gameOver = true;
}