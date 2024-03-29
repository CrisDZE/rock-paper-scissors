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
    playerDisplay.textContent = `VICTORY COUNT: ${String(playerCount)}`;
    computerDisplay.textContent = `DEFEAT COUNT: ${String(computerCount)}`;
}

function checkWinner() {
    if (playerCount === 5 && computerCount < 5) {
        winnerAnnouncement.textContent = 'YOU WIN';
    } else if (computerCount === 5 && playerCount < 5) {
        winnerAnnouncement.textContent = 'YOU LOSE';
    }
}

function resetGame() {
    playerCount = 0;
    computerCount = 0;
    playerDisplay.textContent =  'VICTORY COUNT:';
    computerDisplay.textContent = 'DEFEAT COUNT: ';
    winnerAnnouncement.textContent = ''
}
