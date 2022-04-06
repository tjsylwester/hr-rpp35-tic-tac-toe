var boardGame = function() {
  this.boardState = [['blank', 'blank', 'blank'],
                     ['blank', 'blank', 'blank'],
                     ['blank', 'blank', 'blank']];
  this.currentTurn = 'X';
  this.gameInProgress = true;
}

boardGame.prototype.checkVictory = function() {
  if  ((this.boardState[0][0] !== 'blank' && this.boardState[0][0] === this.boardState[0][1] && this.boardState[0][0] === this.boardState[0][2]) ||
       (this.boardState[1][0] !== 'blank' && this.boardState[1][0] === this.boardState[1][1] && this.boardState[1][0] === this.boardState[1][2]) ||
       (this.boardState[2][0] !== 'blank' && this.boardState[2][0] === this.boardState[2][1] && this.boardState[2][0] === this.boardState[2][2]) ||
       (this.boardState[0][0] !== 'blank' && this.boardState[0][0] === this.boardState[1][0] && this.boardState[0][0] === this.boardState[2][0]) ||
       (this.boardState[0][1] !== 'blank' && this.boardState[0][1] === this.boardState[1][1] && this.boardState[0][1] === this.boardState[2][1]) ||
       (this.boardState[0][2] !== 'blank' && this.boardState[0][2] === this.boardState[1][2] && this.boardState[0][2] === this.boardState[2][2]) ||
       (this.boardState[0][0] !== 'blank' && this.boardState[0][0] === this.boardState[1][1] && this.boardState[0][0] === this.boardState[2][2]) ||
       (this.boardState[0][2] !== 'blank' && this.boardState[0][2] === this.boardState[1][1] && this.boardState[0][2] === this.boardState[2][0])) {
    console.log(`A WINNER IS ${this.currentTurn}`);
    this.gameInProgress = false;
  }
}

var getCoordinates = function() {
  if (!newGame.gameInProgress) { return; }

  var id = this.id;
  var xPosition = parseInt(id[id.length - 2]);
  var yPosition = parseInt(id[id.length - 1]);

  if (newGame.boardState[xPosition][yPosition] === 'blank') {
    console.log(`You clicked row #${xPosition}, column #${yPosition}`);
    newGame.boardState[xPosition][yPosition] = newGame.currentTurn;
    this.src = `./images/${newGame.currentTurn}.bmp`

    newGame.checkVictory();

    newGame.currentTurn = (newGame.currentTurn === 'X') ? 'O' : 'X';
  } else {
    console.log('click an open space, my dude');
  }

}

var newGame = new boardGame();
var squares = document.getElementsByClassName('square');

for (var i = 0; i < squares.length; i++) {
  console.log(squares[i]);
  squares[i].addEventListener('click', getCoordinates);
}

var resetGame = function() {
  newGame = new boardGame();

  for (var i = 0; i < squares.length; i++) {
    squares[i].src = './images/blank.bmp'
  }
}

document.getElementById('reset').addEventListener('click', resetGame);