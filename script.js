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
    if (userChoice === "piedra" || userChoice === "papel" || userChoice === "tijeras"){
        return userChoice;
      }else{
        console.log("Opcion invalida");
        return getHumanChoice();
      }
}
console.log(getHumanChoice());