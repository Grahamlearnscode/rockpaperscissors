//returning winner still needs to happen for round counters to work
//but winnerText should not use winner. Let's take the console log lines and have those be winnerText - they're already written to read correctly whether win/lose/draw
//Also need to give transparency in the DOM - you chose x computer chose y result was z

function togglePlayControls() {
    const playButton = document.querySelector('#play');
    playButton.classList.toggle('inactive');
    let selectButtons = document.querySelectorAll('.select');
    selectButtons.forEach(foo => foo.classList.toggle('select'));
}

function playRound(playerChoice) {
    console.log('Player chose ' + playerChoice);
    let computerChoice=computerPlay();
    console.log('Computer chose ' + computerChoice);
    let winner=compareChoices(playerChoice, computerChoice);
    console.log('winner is ' + winner);
    updateWinnerText(winner);
}

function compareChoices(playerChoice, computerChoice) {
    console.log('comparing ' + playerChoice + ' to ' + computerChoice);
    switch (playerChoice) {
        case computerChoice:
        console.log('You both chose ' + playerChoice + '. That\'s a draw!');
        winner='draw';
        break;
    
        case 'Rock':
            if (computerChoice==='Scissors') {console.log('Rock blunts Scissors. You win!'); winner='player';}
            else {console.log('Paper covers Rock. You lose!'); winner='computer';};
        break;
    
        case 'Paper':
            if (computerChoice==='Rock') {console.log('Paper covers Rock. You win!'); winner='player';}
            else {console.log('Scissors cuts Paper. You lose!'); winner='computer';};
        break;
    
        case 'Scissors':
            if (computerChoice==='Paper') {console.log('Scissors cuts Paper. You win!'); winner='player';}
            else {console.log('Rock blunts Scissors. You lose!'); winner='computer';};
        break;
        
        default: console.error('Invalid comparison: ' + playerChoice + ' + ' + computerChoice);}
        return winner;
   }

   function updateWinnerText(winner) {
    console.log('updating winner text to show ' + winner);
    let winnerText = document.querySelector('#winnerText');
    winnerText.textContent='A winner is ' + winner;
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




