//creating never changing choices
const choices = ['Rock', 'Paper', 'Scissors'];

//creating a prompt for a player to enter their choices to play
function getPlayerChoice() {
  let playerChoice = prompt('Enter Rock, Paper, or Scissors to play!');
  if (playerChoice) {
    //logic to convert player input with first letter cap and rest lower and checking to make sure that playerChoice matches set choices
    playerChoice =
      playerChoice.charAt(0).toUpperCase() +
      playerChoice.slice(1).toLowerCase();
    if (choices.includes(playerChoice)) {
      return playerChoice;
      //if playerChoice matches we skip over else statement
    } else {
      //alerting player that playerChoice does not match choices and reprompts getPlayerChoice()
      alert('You have not chosen a correct reposnse! Do it again!');
      return getPlayerChoice();
    }
  }
}

//creating ai choice selection
function getComputerChoice() {
  //creating and storing a function incase of a tie
  return choices[Math.floor(Math.random() * choices.length)];
}

//creating function to play a round of rps
function playRound(playerChoice, computerChoice) {
  //console logging the player choice and computer choice to start a round
  console.log(`Player Choice: ${playerChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);

  //checking to see if it is a tie and if so we play a new round
  if (playerChoice === computerChoice) {
    console.log('It is a tie! Do it again!');
    const newPlayerChoice = getPlayerChoice();
    const newComputerChoice = getComputerChoice();
    playRound(newPlayerChoice, newComputerChoice);
    //round logic of game if not a tie
  } else if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    console.log('Player has won the round! Wow you beat a computer!');
    return true;
  } else {
    console.log(
      "Computer has won the round! It's ok. It is a computer after all!"
    );
    return false;
  }
}

function playGame(round) {
  //creating variables for score
  let playerScore = 0;
  let computerScore = 0;

  //for loop to keep track of score per round
  for (let i = 0; i < round; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    if (result === true) {
      playerScore++;
    } else {
      computerScore++;
    }
  }
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

playGame(5);
