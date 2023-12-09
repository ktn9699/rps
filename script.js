


function getComputerChoice (){ // this gets the computer's choice!
    const rand = Math.floor(Math.random() * 3);
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

function playRound(playerSelection, computerSelection) {  // plays the round, returns win/loss message
  if (getWinner(playerSelection,computerSelection) === 'player'){
    return 'You Win! ' + playerSelection + ' beats ' +computerSelection;
  }
  else if (getWinner(playerSelection, computerSelection) === 'computer'){
    return 'You lose! ' + computerSelection + ' beats ' +playerSelection;
  }
else {
  return "It's a tie!";
}
}

function game() {
  let playercount = 0;
  let computercount = 0;
  let n = 5; // in a bo3, first to 3, wins, 5 games default. 
  for (let i = 0; i < n; i++) {
  let playerSelection = prompt("Rock, paper or scissors?"); // user selects their option
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
    if (getWinner(playerSelection,computerSelection)=== 'player') {
      playercount++;

    if (playercount == 3) // if playercount reaches 3, they are the winner
    break;    
    }
      else if (getWinner(playerSelection,computerSelection) === 'computer') {
        computercount++;
        if (computercount == 3) // if computercount reaches to 3 wins, they are the winner
        break;    
      }
else {
n++; // if tie, another game is added for play. 
}
    }

    if (playercount > computercount) { // if player has 3 wins and has more wins then computer, they are declared the winner
      return 'You win! The score is: ' + playercount + ' : ' + computercount+ '.';
    }
    if (computercount > playercount) { // if computer has 3 wins and has more wins then player, they are declared the winner
      return 'Computer wins! The score is: ' + computercount + ' : ' + playercount+ '.';
    } 
}

console.log(game())
