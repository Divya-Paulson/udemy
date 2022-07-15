function resetGameStatus() {
    gameIsOver = false;
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 'You Won,<span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardElement.children[gameBoardIndex].textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}


function startNewGame() {

    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names as per your choice for both players');
        return;

    }
    resetGameStatus();
    gameAreaElement.style.display = 'block';
    activePlayerNameElement.textContent = players[0].name;
}


function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
        activePlayerNameElement.textContent = players[1].name;
    } else {
        activePlayer = 0;
        activePlayerNameElement.textContent = players[0].name;
    }
}


function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gameIsOver) {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('please select an empty field');
        return;
    }
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');



    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    const winnerId = checkForGameOver();
    if (winnerId != 0) { endGame(winnerId); }
    console.log(winnerId);
    currentRound++;
    switchPlayer();
}

function checkForGameOver() {
    let i;
    for (i = 0; i < 3; i++) {

        if (gameData[i][0] > 0 && (gameData[i][0] == gameData[i][1]) && (gameData[i][0] == gameData[i][2])) {
            return gameData[i][0];


        }

    }

    for (i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 && (gameData[0][i] == gameData[1][i]) && (gameData[0][i] == gameData[2][i])) {
            return gameData[0][i];
        }

    }

    if (gameData[0][0] > 0 && (gameData[0][0] == gameData[1][1]) && (gameData[0][0] == gameData[2][2])) {
        return gameData[0][0];
    }

    if (gameData[0][2] > 0 && (gameData[0][2] == gameData[1][1]) && (gameData[0][2] == gameData[2][0])) {
        return gameData[0][2];
    }

    if (currentRound == 9) {
        return -1;
    }
    return 0;
}


function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw';
    }
}