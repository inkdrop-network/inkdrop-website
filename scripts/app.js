$(document).ready(function () {
    $("a[href*=\\#]:not([href=\\#]):not('.carousel-control-prev'):not('.carousel-control-next')").on('click', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 'slow');
        e.preventDefault();
    });

    $('.nav-item').click(function () {
        $('.nav-item.active').removeClass("active");
        $(this).addClass("active");
    });
});