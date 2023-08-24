"use strict";

// Knapper - eventlistners tilføjes
// Bruger vælger
// Math random / Brug array til at opsætte sten, saks og papir, så de på den måde får en automatisk position
// Hånd animation / Her bruges animationend
// Korrekte hænder vises / Computeren vælger sin
// If sætning der afgør hvem der har vundet / der skal være 6
// Vis korrekt aflsutningsskærm (hører sammen med punktet ovenover) / her skal der også bruges if sætning

window.addEventListener("DOMContentLoaded", startButtons);

let userChoice;
let computerChoice;

const userPlayer = document.querySelector("#player1");
const userComputer = document.querySelector("#player2");

function startButtons() {
  console.log("startButtons");
  const rockBtn = document.querySelector(".rock");
  const paperBtn = document.querySelector(".paper");
  const scissorsBtn = document.querySelector(".scissors");
  rockBtn.addEventListener("click", defineUserChoice);
  paperBtn.addEventListener("click", defineUserChoice);
  scissorsBtn.addEventListener("click", defineUserChoice);
}

function generateComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    computerChoice = "rock";
  } else if (randomChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("generatecomputerchoice");
}

function defineUserChoice() {
  console.log("defineuserchoice");
  if (this.classList.contains("rock")) {
    userChoice = "rock";
  } else if (this.classList.contains("paper")) {
    userChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  startSpil();
  generateComputerChoice();
}

function startSpil() {
  console.log("start spil");
  userPlayer.classList.remove("rock");
  userPlayer.classList.remove("paper");
  userPlayer.classList.remove("scissors");
  userComputer.classList.remove("rock");
  userComputer.classList.remove("paper");
  userComputer.classList.remove("scissors");
  userPlayer.classList.add("shake");
  userComputer.classList.add("shake");
  userPlayer.addEventListener("animationend", animationSlut);
}

function animationSlut() {
  userPlayer.classList.remove("shake");
  userComputer.classList.remove("shake");
  if (userChoice === "rock") {
    userPlayer.classList.add("rock");
  } else if (userChoice === "paper") {
    userPlayer.classList.add("paper");
  } else {
    userPlayer.classList.add("scissors");
  }
  if (computerChoice === "rock") {
    userComputer.classList.add("rock");
  } else if (userChoice === "paper") {
    userComputer.classList.add("paper");
  } else {
    userComputer.classList.add("scissors");
  }

  findResultat();
}

function findResultat() {
  let vinderenEr;
  if (userChoice === "rock" && computerChoice === "paper") {
    vinderenEr = "computer";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    vinderenEr = "computer";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    vinderenEr = "computer";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    vinderenEr = "user";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    vinderenEr = "user";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    vinderenEr = "user";
  }

  findVinder(vinderenEr);
}

function findVinder(vinderenEr) {
  if (vinderenEr === "user") {
    document.querySelector("#win").classList.remove("hidden");
  } else if (vinderenEr === "computer") {
    document.querySelector("#lose").classList.remove("hidden");
  } else {
    document.querySelector("#draw").classList.remove("hidden");
  }
}
