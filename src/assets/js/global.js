var path = document.querySelector('.blood-line');
var pathLength = path.getTotalLength();

var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);


var drawLength = pathLength / height;
var windowHeightsvg = (window.innerHeight) * drawLength;
var scrollTopReload = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
var scrollPercentageReload = (scrollTopReload + window.innerHeight) / height;

var alreadyscrolled = pathLength - ((scrollTopReload + (windowHeightsvg / 2)) * drawLength);

console.log(scrollPercentageReload);

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength;

// Offset the dashes so the it appears hidden entirely
setTimeout(function () {
    path.style.strokeDashoffset = alreadyscrolled;

    if (scrollPercentageReload >= 0.995) {
        path.style.strokeDashoffset = 0;
    }

}, 2000);



// When the page scrolls...
window.addEventListener("scroll", function (e) {

    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    var scrollPercentage = (scrollTop + window.innerHeight) / height;



    // Draw in reverse
    path.style.strokeDashoffset = pathLength - ((scrollTop + (windowHeightsvg / 2)) * drawLength);


    //((pathLength - (windowHeightsvg / 2) - (scrollTop * drawLength)));

    if (scrollPercentage >= 0.995) {
        path.style.strokeDashoffset = 0;
    }

});



AOS.init({
    offset: 300, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 1200,
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


var scrollBottom = $('.section1').scrollTop() + $('.section1').innerHeight();

var scrolling;



$(document).ready(function () {

    $(window).scroll(function () {

        $('.section1').css("opacity", 0 + ($(window).scrollTop() / $('.section1').innerHeight()));


        var scrollBottom = $('.section1').scrollTop() + $('.section1').innerHeight();
        var scrolling = $(window).scrollTop();

        console.log(scrollBottom);

        console.log(scrolling);

        if (scrolling > scrollBottom) {
            $('.fade-out-element').css("opacity", 1 -
                ($(window).scrollTop() - $('.section1').innerHeight()) / 600);

            // $('.section1').css("transform", "translate(0, -20px)");
        }



        if (scrolling > ($('.section1').innerHeight() * 1)) {
            $('.section2.fade-out-element').css("opacity", 0 + (($(window).scrollTop() / 2) / ($('.section2').innerHeight())));
        }


        if (scrolling > ($('.section1').scrollTop() + ($('.section1').innerHeight() * 2))) {
            $('.section2.fade-out-element').css("opacity", 1 -
                ($(window).scrollTop() - ($('.section2').innerHeight() * 2)) / 600);

            // $('.section1').css("transform", "translate(0, -20px)");
        }


        if (scrolling > ($('.section1').innerHeight() * 2)) {
            $('.section3.fade-out-element').css("opacity", 0 + (($(window).scrollTop() / 3) / ($('.section2').innerHeight())));
        }


        if (scrolling > ($('.section1').scrollTop() + ($('.section1').innerHeight() * 3))) {
            $('.section3.fade-out-element').css("opacity", 1 -
                ($(window).scrollTop() - ($('.section2').innerHeight() * 3)) / 600);

            // $('.section1').css("transform", "translate(0, -20px)");
        }

    })
})