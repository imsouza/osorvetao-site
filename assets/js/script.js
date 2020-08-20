/* Hamburger Menu */

$(document).ready(function () {
  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
});


/* Menu Card */

$(document).ready(function(){
  var zindex = 10;
  $("div.card").click(function(e){
    e.preventDefault();
    var isShowing = false;
    if ($(this).hasClass("show")) {
      isShowing = true
    }
    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");
      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");
      }
      zindex++;
    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");
      zindex++;
    }
  });
});


/* Return to Top Button */

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


/* Link */

$('.redirect').click(function(){
  window.open('https://www.sistemadelivery.com/ordering/?restaurant_uid=d20b6424-102c-43b6-9920-ec26799d40ff&_sp=b4a3c0b6-d245-4a8c-a068-e23bd5e57f37.1597945023147&site_url=fallback');
  return false;
})