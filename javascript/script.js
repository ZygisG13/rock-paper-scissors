
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
    else if (userSelection === "rock" && computerSelection === "rock" || 
            userSelection === "paper" && computerSelection === "paper" ||
            userSelection === "scissors" && computerSelection === "scissors") {
                return "parity"
    } else {
            return false       
    }
}

function promptCheck(userSelection) {
    if (userSelection === "rock" || userSelection === "paper" || userSelection === "scissors") {
        return true
    } else {
        return false
    }
}


let userWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
    let userSelection = prompt("What's your selection?");
    let max = 3;
    let computerChoise = getComputerSelection(max);
    console.log(`${userSelection.toLowerCase()} as`);
    if (promptCheck(userSelection.toLowerCase()) === true) {
        if (game(userSelection.toLowerCase(), computerChoise) === true) {
            userWins = ++userWins;
            console.log(`Result is: User - ${userSelection.toLowerCase()} Computer - ${getComputerSelection(max)}.
            User win!`);
        }
        else if (game(userSelection.toLowerCase(), computerChoise) === "parity") {
            console.log(`Result is: User - ${userSelection.toLowerCase()} Computer - ${getComputerSelection(max)}.
            Parity!`);
        }

        else {
            computerWins = ++computerWins;
            console.log(`Result is: User - ${userSelection.toLowerCase()} Computer - ${getComputerSelection(max)}.
            Computer win!`);
        }
    }
    else {
        prompt("Wrong Selection");
           i = --i;
    }
}

if (userWins > computerWins) {
    console.log(`You win! Your score ${userWins} - computer score ${computerWins}`)    
} else {
    console.log(`You lost! Computer score ${computerWins} - your score ${userWins}`) 
}