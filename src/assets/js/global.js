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



// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength;

// Offset the dashes so the it appears hidden entirely
setTimeout(function () {
    path.style.strokeDashoffset = alreadyscrolled;

    if (scrollPercentageReload >= 0.995) {
        path.style.strokeDashoffset = 0;
    }

}, 100);



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