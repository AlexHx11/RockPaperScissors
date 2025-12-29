function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let int = getRandomInt(1,3);
    let choice = null;

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
        default:
            choice = "hello"
    }

    return choice;
}
  
for (let i = 0; i < 100; i++) {
    console.log(getComputerChoice())
}