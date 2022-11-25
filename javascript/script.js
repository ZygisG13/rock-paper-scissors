
//this function will return random number 0,1 or 2, 0 === rock, 1 === scissors, 2 === paper
function getComputerSelection(max) {
    let choice = Math.floor(Math.random() * max);
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "scissors"
    }
    else {
        return "paper"
    }
}

function game(userSelection, computerSelection) {
    console.log(computerSelection)
    if (userSelection === "rock" && computerSelection === "scissors" || 
        userSelection === "paper" && computerSelection === "rock" ||
        userSelection === "scissors" && computerSelection === "paper") {
            return true
        }
    else {
            return false       
    }
}

let userWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
    let userSelection = prompt("What's your selection?");
    let max = 3;
    console.log(userSelection.toLowerCase())
    if (game(userSelection.toLowerCase(), getComputerSelection(max)) === true) {
        userWins = ++userWins;
        console.log(userWins)
    }
    else {
        computerWins = ++computerWins;
        console.log(computerWins)
    }
}

if (userWins > computerWins) {
    console.log(`You win! Score ${userWins} > ${computerWins}`)    
} else {
    console.log(`You lost! Score ${computerWins} > ${userWins}`) 
}