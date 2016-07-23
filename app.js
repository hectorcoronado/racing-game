
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
      console.log ("Ok, we're listening for L");

      //How far blue needs to go
      var blueTrackWidth = ( $('#blueTrack').width() );
      console.log ("Blue track width: " + blueTrackWidth);

      //To determine red position's value
      var bluePlayerMargin = ( parseInt( $('.bluePlayer').css('left') ) );
      console.log ("Blue is currently at: " + bluePlayerMargin);

      //Possible solution would be to set winning condition to
      //'position', not to ''

      $('.bluePlayer').animate ( { 'left' : '+=75'}, 'linear');

      if (bluePlayerMargin >= blueTrackWidth - 400) {
        alert ('You win, big blue pixel!');
        $('.pop-up').show(250);
      }

    }
  });

});

// extracted logic from redPlayer:

//   //To determine how far red needs to go
//   var redTrackWidth = ( $('#redTrack').width() );
//   console.log ("Red track width is: " + redTrackWidth);
//
//   //To determine red position's value
//   var redPlayerMargin = ( parseInt( $('.redPlayer').css('left') ) );
//   console.log ("Red is currently at: " + redPlayerMargin);
//
//
//   $('.redPlayer').animate ( { 'left' : '+=75'}, 'linear');
//
//   if (redPlayerMargin >= redTrackWidth - 400) {
//     alert('You win, big red pixel!');
//     $('.pop-up').show(250);
//   }
// }
