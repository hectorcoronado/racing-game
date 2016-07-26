console.log("app.js loaded");

$(document).on('ready', function() {

  var $redPlayer = $('.redPlayer'),
    $bluePlayer = $('.bluePlayer'),
    $redPlayerName = $('#redPlayerName'),
    $bluePlayerName = $('#bluePlayerName'),
    $popUp = $('.pop-up'),
    redKeycode,
    blueKeycode,
    redLetter,
    blueLetter,
    winnerName;

  function redRandomLetter() {
    var num = Math.floor(Math.random() * 4) + 1;
    if (num === 1) {
      redLetter = 'A';
      redKeycode = 65;
    } else if (num === 2) {
      redLetter = 'S';
      redKeycode = 83;
    } else if (num === 3) {
      redLetter = 'D';
      redKeycode = 68;
    } else if (num === 4) {
      redLetter = 'F';
      redKeycode = 70;
    }
    $redPlayer.append('<h6>' + redLetter + '</h6>');
  }

  function blueRandomLetter() {
    var num = Math.floor(Math.random() * 4) + 1;
    if (num === 1) {
      blueLetter = 'J';
      blueKeycode = 74;
    } else if (num === 2) {
      blueLetter = 'K';
      blueKeycode = 75;
    } else if (num === 3) {
      blueLetter = 'L';
      blueKeycode = 76;
    } else if (num === 4) {
      blueLetter = ';';
      blueKeycode = 186;
    }
    $bluePlayer.append('<h6>' + blueLetter + '</h6>');
  }

  $(window).keyup(function() {
    var redPlayerPosition = parseInt($redPlayer.css('left'));
    if (event.which === redKeycode) {
      if (redPlayerPosition < 960) {
        $redPlayer.animate({
          'left': '+=20'
        }, 50);
        $redPlayer.empty();
        redRandomLetter();
      } else {
        winnerName = player1Name;
        $('#winner-name').append(winnerName);
        winner();
      }
    }
  });

  $(window).keyup(function() {
    var bluePlayerPosition = parseInt($bluePlayer.css('left'));
    if (event.which === blueKeycode) {
      if (bluePlayerPosition < 960) {
        $bluePlayer.animate({
          'left': '+=20'
        }, 50);
        $bluePlayer.empty();
        blueRandomLetter();
      } else {
        winnerName = player2Name;
        $('#winner-name').append(winnerName);
        winner();
      }
    }
  });

  $('#namesForm').on('submit', function(event) {
    event.preventDefault();
    player1Name = $('#player1Name').val();
    player2Name = $('#player2Name').val();
    $redPlayerName.html(player1Name);
    $bluePlayerName.html(player2Name);
    $('#playerNamesModal').modal('toggle');
    redRandomLetter();
    blueRandomLetter();
  });

  $('#reset').on('click', function(event) {
    event.preventDefault();
    resetGame();
  });

  function resetGame() {
    $redPlayer.css({'left': '0'}).empty();
    $bluePlayer.css({'left': '0'}).empty();
    $redPlayerName.html("Player One");
    $bluePlayerName.html("Player Two");
    $popUp.fadeOut(1200);
  }

  function winner () {
    $redPlayer.empty();
    $bluePlayer.empty();
    redKeycode = false;
    blueKeycode = false;
    $popUp.fadeIn(1000);
  }


});
