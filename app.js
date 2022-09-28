const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
let possibleChoices = document.querySelectorAll("button", "i");
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let compScore = 0;

possibleChoices.forEach(function (possibleChoice) {
  possibleChoice.addEventListener("click", handleUserChoice);
});

function handleUserChoice(event) {
  event.preventDefault();
  userChoice = event.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}

function generateComputerChoice() {
  let computerChoices = ["rock", "paper", "scissors"];
  computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function win() {
  userScore++;
  userScoreDisplay.innerHTML = userScore;
  compScoreDisplay.innerHTML = compScore;
}

function lose() {
  compScore++;
  userScoreDisplay.innerHTML = userScore;
  compScoreDisplay.innerHTML = compScore;
}

function draw() {
  userScoreDisplay.innerHTML = userScore;
  compScoreDisplay.innerHTML = compScore;
}
function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
    win();
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
    win();
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
    win();
  } else {
    result = "You lose!";
    lose();
  }

  resultDisplay.innerHTML = result;
}
