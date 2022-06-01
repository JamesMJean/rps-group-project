document.querySelector('#rockButton').addEventListener('click', rock)
document.querySelector('#paperButton').addEventListener('click', paper)
document.querySelector('#scissorsButton').addEventListener('click', scissors)
document.querySelector('#resetScore').addEventListener('click', resetScore)

document.querySelector("#playerScore").textContent = 0
document.querySelector("#computerScore").textContent = 0

const playerChoiceImg = document.querySelector('#playerChoice')
let playerScore = 0
let computerScore = 0

function rock(){
  const userName = 'rock'
  playerChoiceImg.src = "./assets/rock.jpg"
  makeReq(userName)
}

function paper(){
  const userName = 'paper'
  playerChoiceImg.src = "./assets/paper.jpg"
  makeReq(userName)
}

function scissors(){
  const userName = 'scissors'
  playerChoiceImg.src = "./assets/scissors.jpg"
  makeReq(userName)
}

function resetScore(){
  console.log('Reset score function called')
  playerScore = 0
  computerScore = 0
  document.querySelector("#playerScore").textContent = 0
  document.querySelector("#computerScore").textContent = 0
}

async function makeReq(userName){
  
  const computerChoiceImg = document.querySelector('#computerChoice')
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()
  document.querySelector("#winner").textContent = data.winner
  switch (data.winner) {
    case 'Player': 
      playerScore++
      break;
    case 'Computer':
      computerScore++
      break;
    default:
      break;
  }
  document.querySelector("#playerScore").textContent = playerScore
  document.querySelector("#computerScore").textContent = computerScore
  switch (data.result) {
    case 'rock':
      document.querySelector('#computerChoice').src = "./assets/rock.jpg"
      break;
    case 'paper':
      computerChoiceImg.src = "./assets/paper.jpg"
      break;
    case 'scissors':
      computerChoiceImg.src = "./assets/scissors.jpg"
      break;
  }

}