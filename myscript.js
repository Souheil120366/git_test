function computerPlay() {

    x=Math.floor(Math.random()*3)
    if (x == 0) {ans ='Rock'}
    if (x == 1) {ans = 'Paper'}
    if (x == 2) {ans = 'Scissors'}
  
    return ans
  }

  
function playRound(playerSelection, computerSelection) {
      UpCasePS=playerSelection.toUpperCase()

      if (UpCasePS == 'ROCK' && computerSelection == 'Paper') {
          ans="You Lose! Paper beats Rock"
          res='computer win'
      }
      if (UpCasePS == 'ROCK' && computerSelection == 'Scissors') {
        ans="You Win! Rock beats Scissors "
        res='user win'
      }
      if (UpCasePS == 'PAPER' && computerSelection == 'Rock') {
        ans="You Win! Paper beats Rock  "
        res='user win'
      }
      if (UpCasePS == 'PAPER' && computerSelection == 'Scissors') {
        ans="You Lose! Scissors beats Paper "
        res='computer win'
      }
      if (UpCasePS == 'SCISSORS' && computerSelection == 'Paper') {
        ans="You Win! Scissors beats Paper "
        res='user win'
      }
      if (UpCasePS == 'SCISSORS' && computerSelection == 'Rock') {
        ans="You Lose! Rock beats Scissors "
        res='computer win'
      }
      if (UpCasePS == computerSelection.toUpperCase()) {
        ans="The game is on" 
        res='draw' 
      }

      
    return [ans,res]
  }
  
  function game() {

      computer_score=0
      user_score=0

      for (i=1; i<=5; i++) {
        
        let choice = prompt('give your choice : ');
        let result = playRound(choice,computerPlay()); 
        alert(result[0])
        console.log(result[0]);
        if (result[1] == 'computer win') { computer_score +=1};
        if (result[1] == 'user win') { user_score +=1};
      }

      if (user_score > computer_score) {alert('YOU WIN')}
      else {console.log('YOU LOSE')}
  }

//console.log(game())
game()
  