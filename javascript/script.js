
//this function will return random number 0,1 or 2, 0 === rock, 1 === scissors, 2 === paper
function getComputerSelection(max) {
    let choice = Math.floor(Math.random() * max);
    if (choice === 0) {
        console.log("rock's")
        return "rock"
    } else if (choice === 1) {
        console.log("scissors's")
        return "scissors"
    }
    else {
        console.log("paper's")
        return "paper"
    }
}

//game engine: eveluate choises, return true- user wins, parity, false- computer wins
function game(userSelection, computerSelection) {
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

//checks if user inputs is correct
function promptCheck(userSelection) {
    if (userSelection === "rock" || userSelection === "paper" || userSelection 
    === "scissors") {
        return true
    } else {
        return false
    }
}

//base loop, calls helping functions, count results
let userWins = 0;
let computerWins = 0;

for (let i = 0; i < 5; i++) {
    let userSelection = prompt("What's your selection?");
    console.log(`${userSelection.toLowerCase()} as`);
    //with "max" limit random functiuon to 0,1,2 optiopns
    let max = 3;
    let computerChoise = getComputerSelection(max);
    if (promptCheck(userSelection.toLowerCase()) === true) {
        if (game(userSelection.toLowerCase(), computerChoise) === true) {
            userWins = ++userWins;
            console.log(`Result is: User - ${userSelection.toLowerCase()} 
            Computer - ${computerChoise}. User win!`);
        }
        else if (game(userSelection.toLowerCase(), computerChoise) === "parity") {
            console.log(`Result is: User - ${userSelection.toLowerCase()} 
            Computer - ${computerChoise}. Parity!`);
        }

        else {
            computerWins = ++computerWins;
            console.log(`Result is: User - ${userSelection.toLowerCase()} 
            Computer - ${computerChoise}. Computer win!`);
        }
    }
    else {
        prompt("Wrong Selection");
           i = --i;
    }
}

//cheking who is the winner after five turns
if (userWins > computerWins) {
    console.log(`You win! Your score ${userWins} - computer score ${computerWins}`)    
} else {
    console.log(`You lost! Computer score ${computerWins} - your score ${userWins}`) 
}