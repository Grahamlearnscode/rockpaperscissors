////Working fine on valid inputs. Invalid inputs are logged, haven't yet found a way to loop back to the correct starting point of calling the function though

let w=0;
let c=0;
let i=0;

function computerPlay() {

    //choose a random number 1-3
    function randomInteger (max) { 
        let myRandomInt = (Math.floor(Math.random()*max)+1);
    /*console.log('myRandomInt is ' + myRandomInt);*/
    return myRandomInt;
    }

    let computerChoice = randomInteger(3);
    /*console.log(computerChoice);*/

    switch(computerChoice) {
        case 1: computerChoice = 'Rock'; break;
        case 2: computerChoice = 'Paper'; break;
        case 3: computerChoice = 'Scissors'; break;
        default: console.error('Error: computer didn\'t choose anything');
}

/*console.log('Computer chose ' + computerChoice);*/
return computerChoice;
}

function playerSelection() {
let playerChoice = prompt('Make your choice: Rock, Paper or Scissors');
//Handle casing, convert to Proper Case
    playerChoice=playerChoice.toLowerCase();
    playerChoice=playerChoice.replace(playerChoice.charAt(0), playerChoice.charAt(0).toUpperCase());
//Handle invalid inputs
    switch(playerChoice) {
        case 'Rock': break;
        case 'Paper': break;
        case 'Scissors': break;
        
        //Handle 'paper scissors stone' people
        case 'Stone': 
            alert('Um...I\'m going to assume you meant \'Rock\' there...'); 
            playerChoice='Rock';
            break;
        
        //Handle Konami code
        case 'Uuddlrlrba':alert('God mode activated...');alert('...it\'s the same as regular mode, but you can feel proud of yourself for trying'); playerChoice=null; playerChoice=playerSelection(); break;
        
        default: console.error('Invalid input: ' + playerChoice); 
        alert('That wasn\'t a valid input, try again');
        playerChoice=null;
    }

/*console.log('Within-function: player chose ' + playerChoice);*/
return playerChoice;
}


function playRound() {
let playerChoice=playerSelection();
console.log('Player chose ' + playerChoice);
let computerChoice=computerPlay();
console.log('Computer chose ' + computerChoice);
let winner
//Compare for who wins
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
    
    default: console.error('Invalid comparison: ' + playerChoice + ' + ' + computerChoice);
}
return winner;}


function game() {
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

