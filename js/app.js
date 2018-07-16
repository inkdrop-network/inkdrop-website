// smooth scrolling effect
$(
  "a[href*=\\#]:not([href=\\#]):not('.carousel-control-prev'):not('.carousel-control-next'):not('.card-title')"
).on("click", function(e) {
  var href = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(href).offset().top
    },
    "slow"
  );
  e.preventDefault();
});

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll() {
  var startY = $(".navbar").height() * 2; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}

if ($(".navbar").length > 0) {
  $(window).on("scroll load resize", function() {
    checkScroll();
  });
}

// show navbar colored in case of a click on the icon button
$("#navbar-toggler-button").click(function() {
  $(".navbar").addClass("scrolled");
});

$("#tooltip-2").tooltip("show");
$("#tooltip-2.Timline-icon").css("background-color", "#85bd3e");

$("#tooltip-1-title")
  .mouseover(function() {
    $("#tooltip-1.Timline-icon").css("background-color", "#85bd3e");
    $("#tooltip-1").tooltip("show");

    $("#tooltip-2").tooltip("hide");
    $("#tooltip-2.Timline-icon").css("background-color", "#eeeeee");
  })
  .mouseleave(function() {
    $("#tooltip-1.Timline-icon").css("background-color", "#eeeeee");
    $("#tooltip-1").tooltip("hide");
  });

$("#tooltip-2-title")
  .mouseover(function() {
    $("#tooltip-2.Timline-icon").css("background-color", "#85bd3e");
    $("#tooltip-2").tooltip("show");
  })
  .mouseleave(function() {
    $("#tooltip-2.Timline-icon").css("background-color", "#eeeeee");
    $("#tooltip-2").tooltip("hide");
  });

$("#tooltip-3-title")
  .mouseover(function() {
    $("#tooltip-3.Timline-icon").css("background-color", "#85bd3e");
    $("#tooltip-3").tooltip("show");

    $("#tooltip-2").tooltip("hide");
    $("#tooltip-2.Timline-icon").css("background-color", "#eeeeee");
  })
  .mouseleave(function() {
    $("#tooltip-3.Timline-icon").css("background-color", "#eeeeee");
    $("#tooltip-3").tooltip("hide");
  });

$("#tooltip-4-title")
  .mouseover(function() {
    $("#tooltip-4.Timline-icon").css("background-color", "#85bd3e");
    $("#tooltip-4").tooltip("show");

    $("#tooltip-2").tooltip("hide");
    $("#tooltip-2.Timline-icon").css("background-color", "#eeeeee");
  })
  .mouseleave(function() {
    $("#tooltip-4.Timline-icon").css("background-color", "#eeeeee");
    $("#tooltip-4").tooltip("hide");
  });

$("#tooltip-5-title")
  .mouseover(function() {
    $("#tooltip-5.Timline-icon").css("background-color", "#85bd3e");
    $("#tooltip-5").tooltip("show");

    $("#tooltip-2").tooltip("hide");
    $("#tooltip-2.Timline-icon").css("background-color", "#eeeeee");
  })
  .mouseleave(function() {
    $("#tooltip-5.Timline-icon").css("background-color", "#eeeeee");
    $("#tooltip-5").tooltip("hide");
  });

$("#tooltip-6-title")
  .mouseover(function() {
    $("#tooltip-6.Timline-icon").css("background-color", "#85bd3e");
    $("#tooltip-6").tooltip("show");

    $("#tooltip-2").tooltip("hide");
    $("#tooltip-2.Timline-icon").css("background-color", "#eeeeee");
  })
  .mouseleave(function() {
    $("#tooltip-6.Timline-icon").css("background-color", "#eeeeee");
    $("#tooltip-6").tooltip("hide");
  });
