$(function () {

    AOS.init(
        {
            easing: 'linear',
            once: true,
            duration: 1000,
            anchorPlacement: 'top-bottom',
        }
    );
    // 偵測 螢幕長度
    onElementHeightChange(document.body, function () {
        AOS.refresh();
    });


    // 滾輪 smooth
    const lenis = new Lenis();
    lenis.on('scroll', (e) => {

    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  
    // back to the top
    document.querySelectorAll('#back-to-top').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            lenis.scrollTo(0, { duration: 0, });
        });
    });

    //錨點    
    document.querySelectorAll('.scroll-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            lenis.scrollTo(this.getAttribute('href'), { offset: 0, duration: 3, });
        });
    }); 
    // 收合選單
    $('.scroll-link').click(function () {
        $('#vivonavbar').collapse('hide');
    });

    $(document).on('click', function (event) {
        var target = $(event.target);
        if (!target.closest('.navbar').length) {
            $('#vivonavbar').collapse('hide');
        }
    });
    $('#vivonavbar').on('show.bs.collapse', function () {
        $("#vivonavbar .navbar-nav").addClass("animate__animated animate__fadeIn animate__delay-1s")
    });

    $('#vivonavbar').on('hide.bs.collapse', function () {
        $("#vivonavbar .navbar-nav").removeClass("animate__animated animate__fadeIn animate__delay-1s")
    });
    $('#fbShareModal').on('show.bs.modal', function (e) {
        $(".share-info").addClass("animate__animated animate__fadeIn animate__delay-1s")
    });
    $('#fbShareModal').on('hide.bs.modal', function (e) {
        $(".share-info").removeClass("animate__animated animate__fadeIn animate__delay-1s")
    });


    // 神攝手示範 輪播
    const swiper = new Swiper('.photoEx-swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        speed: 1000,
        autoplay: false,
        // 禁用滑鼠拖曳
        allowTouchMove: false,
    });

    const swipe2 = new Swiper('.photographer-swiper', {
        // Optional parameters
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: false,
        speed: 1000,
        effect: 'coverflow',
        centeredSlides: true,
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
        },
    });

    const swiper3 = new Swiper('.photoUpload-swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        speed: 1000,
        autoplay: false,
    });

    const swiper4 = new Swiper('.modal-swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        speed: 1000,
        autoplay: false,
    });
    

   

});

// 偵測 螢幕長度
function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;

    (function run() {
        newHeight = elm.clientHeight;
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
            clearTimeout(elm.onElementHeightChangeTimer);
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}
