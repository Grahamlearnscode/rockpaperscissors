//Also need to give transparency in the DOM - you chose x computer chose y result was z
//Button chosen should hightlight or others should grey out
//Also add 'computer choosing...' visibility in UI

function togglePlayControls() {
    const playButton = document.querySelector('#play');
    playButton.classList.toggle('inactive');
    let selectButtons = document.querySelectorAll('.hidden');
    selectButtons.forEach(foo => foo.classList.toggle('hidden'));
    selectButtons.forEach(foo => foo.classList.toggle('rpsControl'))
}

function playRound(playerChoice) {
    highlightButton(playerChoice);
    disableRpsControls();
    console.log('Player chose ' + playerChoice);
    let computerChoice=computerPlay();
    console.log('Computer chose ' + computerChoice);
    let result=compareChoices(playerChoice, computerChoice);
    console.log(result);
    document.querySelector('#resultText').textContent=result;
    console.log('winner is ' + winner);
    updateWinnerText(winner);
}

function compareChoices(playerChoice, computerChoice) {
    console.log('comparing ' + playerChoice + ' to ' + computerChoice);
    switch (playerChoice) {
        case computerChoice:
        result='You both chose ' + playerChoice + '. That\'s a draw!';
        winner='draw';
        break;
    
        case 'Rock':
            if (computerChoice==='Scissors') {result='Rock blunts Scissors. You win!'; winner='player';}
            else {result='Paper covers Rock. You lose!'; winner='computer';};
        break;
    
        case 'Paper':
            if (computerChoice==='Rock') {result='Paper covers Rock. You win!'; winner='player';}
            else {result='Scissors cuts Paper. You lose!'; winner='computer';};
        break;
    
        case 'Scissors':
            if (computerChoice==='Paper') {result='Scissors cuts Paper. You win!'; winner='player';}
            else {result='Rock blunts Scissors. You lose!'; winner='computer';};
        break;
        
        default: console.error('Invalid comparison: ' + playerChoice + ' + ' + computerChoice);}
        return result;
   }

   function updateWinnerText(winner) {
    let winnerText = document.querySelector('#winnerText');
    if (winner=='player') {winnerText.textContent='You won the last round.';}
    else if (winner=='computer') {winnerText.textContent='The computer won the last round.';}
    else {winnerText.textContent='The last round was a draw.';}
}

function computerPlay() {
    //choose a random number 1-3
    function randomInteger (max) { 
        let myRandomInt = (Math.floor(Math.random()*max)+1);
        return myRandomInt;
        }
    let computerChoice = randomInteger(3);
    switch(computerChoice) {
        case 1: computerChoice = 'Rock'; break;
        case 2: computerChoice = 'Paper'; break;
        case 3: computerChoice = 'Scissors'; break;
        default: console.error('Error: computer didn\'t choose anything');
        }
    return computerChoice;
}


function highlightButton(selectedButton) {
    selectedButton=document.querySelector('#'+selectedButton);
    selectedButton.style.background = 'lightblue';
    selectedButton.style['border-color'] = 'lightblue';
  }

function disableRpsControls() {
  let rpsControls=document.querySelectorAll('.rpsControl');
  rpsControls.forEach(rpsControl => rpsControl.disabled = true);
}

//Counters for round winners
let w=0; let c=0; let i=0;

function fiveRoundGame() {
    if (i<5) {
        let winner=playRound();
        i++;
        if (winner==='draw'){console.log('Round ' + i + ' was a draw.');}
        else if (winner==='player'){
            console.log('You won round ' + i + '!');
            w++;
        }
        else {
            console.log('The computer won round ' + i + '.');
            c++;
        }
        }
    else {
        console.log('After five games played, you won ' + w + ' of them. The computer won ' + c + '. ');
        if (w>c) {console.log('That makes you the overall winner!');}
        else if (c>w) {console.log('That means the computer won overall. Hard luck.');}
        else {console.log('It was a draw.')}
        }
}




