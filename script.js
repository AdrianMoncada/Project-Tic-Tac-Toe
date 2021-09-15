(function  () {
  // CACHE DOM
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const reset = document.getElementById('reset')
  const display = document.querySelector(".display")
  const displayPlayerName = document.querySelector(".display-player")
  const winnerDisplay = document.getElementById("winnerDisplay")

  
  // SETTING THE BOARD, PLAYERS, GAME STATE AND WINNING CONDITIONS
 let board = ['', '', '', '', '', '', '', '', ''];
 let currentPlayer = 'X'
 let isGameActive = true;
 const winningConditions =[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
  // ADDING EVENT TO THE TILES & BUTTONS
  reset.addEventListener('click', () => resetGame())
  tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

  // SETTING THE USER ACTION WHEN TILES ARE CLICKED
  const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation()
      changePlayer();
      displayPlayer();
    }
  }

  // CHEKING IF TILES ARE OCCUPY OR NOT
  const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }

    return true;
};

  // UPDATING THE STRING BOARD WITH THE CORRESPONDENT CURRENT PLAYER
const updateBoard =  (index) => {
  board[index] = currentPlayer;
}

  // CHANGING PLAYERS
const changePlayer = () => {
currentPlayer === 'X'?currentPlayer = 'O':currentPlayer = 'X'
}

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === '' || b === '' || c === '') {
          continue;
      }
      if (a === b && b === c) {
          roundWon = true;
          break;
      }
  }

  if(roundWon) {
    currentPlayer === 'X'? displayWinner('X'): displayWinner('Y')
    isGameActive = false
  }

  if (!board.includes(''))
  console.log("It's a tie!");
};


function resetGame() {
  board = ['', '', '', '', '', '', '', '', '']
  isGameActive = true;
  // announcer.classList.add('hide');
  if(currentPlayer = 'O') {
    currentPlayer = 'X'
  }

  tiles.forEach( tile => {
    tile.innerText = ''
    tile.classList.remove('playerX')
    tile.classList.remove('playerO')

  displayPlayerName.innerText = currentPlayer
  winnerDisplay.style.display = 'none'
  })
}

function displayWinner() {
  winnerDisplay.style.display = 'block'
  winnerDisplay.innerText = currentPlayer + " wins!"

  if (currentPlayer === 'X') {
    winnerDisplay.style.color = '#28d3dd'
  } else {
    winnerDisplay.style.color = '#fbcf28'
  }
}

function displayPlayer() {
  displayPlayerName.innerText = currentPlayer

}


})();


