// var path = document.querySelector('.blood-line');
// var pathLength = path.getTotalLength();

var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);


// var drawLength = pathLength / height;
// var windowHeightsvg = (window.innerHeight) * drawLength;
var scrollTopReload = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
var scrollPercentageReload = (scrollTopReload + window.innerHeight) / height;

// var alreadyscrolled = pathLength - ((scrollTopReload + (windowHeightsvg / 2)) * drawLength);

console.log(scrollPercentageReload);

// Make very long dashes (the length of the path itself)
// path.style.strokeDasharray = pathLength;

// Offset the dashes so the it appears hidden entirely
// setTimeout(function () {
//     path.style.strokeDashoffset = alreadyscrolled;

//     if (scrollPercentageReload >= 0.995) {
//         path.style.strokeDashoffset = 0;
//     }

// }, 2000);



// When the page scrolls...
// window.addEventListener("scroll", function (e) {

//     var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

//     var scrollPercentage = (scrollTop + window.innerHeight) / height;



//     // Draw in reverse
//     path.style.strokeDashoffset = pathLength - ((scrollTop + (windowHeightsvg / 2)) * drawLength);


//     //((pathLength - (windowHeightsvg / 2) - (scrollTop * drawLength)));

//     if (scrollPercentage >= 0.995) {
//         path.style.strokeDashoffset = 0;
//     }

// });



AOS.init({
    offset: 300, // offset (in px) from the original trigger point
    delay: 50, // values from 0 to 3000, with step 50ms
    duration: 900,
    mirror: true, // whether elements should animate out while scrolling past them
    once: false,
    easing: "ease",

});





var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


// Get Point on the Page
var imageChange1 = document.getElementById('image-change-1');
var imageChange2 = document.getElementById('image-change-2');
var backtonormal = document.getElementById('backtonormal');
var backtonormal2 = document.getElementById('backtonormal2');
var showlungs = document.getElementById('showlungs');
var leftchamber = document.getElementById('leftchamber');
// var fakediv = document.getElementById('fakediv');
var secondlastchange = document.getElementById('secondlastchange');
var lastone = document.getElementById('lastone');

var showsvg = document.getElementById('showsvg');
var hidesvg = document.getElementById('hidesvg');



// Get all Assets
var herz1 = document.getElementById('herz1');
var herz2 = document.getElementById('herz2');
var herz3 = document.getElementById('herz3');
var herz4 = document.getElementById('herz4');
var herz5 = document.getElementById('herz5');
var herz6 = document.getElementById('herz6');
var herz7 = document.getElementById('herz7');
var herz8 = document.getElementById('herz8');
var herz9 = document.getElementById('herz9');

var pfad1 = document.getElementById('pfad1');
var pfad2 = document.getElementById('pfad2');
var pfad3 = document.getElementById('pfad3');
var pfad4 = document.getElementById('pfad4');
// var pfad5 = document.getElementById('pfad5');
// var pfad6 = document.getElementById('pfad6');


var svgstart = document.getElementById('svgstart');
var svgstartpfad = document.getElementsByClassName('svg-pfad-start');


var lungs = document.getElementById('lungs');


var beschrieb1 = document.getElementById('beschrieb1');
var beschrieb2 = document.getElementById('beschrieb2');
var beschrieb3 = document.getElementById('beschrieb3');


window.addEventListener('scroll', function (event) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var scrollPercentage = (scrollTop + window.innerHeight) / height;

    console.log(scrollPercentage);
    // if (isInViewport(hidesvg)) {
    //     svgstart.style.opacity = '0';
    //     svgstart.classList.remove = 'pfad1';
    // }

    // if (isInViewport(showsvg)) {
    //     svgstart.style.display = 'block';
    //     svgstart.style.opacity = '1';
    //     svgstart.classList.add = 'pfad1';

    // }


    if (scrollPercentage > 0.20) {
        svgstart.style.display = 'block';
        svgstart.style.opacity = '1';



    } else {
        svgstart.style.opacity = '0';

    }


    if (isInViewport(imageChange1)) {
        herz2.style.opacity = 0;
        beschrieb1.style.opacity = 1;
        herz3.style.opacity = 0;
        herz4.style.opacity = 0;
        beschrieb2.style.opacity = 0;
        herz1.style.opacity = 1;
        pfad1.style.opacity = 1;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        // pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;
    }


    if (isInViewport(backtonormal)) {
        herz2.style.opacity = 1;
        beschrieb1.style.opacity = 0;
        herz3.style.opacity = 0;
        herz4.style.opacity = 0;
        beschrieb2.style.opacity = 0;
        pfad1.style.opacity = 1;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        // pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;

    }

    if (isInViewport(backtonormal2)) {
        pfad2.classList.add("pfad2-animation-back");
        pfad2.classList.remove("pfad2-animation");

        void pfad2.offsetWidth;

    }



    if (isInViewport(imageChange2)) {
        herz2.style.opacity = 0;
        beschrieb1.style.opacity = 0;
        herz3.style.opacity = 1;
        herz4.style.opacity = 1;
        beschrieb2.style.opacity = 1;
        lungs.style.opacity = 0;
        lungs.style.transform = "scale(0)";
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 1;
        pfad2.classList.add("pfad2-animation");
        pfad2.classList.remove("pfad2-animation-back");
        pfad4.classList.add("pfad4-animation-back");
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        // pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;
    }

    if (isInViewport(showlungs)) {
        lungs.style.opacity = 0.5;
        beschrieb2.style.opacity = 0;
        lungs.style.transform = "scale(1)";
        herz5.style.opacity = 0;
        herz6.style.opacity = 0;
        herz3.style.opacity = 1;
        herz4.style.opacity = 1;
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 1;
        pfad4.classList.add("pfad4-animation");
        pfad4.classList.remove("pfad4-animation-back");
        pfad3.classList.add("pfad3-animation-back");
        pfad2.classList.add("pfad2-animation");
        pfad2.classList.remove("pfad2-animation-back");
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 1;
        beschrieb3.style.opacity = 0;
        //  pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;
    }


    if (isInViewport(leftchamber)) {
        herz1.style.opacity = 0;
        herz2.style.opacity = 0;
        herz5.style.opacity = 1;
        herz6.style.opacity = 1;
        herz7.style.opacity = 0;
        herz8.style.opacity = 0;
        herz2.style.opacity = 0;
        herz9.style.opacity = 0;
        pfad4.classList.remove("pfad4-animation");
        pfad2.classList.remove("pfad2-animation");
        pfad4.classList.add("pfad4-animation-back");
        pfad2.classList.add("pfad2-animation-back");
        herz7.classList.remove("herzschlag");
        herz8.classList.remove("herzschlag");
        herz9.classList.remove("herzschlag");
        pfad3.classList.add("pfad3-animation");
        pfad3.classList.remove("pfad3-animation-back");
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 1;
        pfad4.style.opacity = 0;
        beschrieb3.style.opacity = 1;
        // pfad5.style.opacity = 0;
        //  pfad6.style.opacity = 0;
    }

    // if (isInViewport(fakediv)) {
    //     herz1.style.opacity = 0;
    //     herz2.style.opacity = 0;
    //     herz5.style.opacity = 0;
    //     herz6.style.opacity = 0;
    //     herz7.style.opacity = 1;
    //     herz8.style.opacity = 1;
    //     herz9.style.opacity = 0;
    //     herz7.classList.remove("herzschlag");
    //     herz8.classList.remove("herzschlag");
    //     herz9.classList.remove("herzschlag");

    // }

    if (isInViewport(secondlastchange)) {

        herz9.style.opacity = 1;
        herz7.style.opacity = 1;
        herz8.style.opacity = 1;
        herz1.style.opacity = 0;
        herz2.style.opacity = 0;
        herz3.style.opacity = 0;
        herz4.style.opacity = 0;
        herz5.style.opacity = 0;
        herz6.style.opacity = 0;

        pfad3.classList.remove("pfad3-animation");
        pfad3.classList.add("pfad3-animation-back");
        herz7.classList.add("herzschlag");
        herz8.classList.add("herzschlag");
        herz9.classList.add("herzschlag");

        pfad1.style.opacity = 0;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        beschrieb3.style.opacity = 0;
        //  pfad5.style.opacity = 1;
        //  pfad6.style.opacity = 1;

    }

    if (isInViewport(lastone)) {
        herz7.style.opacity = 0;
        herz8.style.opacity = 0;
        herz9.style.opacity = 0;
        herz1.style.opacity = 1;
        herz2.style.opacity = 1;
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        //   pfad5.style.opacity = 0;
        //   pfad6.style.opacity = 0;

    }



}, false);



window.addEventListener('load', function (event) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var scrollPercentage = (scrollTop + window.innerHeight) / height;


    // if (isInViewport(hidesvg)) {
    //     svgstart.style.opacity = '0';
    //     svgstart.classList.remove = 'pfad1';
    // }

    // if (isInViewport(showsvg)) {
    //     svgstart.style.display = 'block';
    //     svgstart.style.opacity = '1';
    //     svgstart.classList.add = 'pfad1';

    // }


    if (scrollPercentage > 0.17) {
        svgstart.style.display = 'block';
        svgstart.style.opacity = '1';



    } else {
        svgstart.style.opacity = '0';

    }


    if (isInViewport(imageChange1)) {
        herz2.style.opacity = 0;
        beschrieb1.style.opacity = 1;
        herz3.style.opacity = 0;
        herz4.style.opacity = 0;
        beschrieb2.style.opacity = 0;
        herz1.style.opacity = 1;
        pfad1.style.opacity = 1;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        // pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;
    }


    if (isInViewport(backtonormal)) {
        herz2.style.opacity = 1;
        beschrieb1.style.opacity = 0;
        herz3.style.opacity = 0;
        herz4.style.opacity = 0;
        beschrieb2.style.opacity = 0;
        pfad1.style.opacity = 1;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        // pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;

    }

    if (isInViewport(backtonormal2)) {
        pfad2.classList.add("pfad2-animation-back");
        pfad2.classList.remove("pfad2-animation");

        void pfad2.offsetWidth;

    }



    if (isInViewport(imageChange2)) {
        herz2.style.opacity = 0;
        beschrieb1.style.opacity = 0;
        herz3.style.opacity = 1;
        herz4.style.opacity = 1;
        beschrieb2.style.opacity = 1;
        lungs.style.opacity = 0;
        lungs.style.transform = "scale(0)";
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 1;
        pfad2.classList.add("pfad2-animation");
        pfad2.classList.remove("pfad2-animation-back");
        pfad4.classList.add("pfad4-animation-back");
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        // pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;
    }

    if (isInViewport(showlungs)) {
        lungs.style.opacity = 0.5;
        beschrieb2.style.opacity = 0;
        lungs.style.transform = "scale(1)";
        herz5.style.opacity = 0;
        herz6.style.opacity = 0;
        herz3.style.opacity = 1;
        herz4.style.opacity = 1;
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 1;
        pfad4.classList.add("pfad4-animation");
        pfad4.classList.remove("pfad4-animation-back");
        pfad3.classList.add("pfad3-animation-back");
        pfad2.classList.add("pfad2-animation");
        pfad2.classList.remove("pfad2-animation-back");
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 1;
        //  pfad5.style.opacity = 0;
        // pfad6.style.opacity = 0;
    }


    if (isInViewport(leftchamber)) {
        herz1.style.opacity = 0;
        herz2.style.opacity = 0;
        herz5.style.opacity = 1;
        herz6.style.opacity = 1;
        herz7.style.opacity = 0;
        herz8.style.opacity = 0;
        herz2.style.opacity = 0;
        herz9.style.opacity = 0;
        pfad4.classList.remove("pfad4-animation");
        pfad2.classList.remove("pfad2-animation");
        pfad4.classList.add("pfad4-animation-back");
        pfad2.classList.add("pfad2-animation-back");
        herz7.classList.remove("herzschlag");
        herz8.classList.remove("herzschlag");
        herz9.classList.remove("herzschlag");
        pfad3.classList.add("pfad3-animation");
        pfad3.classList.remove("pfad3-animation-back");
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 1;
        pfad4.style.opacity = 0;
        // pfad5.style.opacity = 0;
        //  pfad6.style.opacity = 0;
    }

    // if (isInViewport(fakediv)) {
    //     herz1.style.opacity = 0;
    //     herz2.style.opacity = 0;
    //     herz5.style.opacity = 0;
    //     herz6.style.opacity = 0;
    //     herz7.style.opacity = 1;
    //     herz8.style.opacity = 1;
    //     herz9.style.opacity = 0;
    //     herz7.classList.remove("herzschlag");
    //     herz8.classList.remove("herzschlag");
    //     herz9.classList.remove("herzschlag");

    // }

    if (isInViewport(secondlastchange)) {

        herz9.style.opacity = 1;
        herz7.style.opacity = 1;
        herz8.style.opacity = 1;
        herz1.style.opacity = 0;
        herz2.style.opacity = 0;
        herz3.style.opacity = 0;
        herz4.style.opacity = 0;
        herz5.style.opacity = 0;
        herz6.style.opacity = 0;

        pfad3.classList.remove("pfad3-animation");
        pfad3.classList.add("pfad3-animation-back");
        herz7.classList.add("herzschlag");
        herz8.classList.add("herzschlag");
        herz9.classList.add("herzschlag");

        pfad1.style.opacity = 0;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        //  pfad5.style.opacity = 1;
        //  pfad6.style.opacity = 1;

    }

    if (isInViewport(lastone)) {
        herz7.style.opacity = 0;
        herz8.style.opacity = 0;
        herz9.style.opacity = 0;
        herz1.style.opacity = 1;
        herz2.style.opacity = 1;
        pfad1.style.opacity = 0;
        pfad2.style.opacity = 0;
        pfad3.style.opacity = 0;
        pfad4.style.opacity = 0;
        //   pfad5.style.opacity = 0;
        //   pfad6.style.opacity = 0;

    }



}, false);















// var scrollBottom = $('.section1').scrollTop() + $('.section1').innerHeight();

// var scrolling;



// $(document).ready(function () {

//     $(window).scroll(function () {

//         $('.section1').css("opacity", 0 + ($(window).scrollTop() / $('.section1').innerHeight()));


//         var scrollBottom = $('.section1').scrollTop() + $('.section1').innerHeight();
//         var scrolling = $(window).scrollTop();

//         console.log(scrollBottom);

//         console.log(scrolling);

//         if (scrolling > scrollBottom) {
//             $('.fade-out-element-1').css("opacity", 1 -
//                 ($(window).scrollTop() - $('.section1').innerHeight()) / 600);

//             // $('.section1').css("transform", "translate(0, -20px)");
//         }






//         if (scrolling > ($('.section1').innerHeight() * 1)) {
//             $('.fade-out-element-2').css("opacity", 0 + (($(window).scrollTop() / 2) / ($('.section2').innerHeight())));
//         }


//         if (scrolling > ($('.section1').scrollTop() + ($('.section1').innerHeight() * 2))) {
//             $('.fade-out-element-2').css("opacity", 1 -
//                 ($(window).scrollTop() - ($('.section2').innerHeight() * 2)) / 600);


//             $('.fade-out-element-herz-1').css("opacity", 1 -
//                 ($(window).scrollTop() - ($('.section2').innerHeight() * 2)) / 600);

//             // $('.section1').css("transform", "translate(0, -20px)");
//         }


//         if (scrolling > ($('.section1').innerHeight() * 2)) {
//             $('.fade-out-element-3').css("opacity", 0 + (($(window).scrollTop() / 3) / ($('.section2').innerHeight())));
//         }


//         if (scrolling > ($('.section1').scrollTop() + ($('.section1').innerHeight() * 3))) {
//             $('.fade-out-element-3').css("opacity", 1 -
//                 ($(window).scrollTop() - ($('.section2').innerHeight() * 3)) / 600);

//             // $('.section1').css("transform", "translate(0, -20px)");
//         }

//     })
// })