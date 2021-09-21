// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true



// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const rollTwice = document.getElementById("rollBtnTwice")
const randomNumber = Math.floor(Math.random() * 6) + 1

function showResetButton() {
    rollBtn.style.display = "none"
    rollTwice.style.display = "none"
    resetBtn.style.display = "block"

}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {

        if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `Player 1 turn`
    }
    
    if (player1Score >= 20) {
        message.textContent = ` Player 1 Won 🥳
               `
        showResetButton()
    }  else if (player2Score >= 20) {
        message.innerHTML = `Player 2 Won 🎉`
              showResetButton()
    }
    player1Turn = !player1Turn
})

rollTwice.addEventListener("click", function(){
    const twice = (Math.floor(Math.random() * 6) + 1)*2
    const zero = 0
    const turn = (Math.floor(Math.random() * 2) + 1)
    // console.log(turn)
    if (player1Turn) {
        if(turn == 1){
        player1Score += twice 
        player1Dice.textContent = twice
    }
        if(turn == 2){
        player1Score += zero 
        player1Dice.textContent = zero
    }
       player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        if(turn == 1){
        player2Score += twice
        player2Dice.textContent = twice
        }

        if(turn == 2){
            player2Score += zero
            player2Dice.textContent = zero
        }

        player2Scoreboard.textContent = player2Score
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `Player 1 turn`
    }
    
    if (player1Score >= 20) {
        message.textContent = ` Player 1 Won 🥳
               `
        showResetButton()
    }  else if (player2Score >= 20) {
        message.innerHTML = `Player 2 Won 🎉`
              showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    rollTwice.style.display= "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
