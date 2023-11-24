const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerDisplay = document.querySelector('#playerResult');
const computerDisplay = document.querySelector('#computerResult');
const winnerAnnouncement = document.querySelector('#winnerAnnouncement');
const reset = document.querySelector('#resetGame')

let computerCount = 0;
let playerCount = 0;

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));
reset.addEventListener('click', () => resetGame());


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
        
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === 'player') {
        playerCount++;
    } else if (winner === 'computer') {
        computerCount++;
    }

    updateDisplay();

    checkWinner();
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
};

function updateDisplay() {
    playerDisplay.textContent = String(playerCount);
    computerDisplay.textContent = String(computerCount);
}

function checkWinner() {
    if (playerCount === 5 && computerCount < 5) {
        winnerAnnouncement.textContent = '¡El jugador ha ganado!';
    } else if (computerCount === 5 && playerCount < 5) {
        winnerAnnouncement.textContent = '¡La computadora ha ganado!';
    }
}

function resetGame() {
    playerCount = 0;
    computerCount = 0;
    playerDisplay.textContent =  '0';
    computerDisplay.textContent = '0';
    winnerAnnouncement.textContent = ''
}