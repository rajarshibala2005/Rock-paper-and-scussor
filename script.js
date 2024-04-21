let userScore = 0
let compScore = 0

const userScoreAdd = document.getElementById("userScore")
const compScoreAdd = document.getElementById("compScore")
const choices = document.querySelectorAll(".choice")
const msg = document.getElementById("msg")
const reset = document.querySelector("button")

const generateCompChoice = () => {
    let option = ["rock", "paper", "scissor"]
    let randomN = Math.floor(Math.random()*3)
    return option[randomN]
}

const gameDraw = () =>  {
    msg.innerText = "Game draw! play again"
    msg.style.background =  "#000"
}

const playGame = (userChoice) => {
    const compChoice = generateCompChoice()
    if (userChoice===compChoice) {
        gameDraw()
    }
    else {
        let userWin = true
        if (userChoice==="rock") {
            userWin = compChoice==="scissor" ? true : false
            console.log(`computer choice ${compChoice}`)
            console.log(`user choice ${userChoice}`)
        }
        else if (userChoice==="paper") {
            userWin = compChoice==="rock" ? true : false
            console.log(`computer choice ${compChoice}`)
            console.log(`user choice ${userChoice}`)
        }
        else if (userChoice==="scissor") {
            userWin = compChoice==="paper" ? true : false
            console.log(`computer choice ${compChoice}`)
            console.log(`user choice ${userChoice}`)
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScoreAdd.innerText = userScore
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`
        msg.style.background = "green" 
    } else {
        compScore++
        compScoreAdd.innerText = compScore
        msg.innerText = `You lose the game! ${compChoice} beats ${userChoice}`
        msg.style.background = "red" 
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

reset.addEventListener("click", () => {
    userScoreAdd.innerText = userScore = 0
    compScoreAdd.innerText = compScore = 0
    msg.innerText = "play your move"
    msg.style.background = "#000"
})