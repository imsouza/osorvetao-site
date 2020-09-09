$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
}),
  $(document).ready(function () {
    var s = 10;
    $("div.card").click(function (o) {
      o.preventDefault();
      var t = !1;
      $(this).hasClass("show") && (t = !0),
        $("div.cards").hasClass("showing")
          ? ($("div.card.show").removeClass("show"), t ? $("div.cards").removeClass("showing") : $(this).css({ zIndex: s }).addClass("show"), s++)
          : ($("div.cards").addClass("showing"), $(this).css({ zIndex: s }).addClass("show"), s++);
    });
  }),
  $(window).scroll(function () {
    $(this).scrollTop() >= 50 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200);
  }),
  $("#return-to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
  }),
  $(".redirect").click(function () {
    return window.open("https://www.gloriafood.com/ordering/restaurant/menu?restaurant_uid=ecc58229-5b04-4089-844d-d81561e1e31f&client_is_mobile=true&glfa_cid=656085509.1599496285&glfa_t=1599669676275"), !1;
  });
