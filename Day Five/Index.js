//Rock Paper Scissors game 


const getUserChoice = (userInput) =>{
    
    if (userInput === 'Rock'|| userInput === 'Paper' || userInput === 'Scissors'){
        return userInput.toLowerCase();
    } else {
        return 'You need to chose between Rock, Paper and Scissors';
    }
}
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice,computerChoice){
    if (userChoice===computerChoice){
        return 'This round was a tied'
    };
    if (userChoice ===  'Rock'){
        if(computerChoice==='Paper'){
            return'The computer Won.';
        } else if (computerChoice=== 'Scissors'){
            return  'You won.';
        }
    };
    if (userChoice ===  'Paper'){
        if(computerChoice==='Scissors'){
            return 'The computer Won.';
        } else if (computerChoice=== 'Rock'){
            return'You won.';
        }
    };
    if (userChoice ===  'Scissors'){
        if(computerChoice==='Rock'){
            return 'The computer Won.';
        } else if (computerChoice=== 'Paper'){
            return'You won.';
        }
    };
}

//Function Play Game



function playGame(){
    userChoice= getUserChoice('Rock','Paper', 'Scissors');
    computerChoice= getComputerChoice('Rock','Paper', 'Scissors');
    console.log(userChoice,computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame()




console.log(determineWinner('Rock','Scissors'))
console.log(getUserChoice('mata'));
console.log(getComputerChoice());