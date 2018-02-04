var Game = require("../js/game");

describe("The game", function() {

  var game = new Game({player1: "paper"});

  it("should return a random number when generateRandomNumber is called", function() {
    var num = game.generateRandomNumber();
    var type = typeof(num);
    expect(type).toBe('number');
  });

  it("should map the random number to the relevant hand", function() {
    var handsArray = game.handsArray;
    expect(handsArray[0]).toBe('paper');
    expect(handsArray[1]).toBe('rock');
    expect(handsArray[2]).toBe('scissors');
  });

  it("should format the result", function() {
    game.player2 = "rock";
    var gameChoices = {
      player1: game.player1,
      player2: game.player2
    }

    var gameResult = game.formatResult(game.calculateWinner(gameChoices));

    expect(gameResult).toMatch("Winner is:");
    expect(gameResult).toMatch("Player 1 played: paper");
    expect(gameResult).toMatch("Player 2 played: rock");
  });

  it("should show that if Player 1 chooses paper and Player 2 chooses rock, Player 1 wins", function() {
    var gameChoices = {
      player1: "paper",
      player2: "rock"
    }
    var gameResult = game.calculateWinner(gameChoices);
    expect(gameResult).toBe('Player 1');
  });

  it("should show that if Player 1 chooses paper and Player 2 chooses scissors, Player 2 wins", function() {
    var gameChoices = {
      player1: "paper",
      player2: "scissors"
    }
    var gameResult = game.calculateWinner(gameChoices);
    expect(gameResult).toBe('Player 2');
  });

  it("should show that if Player 1 chooses scissors and Player 2 chooses paper, Player 1 wins", function() {
    var gameChoices = {
      player1: "scissors",
      player2: "paper"
    }
    var gameResult = game.calculateWinner(gameChoices);
    expect(gameResult).toBe('Player 1');
  });

  it("should show that if Player 1 chooses scissors and Player 2 chooses rock, Player 2 wins", function() {
    var gameChoices = {
      player1: "scissors",
      player2: "rock"
    }
    var gameResult = game.calculateWinner(gameChoices);
    expect(gameResult).toBe('Player 2');
  });
  it("should show that if Player 1 chooses rock and Player 2 chooses paper, Player 2 wins", function() {
    var gameChoices = {
      player1: "rock",
      player2: "paper"
    }
    var gameResult = game.calculateWinner(gameChoices);
    expect(gameResult).toBe('Player 2');
  });

 it("should show that if Player 1 chooses rock and Player 2 chooses scissors, Player 1 wins", function() {
    var gameChoices = {
      player1: "rock",
      player2: "scissors"
    }
    var gameResult = game.calculateWinner(gameChoices);
    expect(gameResult).toBe('Player 1');
  });

  it("should show that the same hand results in a draw", function() {
    var gameChoices = {
      player1: "rock",
      player2: "rock"
    }
    var gameResult = game.calculateWinner(gameChoices);
    expect(gameResult).toBe('It\'s a draw');
  });
});
