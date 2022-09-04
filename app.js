const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  let computerChoices = ["rock", "paper", "scissors"];
  computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  resultDisplay.innerHTML = result;
}
