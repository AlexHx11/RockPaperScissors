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

let playerScoreIndex = 0;
let computerScoreIndex = 1;
function updateScore(result, currScore) {
    switch (result) {
        case "win":
            currScore[playerScoreIndex]++
            break;
        case "lose":
            currScore[computerScoreIndex]++
            break;
        case "tie":
            break;
    }

    return currScore;
}

function displayGame(result, playerChoice, computerChoice, score) {
    console.log(`Result: ${result}`);
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`Score: ${score[0]}-${score[1]}`);
}

function playGame() {
    let score = [0, 0]; // [Player Score, Computer Score]
    let playerChoice, computerChoice;
    let result;
    let numberOfRounds = 5;

    for (let i = 0; i < numberOfRounds; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        result = playRound(playerChoice, computerChoice);
        score = updateScore(result, score);

        displayGame(result, playerChoice, computerChoice, score);
    }

    if (score[0] == score[1]) {
        console.log("TIE BREAKERRRRR!!!")
        while (score[playerScoreIndex] == score[computerScoreIndex]) {
            playerChoice = getPlayerChoice();
            computerChoice = getComputerChoice();

            result = playRound(playerChoice, computerChoice);
            score = updateScore(result, score);

            displayGame(result, playerChoice, computerChoice, score);
        }
    }

    if (score[playerScoreIndex] > score[computerScoreIndex]) {
        console.log("You've won!!!!!");
    } else if (score[playerScoreIndex] > score[computerScoreIndex]) {
        console.log("You suck");
    }
}

playGame()


