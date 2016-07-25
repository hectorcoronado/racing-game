console.log("app.js loaded");

$(document).on('ready', function() {

  var $redPlayer = $('.redPlayer'),
    $bluePlayer = $('.bluePlayer'),
    $popUp = $('.pop-up'),
    redKeycode,
    blueKeycode,
    redLetter,
    blueLetter;

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

  redRandomLetter();
  blueRandomLetter();

  $(window).keyup(function() {
    if (event.which === redKeycode) {
      var redPlayerPosition = parseInt($redPlayer.css('left'));
      if (redPlayerPosition < 960) {
        $redPlayer.animate({
          'left': '+=20'
        }, 50);
        $redPlayer.empty();
        redRandomLetter();
      } else {
        $popUp.show();
      }
    }
  });

  $(window).keyup(function() {
    if (event.which === blueKeycode) {
      var bluePlayerPosition = parseInt($bluePlayer.css('left'));
      if (bluePlayerPosition < 960) {
        $bluePlayer.animate({
          'left': '+=20'
        }, 50);
        $bluePlayer.empty();
        blueRandomLetter();
      } else {
        $popUp.show();
      }
    }
  });

});
