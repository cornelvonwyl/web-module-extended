var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);



var scrollTopReload = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
var scrollPercentageReload = (scrollTopReload + window.innerHeight) / height;


console.log(scrollPercentageReload);


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
    }


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
    }



}, false);



window.addEventListener('load', function (event) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var scrollPercentage = (scrollTop + window.innerHeight) / height;

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
    }


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

    }



}, false);