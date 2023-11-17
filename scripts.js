let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a draw!";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        return "You lose! Paper beats rock";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return "You win! Rock beats scissors";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return "You win! Paper beats rock";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return "You lose! Scissors beats paper";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return "You lose! Rock beats scissors";
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        return "You win! Scissors beats paper";
    }
}

const scoreDisplay = document.querySelector('.score');
const resultDisplay = document.querySelector('.result');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('rock', computerSelection);
    updateScore(result);
});

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('paper', computerSelection);
    updateScore(result);
});

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = playRound('scissors', computerSelection);
    updateScore(result);
});

function updateScore(result) {
    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    
    if (playerScore === 5) {
        announceWinner("Player");
        resetGame();
    } else if (computerScore === 5) {
        announceWinner("Computer");
        resetGame();
    }
}

function announceWinner(winner){
    resultDisplay.textContent = '${winner} wins the game!';
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
}