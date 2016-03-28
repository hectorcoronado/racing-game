
console.log ("OK, Javascript is functioning.");


$(document).on('ready', function() {

  $(window).keyup (function () {
    if (event.which === 65) {
      console.log ("Ok, we're listening for A");

      //To determine how far red needs to go
      var redTrackWidth = ( $('#redTrack').width() );
      console.log ("Red track width is: " + redTrackWidth);

      //To determine red position's value
      var redPlayerMargin = ( parseInt( $('.redPlayer').css('left') ) );
      console.log ("Red is currently at: " + redPlayerMargin);


      $('.redPlayer').animate ( { 'left' : '+=75'}, 'linear');

      if (redPlayerMargin >= redTrackWidth - 400) {
        alert('You win, big red pixel!');
      }
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
      console.log ("Red is currently at: " + bluePlayerMargin);

      $('.bluePlayer').animate ( { 'left' : '+=75'}, 'linear');

      if (bluePlayerMargin >= blueTrackWidth - 400) {
        alert ('You win, big blue pixel!');
      }

    }
  });

});
