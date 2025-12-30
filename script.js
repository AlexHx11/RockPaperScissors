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

function updateScore(result, currScore) {
    playerScoreIndex = 0;
    computerScoreIndex = 1;

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

function playGame() {
    let score = [0, 0]; // [Player Score, Computer Score]
    let playerChoice, computerChoice;
    let result;
    let numberOfRounds;

    for (let i = 0; i < numberOfRounds; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        result = playRound(playerChoice, computerChoice);

        score = updateScore(result, score);

        console.log(`Result: ${result}`);
        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`Score: ${score[0]}-${score[1]}`);
    }

    if (score[0] == score[1]) {
        console.log("TIE BREAKERRRRR!!!")
        while (score[0] == score[1]) {
            playerChoice = getPlayerChoice();
            computerChoice = getComputerChoice();

            result = playRound(playerChoice, computerChoice);

            score = updateScore(result, score);

            console.log(`Result: ${result}`);
            console.log(`You chose: ${playerChoice}`);
            console.log(`Computer chose: ${computerChoice}`);
            console.log(`Score: ${score[0]}-${score[1]}`);
        }
    }
}

playGame()


