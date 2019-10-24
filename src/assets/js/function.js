var path = document.querySelector('.blood-line');
var pathLength = path.getTotalLength();

var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);


var drawLength = pathLength / height;
var windowHeightsvg = (window.innerHeight - 200) * drawLength;
var scrollTopReload = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

var scrollPercentageReload = (scrollTopReload / (height - window.innerHeight)) * pathLength;

console.log(height);
console.log(scrollTopReload)
console.log(scrollPercentageReload);

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength;

// Offset the dashes so the it appears hidden entirely

setTimeout(function () {
    path.style.strokeDashoffset = pathLength - scrollPercentageReload;
}, 500);






// When the page scrolls...
window.addEventListener("scroll", function (e) {

    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;


    var scrollPercentage = (scrollTop + window.innerHeight) / height;

    // Draw in reverse
    path.style.strokeDashoffset = ((pathLength - windowHeightsvg) - (scrollTop * drawLength));

    if (scrollPercentage >= 0.992) {
        path.style.strokeDashoffset = 0;
    }

});