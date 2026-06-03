let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const playGame = (userChoice)=>{
  console.log("User choosed" , userChoice)
  const compChoice = genCompChoice();
  console.log("computer choice" , compChoice);
  if(userChoice === compChoice){
    drawGame();
  } else{
     let userWin = true;
     if (userChoice==="rock"){
        userWin = compChoice === "paper" ? false : true;
     } else if(userChoice ==="paper"){
         userWin = compChoice === "scissor" ? false : true;
     }else{
         userWin = compChoice === "rock" ? false : true;
     }
    showWinner(userWin , userChoice , compChoice);
  }
};



choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})
const genCompChoice = ()=>{
    const options = ["rock" , "paper" , "scissor"]
    const rndmIdx = Math.floor(Math.random() * 3);
    return options[rndmIdx];
    
}
const drawGame = ()=>{
    console.log("game was a draw")
    msg.innerText = "Its draw you and computer selected the same"
    msg.style.backgroundColor = "#6D1A36"
}
const showWinner = (userWin , userChoice , compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.style.backgroundColor = "green"
        msg.innerText = `You win! your ${userChoice} beats computer's ${compChoice}` ;
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
         msg.innerText = `You lose! computers's ${compChoice} beats yours ${userChoice}` ;
    }
}
