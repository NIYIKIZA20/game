let playerSelection;
let computerSelection;
let pcount = 0;
let ccount = 0;
let dcount = 0;
let myWinner;

function delay(sec) {
  return new Promise((res) => {
   // console.log(`Awaiting ${sec} seconds`);
    setTimeout(() => {
      res();
    }, sec * 1000);
  });
}
function getComputerSelection() {
  let randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum == 1) {
    return "ROCK";
  } else if (randNum == 2) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}
function getPlayerSelection() {
  let player = prompt("Enter either rock, paper or scissor: ");

  if (player.toLowerCase() == "rock") {
    return "ROCK";
  } else if (player.toLowerCase() == "paper") {
    return "PAPER";
  } else if (player.toLowerCase() == "scissor") {
    return "SCISSOR";
  }
}

function playRound() {
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    dcount = dcount + 1;
    return "DRAW !";
  } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
    pcount = pcount + 1;
    return "YOU WIN!";
  } else if (computerSelection == "PAPER" && playerSelection == "SCISSOR") {
    pcount = pcount + 1;
    return "YOU WIN!";
  } else if (computerSelection == "SCISSOR" && playerSelection == "ROCK") {
    pcount = pcount + 1;
    return "YOU WIN!";
  } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    ccount = ccount + 1;
    return "YOU LOSE!";
  } else if (computerSelection == "SCISSOR" && playerSelection == "PAPER") {
    ccount = ccount + 1;
    return "YOU LOSE!";
  } else if (computerSelection == "ROCK" && playerSelection == "SCISSOR") {
    ccount = ccount + 1;
    return "YOU LOSE!";
  } else {
    return "you entered wrong choice!";
  }
}
async function game() {
  let playerText = document.getElementById("playerId");
  let computerText = document.getElementById("computerId");
  let resultText = document.getElementById("resultId");
  let playerCount = document.getElementById("playerwin");
  let computerCount = document.getElementById("computerwin");
  let drawCount = document.getElementById("drawwin");
  let winner = document.getElementById("winner");

  for (let i = 1; i <= 5; i++) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();
    computerText.textContent = "Computer : " + computerSelection;
    playerText.textContent = "Player : " + playerSelection;
    resultText.textContent = "Result : " + playRound();
    playerCount.textContent = "player: " + pcount;
    computerCount.textContent = "computer: " + ccount;
    drawCount.textContent = "draw: " + dcount;

    await delay(2);
  }
  if (pcount == ccount) {
    myWinner = "NO ONE WON, DRAW!!!";
  } else if (pcount > ccount) {
    myWinner = "PLAYER WON !!! cong's";
  } else {
    myWinner = "COMPUTER WON";
  }
  winner.textContent = "Winner : " + myWinner;
}

game();
