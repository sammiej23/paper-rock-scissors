function startGame(playerType) {
  if (playerType == 'human') {
    var radEls = document.forms[0].elements['hand'],
    humanChoice,
    game,
    result;

    for (var i = 0; i < radEls.length; i++) {
      if (radEls[i].checked) {
        humanChoice = radEls[i].value;
      }
    }
    game = new Game({player1: humanChoice});
  } else {
    game = new Game();
  }
  result = game.play();
  document.getElementById("result").innerHTML = result;
  return false;
}
