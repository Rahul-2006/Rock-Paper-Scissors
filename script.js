let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame= () => {
    msg.innerText = "Game Was Drawn!";
    msg.style.backgroundColor = "Grey"
}

const showWinner = (userWin , userchoice , compchoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You did not Win. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const playGame = (userchoice) => {
    const compchoice = genCompChoice ();
    if (userchoice === compchoice) {
        drawGame();
    } 
    else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }    
        else if (userchoice === "scissors") {
            userWin = compchoice === "rock" ? false : true;
        }
        else {
            userWin = compchoice === "scissors" ? false : true;
        }
   showWinner(userWin , userchoice , compchoice);
  }
   
}

choice.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
});