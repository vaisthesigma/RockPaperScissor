function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection   = prompt("enter your choice");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}




function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection === computerSelection){
        return "It's a draw!";
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return "You lose! Paper beats rock";
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You win! Rock beats scissors";
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return "You win! Paper beats rock";
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You lose! Scissors beats paper";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You lose! Rock beats scissors";
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return "You win! Scissors beats paper";
    }

    

}

