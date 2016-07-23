
console.log ("app.js loaded");


$(document).on('ready', function() {


  $(window).keyup (function () {
    if (event.which === 65) {
      var redPlayerPosition = parseInt( $('.redPlayer').css('left') );
      console.log ('Red player position is: ' + redPlayerPosition);
      $('.redPlayer').animate ( { 'left' : '+=20'}, 50);
    }
  });


  $(window).keyup(function () {
    if (event.which === 76) {
      var bluePlayerPosition = parseInt( $('.bluePlayer').css('left') );
      console.log ('Blue player position is: ' + bluePlayerPosition);
      $('.bluePlayer').animate ( { 'left' : '+=20'}, 50);
    }
  });

});


// if (bluePlayerMargin >= blueTrackWidth - 400) {
//   alert ('You win, big blue pixel!');
//   $('.pop-up').show(250);
// }

// }
