for (let i = 0; i < 5; i++){
    const playerSelectionOne = prompt("Write your choice!")
    const playerSelection = playerSelectionOne.toLowerCase()
    const computerSelection = getComputerChoice();

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
    }

    function playRound(playerSelection, computerSelection){
        if (playerSelection === "rock"){
            if (computerSelection === 'rock'){ 
                return 'tie!'
            } else if (computerSelection === 'paper'){
                return 'Computer wins!'
            } else if (computerSelection === 'scissors'){
                return 'Player wins!'
            }
        }
        else if (playerSelection === "paper"){
            if (computerSelection === 'rock'){ 
                return 'Player wins!'
            } else if (computerSelection === 'paper'){
                return 'tie!'
            } else if (computerSelection === 'scissors'){
                return 'Computer wins!'
            }
        }
        else if (playerSelection === "scissors"){
            if (computerSelection === 'rock'){ 
                return 'Computer wins!'
            } else if (computerSelection === 'paper'){
                return 'Player wins!'
            } else if (computerSelection === 'scissors'){
                return 'tie!'
            }
        }
    }

    alert(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
}