
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
      (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') ||
      (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt('Enter your choice (Rock/Paper/Scissors):');
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      console.log(`Round ${round}: ${result}`);
  
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You won the game!');
    } else if (playerScore < computerScore) {
      console.log('Sorry, you lost the game.');
    } else {
      console.log("It's a tie game!");
    }
  }
  
  game();
  