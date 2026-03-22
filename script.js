let gameState = {
    isGameSet: false,
    currScore: [0, 0], // [Player Score, Computer Score]
    roundsPlayed: 0,
    maxRounds: 5
}

function main() {
    const playButton = document.createElement("button")
    playButton.id = "play-game"
    playButton.textContent = "Play"
    playButton.addEventListener("click", playGame)

    document.body.append(playButton)
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
            gameState.currScore[1]++
            break;
        case "tie":
            break;
    }

    return currScore;
}

function displayGame(playerChoice, computerChoice, score) {
    document.getElementById("score").textContent = `${score[0]} - ${score[1]}`;
    document.getElementById("player-choice").textContent = `Your Choice: ${playerChoice}`;
    document.getElementById("computer-choice").textContent = `Computer Choice: ${computerChoice}`;
}

function playRound(score, playerChoice, computerChoice) {
    
    let result = getResultOfRound(playerChoice, computerChoice);
    score = updateScore(result, score);

    displayGame(playerChoice, computerChoice, score);
}

function setGameScreen() {

    if (!gameState.isGameSet) {
        const gameScreen = document.createElement("div")
        gameScreen.id = "game-screen"

        const score = document.createElement("h2")
        score.id = "score"
        score.textContent = "0 - 0"
        gameScreen.append(score)

        const playerChoiceText = document.createElement("p")
        playerChoiceText.id = "player-choice"
        playerChoiceText.textContent = "Your Choice: "
        const computerChoiceText = document.createElement("p")
        computerChoiceText.id = "computer-choice"
        computerChoiceText.textContent = "Computer Choice: "
        gameScreen.append(playerChoiceText, computerChoiceText)

        const gameResult = document.createElement("h4")
        gameResult.id = "game-result"
        gameResult.textContent = ". . ."
        gameScreen.append(gameResult)


        const buttons = document.createElement("div")
        buttons.id = "buttons"

        const rockButton = document.createElement("btn")
        const rockIcon = document.createElement("img")
        rockIcon.src = "icons/rock.jpg"
        rockButton.append(rockIcon)
        rockButton.id = "rock"

        const paperButton = document.createElement("btn")
        const paperIcon = document.createElement("img")
        paperIcon.src = "icons/paper.jpg"
        paperButton.append(paperIcon)
        paperButton.id = "paper"

        const scissorsButton = document.createElement("btn")
        const scissorsIcon = document.createElement("img")
        scissorsIcon.src = "icons/scissors.jpg"
        scissorsButton.append(scissorsIcon)
        scissorsButton.id = "scissors"

        buttons.append(rockButton, paperButton, scissorsButton)
        gameScreen.append(buttons)

        document.body.firstElementChild.after(gameScreen)   
        gameState.isGameSet = true
    }

    if (gameState.isGameSet) {
        document.getElementById("score").textContent = "0 - 0"
        document.getElementById("player-choice").textContent = "Your Choice:"
        document.getElementById("computer-choice").textContent = "Computer Choice:"
        document.getElementById("game-result").textContent = ". . ."
    }
        
}

function resetGame() {
    gameState.currScore = [0,0]
    gameState.roundsPlayed = 0
}

async function playGame() {

    const playButton = document.getElementById("play-game")
    playButton.remove()
    playButton.textContent = "Play Again"
    resetGame()
    setGameScreen()

    while (gameState.roundsPlayed < gameState.maxRounds) {
        let playerChoice = await getPlayerChoice();
        let computerChoice = getComputerChoice();

        playRound(gameState.currScore, playerChoice, computerChoice)
        gameState.roundsPlayed += 1
    }

    let resultDisplay = document.getElementById("game-result")
    if (gameState.currScore[0] == gameState.currScore[1]) {
        resultDisplay.textContent = "TIE BREAKERRRR!!!!"
        while (gameState.currScore[0] == gameState.currScore[1]) {
            let playerChoice = await getPlayerChoice();
            let computerChoice = getComputerChoice();

            playRound(gameState.currScore, playerChoice, computerChoice);
        }
    }

    if (gameState.currScore[0] > gameState.currScore[1]) {
        resultDisplay.textContent = "You've won!";
    } else if (gameState.currScore[0] < gameState.currScore[1]) {
        resultDisplay.textContent = "You suck";
    }

    document.body.append(playButton)
    
}

main()
