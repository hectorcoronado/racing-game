console.log ("app.js loaded");

$(document).on('ready', function() {

var $redPlayer = $('.redPlayer'),
    $bluePlayer = $('.bluePlayer'),
    $popUp = $('.pop-up');


  $(window).keyup (function () {
    if (event.which === 65) {
      var redPlayerPosition = parseInt( $redPlayer.css('left') );
      if (redPlayerPosition < 960) {
        $redPlayer.animate ( { 'left' : '+=20'}, 50);
      } else {
        $popUp.show();
      }
    }
  });


  $(window).keyup(function () {
    if (event.which === 76) {
      var bluePlayerPosition = parseInt( $bluePlayer.css('left') );
      if (bluePlayerPosition < 960) {
        $bluePlayer.animate ( { 'left' : '+=20'}, 50);
      } else {
        $popUp.show();
      }
    }
  });

});
