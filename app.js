console.log("app.js loaded");

$(document).on('ready', function() {

  var $redPlayer = $('.redPlayer'),
    $bluePlayer = $('.bluePlayer'),
    $popUp = $('.pop-up'),
    keycode,
    letter;

  function redRandomLetter() {
    var num = Math.floor(Math.random() * 4) + 1;
    if (num === 1) {
      letter = 'A';
      keycode = 65;
    } else if (num === 2) {
      letter = 'S';
      keycode = 83;
    } else if (num === 3) {
      letter = 'D';
      keycode = 68;
    } else if (num === 4) {
      letter = 'F';
      keycode = 70;
    }
    $redPlayer.append('<p>' + letter + '<p>');
  }

  redRandomLetter();

  $(window).keyup(function() {
    if (event.which === keycode) {
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
    if (event.which === 76) {
      var bluePlayerPosition = parseInt($bluePlayer.css('left'));
      if (bluePlayerPosition < 960) {
        $bluePlayer.animate({
          'left': '+=20'
        }, 50);
      } else {
        $popUp.show();
      }
    }
  });




  function blueRandomLetter() {
    var letter;
    var keycode;
    if (randomNumber() === 1) {
      letter = 'J';
      keycode = 74;
    } else if (randomNumber() === 2) {
      letter = 'K';
      keycode = 75;
    } else if (randomNumber() === 3) {
      letter = 'L';
      keycode = 76;
    } else if (randomNumber() === 4) {
      letter = ';';
      keycode = 186;
    }
    return {
      letter: letter,
      keycode: keycode
    };
  }

});
