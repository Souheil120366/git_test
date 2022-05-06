const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
const content1 = document.createElement('div');
const h1 = document.createElement('h1')
const h2 = document.createElement('h1')
container.appendChild(content1);
content1.appendChild(h1)
content1.appendChild(h2)

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

  computer_score=0
  user_score=0
  

  buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      let result = playRound(button.id,computerPlay());
      if (result[1] == 'computer win') { computer_score +=1};
      if (result[1] == 'user win') { user_score +=1}; 
      h1.innerHTML = 'computer score '+ computer_score ;
      h2.innerHTML = ' user score ' + user_score;
      if (computer_score==5) {h1.innerHTML = 'COMPUTER WIN'; computer_score=0; user_score=0;}
      if (user_score==5) {h1.innerHTML = 'YOU WIN'; computer_score=0; user_score=0;}
      //alert(result[0])
      
    });
  });

//console.log(game())
//game()
  