
(function() {
  var Game = (function() {
    var Game = function (choices) {
      choices ? this.player1 = choices.player1 : this.player1 = this.generateRandomHand();
      this.player2;
    }

Game.prototype.handsArray = ['paper', 'rock', 'scissors'];
// Logic defined as array - first item wins over the second
Game.prototype.gameLogic = [['paper', 'rock'],
                            ['scissors', 'paper'],
                            ['rock', 'scissors']]

Game.prototype.generateRandomNumber = function() {
  var randomNumberBetween0and2 = Math.floor(Math.random() * 3);
  return randomNumberBetween0and2;
}

Game.prototype.generateRandomHand = function() {
  var rand = this.generateRandomNumber();
  return this.handsArray[rand];
};

Game.prototype.play = function() {
  var outcome, result;
  this.player2 = this.generateRandomHand();
  winner = this.calculateWinner({
    player1: this.player1,
    player2: this.player2
  });
  return this.formatResult(winner);
};

Game.prototype.formatResult = function(winner) {
  result = "Player 1 played: " + this.player1 + "<br/>";
  result += "Player 2 played: " + this.player2 + "<br/>";
  result += "Winner is: " + winner;
  return result;
};

Game.prototype.calculateWinner = function(gameChoices) {
  if (gameChoices.player1 == gameChoices.player2) {
    return "It's a draw"
  }

  for (var i=0; i<this.gameLogic.length; i++) {
      for (var j=0; j<this.gameLogic[i].length; i++) {
        if (this.gameLogic[i][j] == gameChoices.player1) {
          if (this.gameLogic[i][j+1] == gameChoices.player2) {
            return "Player 1";
          } else {
            return "Player 2";
          }
        }
      }
  }

};

return Game;
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Game;
} else {
  window.Game = Game;
}
  
})();
