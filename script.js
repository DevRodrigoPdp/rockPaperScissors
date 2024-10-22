humanScore = 0
computerScore = 0

function getComputeChoice(){

    const randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber === 0){
        return "rock";
    } else if(randomNumber === 1){
        return "paper";
    } else if(randomNumber === 2){
        return "scissors";
    }   

}
function getHumanChoice(){
    let userChoice = prompt("Elige piedra,papel o tijeras").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
        return userChoice;
      }else{
        console.log("Opcion invalida");
        return getHumanChoice();
      }
}

function playRound(){
    userChoice = userChoice.toLowerCase();

    // Compare the user choice with the computer choice
    if (userChoice === computerChoice){
        console.log("Empate");
    }else if ((userChoice ==="rock" && computerChoice === "scissors") ||
             (userChoice ==="paper" && computerChoice === "rock") ||
             (userChoice ==="scissors" && computerChoice === "paper")
            ){
                humanScore++;
                console.log("El humano gana");
            }else{ computerScore ++;
                console.log("El ordenador gana");
            }
}