let gameState = {
    isGameSet: false,
    currScore: [0, 0], // [Player Score, Computer Score]
    roundsPlayed: 0,
    maxRounds: 5
}

function main() {
    const playButton = document.getElementById("play-game")
    playButton.addEventListener("click", playGame)
}

function getPlayerChoice() {
    return new Promise(resolve => {
        document.getElementById("rock").addEventListener("click", () => resolve("rock"), { once: true })
        document.getElementById("paper").addEventListener("click", () => resolve("paper"), { once: true })
        document.getElementById("scissors").addEventListener("click", () => resolve("scissors"), { once: true })
    })
}

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
  
function getResultOfRound(playerChoice, computerChoice) {
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

    switch (result) {
        case "win":
            gameState.currScore[0]++
            break;
        case "lose":
            gameState[gameState.currScore[1]]++
            break;
        case "tie":
            break;
    }

    return currScore;
}

function displayGame(result, playerChoice, computerChoice, score) {
    document.getElementById("score").textContent = `${score[0]} - ${score[1]}`;
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`Score: ${score[0]}-${score[1]}`);
}

function playRound(score, playerChoice, computerChoice) {
    
    let result = getResultOfRound(playerChoice, computerChoice);
    score = updateScore(result, score);

    displayGame(result, playerChoice, computerChoice, score);
}

function setGameScreen() {

    if (!gameState.isGameSet) {
        const gameScreen = document.createElement("div")

        const score = document.createElement("h2")
        score.id = "score"
        score.textContent = "0 - 0"
        gameScreen.append(score)
        const gameResult = document.createElement("h4")
        gameResult.id = "game-result"
        gameResult.textContent = ". . ."
        gameScreen.append(gameResult)

        const rockButton = document.createElement("button")
        rockButton.textContent = "rock"
        rockButton.id = "rock"
        const paperButton = document.createElement("button")
        paperButton.textContent = "paper"
        paperButton.id = "paper"
        const scissorsButton = document.createElement("button")
        scissorsButton.textContent = "scissors"
        scissorsButton.id = "scissors"
        gameScreen.append(rockButton, paperButton, scissorsButton)

        document.body.firstElementChild.after(gameScreen)   
        gameState.isGameSet = true
    }

    if (gameState.isGameSet) {
        document.getElementById("score").textContent = "0 - 0"
        document.getElementById("game-result").textContent = ". . ."
    }
        
}

async function playGame() {
    
    setGameScreen()

    while (gameState.roundsPlayed < gameState.maxRounds) {
        let playerChoice = await getPlayerChoice();
        let computerChoice = getComputerChoice();

        playRound(gameState.currScore, playerChoice, computerChoice)
        gameState.roundsPlayed += 1
    }

    if (gameState.currScore[0] == gameState.currScore[1]) {
        console.log("TIE BREAKERRRRR!!!")
        while (gameState.currScore[0] == gameState.currScore[1]) {
            let playerChoice = await getPlayerChoice();
            let computerChoice = getComputerChoice();

            playRound(playerChoice, computerChoice, currScore);
        }
    }

    if (gameState.currScore[0] > gameState.currScore[1]) {
        console.log("You've won!!!!!");
    } else if (gameState.currScore[0] < gameState.currScore[1]) {
        console.log("You suck");
    }
    
}

main()
