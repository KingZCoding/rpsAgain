const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let scores = null;
let gameOver = false;

document.addEventListener('DOMContentLoaded', function () {
  const btnRock = document.getElementById('rock');
  const btnPaper = document.getElementById('paper');
  const btnScissors = document.getElementById('scissors');
  const btnReset = document.getElementById('reset');
  scores = document.getElementById('score');
  btnRock.addEventListener('click', function () {
    playGame('Rock');
  });
  btnPaper.addEventListener('click', function () {
    playGame('Paper');
  });
  btnScissors.addEventListener('click', function () {
    playGame('Scissors');
  });
  btnReset.addEventListener('click', restartGame);
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
  console.log(`Player Choice: ${playerChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    showScore('tie');
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    playerScore++;
    showScore('player');
  } else {
    computerScore++;
    showScore('computer');
  }
  checkWinner();
}

function showScore(winner) {
  let scoreStr = '';
  if (winner === `tie`) {
    scoreStr = `<p>It is a tie! Do it again! Player Score: ${playerScore} / Computer Score ${computerScore}</p>`;
  } else if (winner === `player`) {
    scoreStr = `<p>Player has won the round! Wow you beat a computer! Player Score: ${playerScore}/Computer Score :${computerScore}</p>`;
  } else {
    scoreStr = `<p>Computer has won the round! It's ok. It is a computer after all! Computer Score: ${computerScore} / Player Score: ${playerScore}</p>`;
  }
  scores.innerHTML += scoreStr;
}

function clearScores() {
  playerScore = 0;
  computerScore = 0;
}

function checkWinner() {
  if (playerScore === 5) {
    scores.innerHTML += `<p>Player has won with 5 points!</p>`;
    gameOver = true;
  } else if (computerScore === 5) {
    scores.innerHTML += `<p>Computer has won with 5 points!</p>`;
    gameOver = true;
  }
}

function restartGame() {
  clearScores();
  gameOver = false;
  scores.innerHTML = '';
}

function playGame(playerChoice) {
  if (gameOver) {
    scores.innerHTML += `<p>Game is over</p>`;
    checkWinner();
    return;
  }
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);

  if (playerScore > computerScore) {
    console.log(
      `Player has won! Player has ${playerScore} points and Computer has ${computerScore} points!`
    );
  } else {
    console.log(
      `Computer has won! Player has ${playerScore} points and Computer has ${computerScore} points!`
    );
  }
}

// playGame(5);
