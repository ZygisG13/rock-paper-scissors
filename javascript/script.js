



//this function will return random number 0,1 or 2, 0 === rock, 1 === scissors, 2 === paper
function getComputerSelection(max) {
    return Math.floor(Math.random() * max); 
}

function game(userSelection, computerSelection) {
    console.log(computerSelection)
    if (userSelection === "rock" && computerSelection === 1 || 
        userSelection === "paper" && computerSelection === 0 ||
        userSelection === "scissors" && computerSelection === 2) {
            return true
        }
    else {
            return false
        
    }
}


for (let i = 0; i < 5; i++) {
    let userSelection = prompt("What's your selection?");
    let max = 3;
    console.log(userSelection.toLowerCase())
    if (game(userSelection.toLowerCase(), getComputerSelection(max)) === true) {
        console.log("You Win! Paper beats Rock");
    }
    else
        console.log("You Lose! Paper beats Rock");


 }