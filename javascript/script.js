//this function will return random number 0,1 or 2, 0 === rock, 1 === scissors, 2 === paper
//with "max" limit random function to 0,1,2 options
function getComputerSelection(max) {
  let choice = Math.floor(Math.random() * max);
  if (choice === 0) {
    //console.log("rock's");
    return "rock";
  } else if (choice === 1) {
    //console.log("scissors's");
    return "scissors";
  } else {
    //console.log("paper's");
    return "paper";
  }
}

//game engine: evaluate choices, return true - user wins, parity, false - computer wins
function game(userSelection, computerSelection) {
  if (
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissors" && computerSelection === "paper")
  ) {
    return true;
  } else if (
    (userSelection === "rock" && computerSelection === "rock") ||
    (userSelection === "paper" && computerSelection === "paper") ||
    (userSelection === "scissors" && computerSelection === "scissors")
  ) {
    return "parity";
  } else {
    return false;
  }
}

//game result, after each round and after 5 rounds. Results display in <div> fields.
function playRound(userSelection, computerSelection) {
  if (game(userSelection, computerSelection) === true) {
    userWins = ++userWins;
    console.log(userWins);
    results.textContent = `Result is: User - ${userSelection} 
            Computer - ${computerSelection}. You win! Score is: You: ${userWins} - Computer: ${computerWins}`;
  } else if (game(userSelection, computerSelection) === "parity") {
    results.textContent = `Result is: User - ${userSelection} 
            Computer - ${computerSelection}. Parity!`;
  } else {
    computerWins = ++computerWins;
    console.log(computerWins);
    results.textContent = `Result is: User - ${userSelection} 
            Computer - ${computerSelection}. Computer win! Score is: You: ${userWins} - Computer: ${computerWins}`;
  }
  if (userWins === 5 ) {
    results.textContent = `You won! Score is: You: ${userWins} - Computer: ${computerWins}`;
  }
  if (computerWins === 5 ) {
    results.textContent = `Computer won! Score is: You: ${userWins} - Computer: ${computerWins}`;
  }
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const winner = document.querySelector(".winner");
let computerWins = 0;
let userWins = 0;

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id, getComputerSelection(3));
  });
});


