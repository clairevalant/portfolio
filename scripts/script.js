// add scripts

const myApp = {};

// add smoothScroll
myApp.smoothScroll = function () {
    $("nav a").smoothScroll({});
}

myApp.nav = () => {
    $(".menu").on("click", function() {
        $(this).toggleClass("turn");
        $("nav").toggleClass("open");
    })
}

myApp.init = () => {
    myApp.smoothScroll();
    myApp.nav();
}

// document ready
$(function () {
    myApp.init();
});