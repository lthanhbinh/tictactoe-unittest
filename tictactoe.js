function TicTacToe() {
  this.symbols = ['X', 'O', '','X', '','O', 'X', '', 'O'],
  this.turn = 0,
  this.turns = [0,0,0,0,0,0,0,0,0]; //[1,2,4,6,7,5,3,9,8]
}

TicTacToe.prototype.takeTurn = function(position) {
  this.turns[position - 1] = this.symbol();
  this.turn += 1;
};
TicTacToe.prototype.symbol = function() {
  return this.symbols[this.turn % 2];
};
TicTacToe.prototype.findWinner = function() {
  // Rows
  if (this.checkRow(0,1,2)) { return true; }
  else if (this.checkRow(3,4,5)) { return true; }
  else if (this.checkRow(6,7,8)) { return true; }
  // Diagonals
  else if (this.checkRow(0,4,8)) { return true; }
  else if (this.checkRow(2,4,6)) { return true; }
  // Columns
  else if (this.checkRow(0,3,6)) { return true; }
  else if (this.checkRow(1,4,7)) { return true; }
  else if (this.checkRow(2,5,8)) { return true; }
  else { return false; }
};
TicTacToe.prototype.checkRow = function(a,b,c) {
  console.log(this.turns[a] + ' ' + this.turns[b] + ' ' + this.turns[c]);
  return (this.turns[a] !== 0 && this.turns[a] == this.turns[b] && this.turns[b] === this.turns[c])
};
TicTacToe.prototype.start = function() {
  this.initialize();
};
TicTacToe.prototype.setTurns = function(newTurns) {
  this.turns = newTurns;
};
TicTacToe.prototype.initialize = function() {
  var _this = this;
  $("div.square").on("click", function() {
    _this.takeTurn($(this).attr("id"));

    $(this).text(_this.symbol());
    $(this).removeClass("clickable");
    $(this).off("click");

    if (_this.findWinner()) {
      alert(_this.symbol() + " Wins");
    }
  });
};

$(document).ready(function() {
  var game = new TicTacToe();
  game.start();
})
