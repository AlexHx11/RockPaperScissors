function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let int = getRandomInt(1,3);
    let choice;

    switch (int) {
        case 1: 
            choice = "rock"
            break;
        case 2:
            choice = "paper"
            break;
        case 3:
            choice = "scissors"
            break;
    }

    return choice;
}

function getPlayerChoice() {
    let choice = prompt("Please choose rock, paper, or scissors:").toLowerCase();

    return choice;
}
  
function playRound(playerChoice, computerChoice) {
    let result;

    switch (playerChoice) {
        case computerChoice:
            result = "tie"
            break;
        case "rock":
            computerChoice == "scissors" ? result = "win" : result = "lose"
            break;
        case "paper":
            computerChoice == "rock" ? result = "win" : result = "lose"
            break;
        case "scissors":
            computerChoice == "paper" ? result = "win" : result = "lose"
            break;
    }

    return result;
}


for (let i = 0; i < 5; i++) {
    let playerChoice, computerChoice;
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    console.log(result);
    console.log(playerChoice);
    console.log(computerChoice);
}