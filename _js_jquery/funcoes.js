$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform': 'translate(0, ' + wScroll / 2 + '%)'
    });

    $('.back-bird').cssRules({
        'transform': 'translate(0, ' + wScroll / 4 + '%)'
    });

    $('.fire-bird').cssRules({
        'transform': 'translate(0, ' + wScroll / 40 + '%)'
    });
});