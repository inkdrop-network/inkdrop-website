$(document).ready(function () {
    $("a[href*=\\#]:not([href=\\#]):not('.carousel-control-prev'):not('.carousel-control-next'):not('.card-title')").on('click', function (e) {
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

    $('.whitepaper-link').click(function (e) {
        // gtag('event', <action>, { 'event_category': <category>, 'event_label': <label>, 'value': <value>});
        gtag('event', 'download', {
            'event_category': 'whitepaper',
            'event_label': 'onpage',
            'value': 1
        });
    });
});
