
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const compScore = document.querySelector('.compScore');
const playerScore = document.querySelector('.playerScore');
const result = document.querySelector('.result');
let playerCount = 0;
let computerCount = 0;

rock.addEventListener('click', () => console.log(playRound(playerSelection = 'Rock')));
paper.addEventListener('click', () => console.log(playRound(playerSelection = 'Paper')));
scissors.addEventListener('click', () => console.log(playRound(playerSelection = 'Scissors')));

function getComputerChoice (){ // this gets the computer's choice!
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0: 
        return 'Rock';
         break;
         case 1:
           return 'Paper';
            break;
            case 2:
               return 'Scissors';
    }
}

let computerSelection = getComputerChoice();
function getWinner(playerSelection, computerSelection) {  // get's the winner of the round, returns string result = player, computer or tie.
  let result = ''
  if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS'
  || playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK'
  || playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER' ) {
    result = 'player';  
    return result; 
 
}
else if (computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS'
|| computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'ROCK'
|| computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER' ) {
  result = 'computer';
  return result;  

}
else {
  result = 'tie'  
  return result;
}
}

function playRound(playerSelection) {  // plays the round, returns win/loss message

  computerSelection = getComputerChoice();
  if (getWinner(playerSelection,computerSelection) === 'player'){
    playerScore.textContent = ++playerCount;
    result.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection+'.'

  }
  else if (getWinner(playerSelection, computerSelection) === 'computer'){
    compScore.textContent = ++computerCount;
    result.textContent = 'You Lose!'
  }
else {

  result.textContent = "It's a tie!"
}
if (playerCount == 5 && playerCount > computerCount) {
  result.textContent = playerSelection + ' beats ' + computerSelection+" and you have won: " +playerCount+'-'+computerCount;
playerCount = 0;
computerCount = 0;
playerScore.textContent = playerCount;
compScore.textContent = computerCount;
}
if (computerCount == 5 && computerCount > playerCount) {
  result.textContent = playerSelection + ' beats ' + computerSelection+" and you have won: " +playerCount+'-'+computerCount;
  playerCount = 0;
  computerCount = 0;
  playerScore.textContent = playerCount;
  compScore.textContent = computerCount;
}
}




