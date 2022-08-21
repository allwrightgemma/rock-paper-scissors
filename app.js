const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

function generateComputerChoice() {
  let computerChoices = ["rock", "paper", "scissors"];
  computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  console.log(computerChoice);
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

// function generateComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

//   if (randomNumber === 1) {
//     computerChoice = "rock";
//   }
//   if (randomNumber === 2) {
//     computerChoice = "paper";
//   }
//   if (randomNumber === 3) {
//     computerChoice = "scissors";
//   }
//   computerChoiceDisplay.innerHTML = computerChoice;
// }
