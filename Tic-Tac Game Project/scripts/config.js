function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;

    let playerName = document.getElementById('player-' + editedPlayer + '-data').children[1].textContent;
    if (playerName == 'PLAYER NAME') {
        playerName = '';
    }
    document.getElementById("playername").value = playerName;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = ' ';
}

function savePlayerConfig(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if (!enteredPlayerName) //enteredPlayerName is just blankspace
    {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!!'
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    if (editedPlayer == 1) {
        players[0].name = enteredPlayerName;

    } else {
        players[1].name = enteredPlayerName;
    }
    closePlayerConfig();
}