let userScore = 0
let compScore = 0
const msg = document.querySelector("#msg")
const user = document.querySelector("#userScore")
const computer = document.querySelector("#compScore")

const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame = () => {
    console.log("Draw!!");
    msg.innerText = "Draw!! Play Again";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        user.innerText = userScore;
        console.log("User has won the game");
        msg.innerText = "User has won the game";
    }
    else{
        compScore++;
        computer.innerText = compScore;
        console.log("Computer has won the game");
        msg.innerText = "Computer has won the game";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice is", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice === "scissor" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin)
    }
}

choices.forEach((c) => {
    c.addEventListener("click", () => {
        const choiceId = c.getAttribute("id");
        playGame(choiceId);
    });
})