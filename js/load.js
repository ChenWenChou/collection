$(function () {
    // load 動畫
    $(window).ready(function () {

        setTimeout(function () {
            $('body').addClass('loaded');
            $('.loading').fadeOut(1000);
            AOS.init(
                {
                    once: true,

                }
            );
        }, 1000);

    });
})


// $(document).on('ready', function () {
//     $(document).trigger('aosstart');
// });