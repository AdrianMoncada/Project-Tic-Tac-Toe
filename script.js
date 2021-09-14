(function  () {
  // CACHE DOM
  const tiles = Array.from(document.querySelectorAll('.tile'));
  
  // SETTING THE BOARD
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

  // ADDING EVENT TO THE TILES
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
      console.log(currentPlayer)
    }
  }

  // Checking if tiles are occupy or not
  const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }

    return true;
};

  // UPDATING THE STRING BOARD WITH THE CORRESPONDENT CURRENT PLAYER
const updateBoard =  (index) => {
  board[index] = currentPlayer;
  console.log(board)
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
          console.log("there's a winner!")
          break;
      }
  }};


})();


