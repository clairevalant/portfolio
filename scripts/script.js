// add scripts

const myApp = {};

// add smoothScroll
myApp.smoothScroll = function () {
    $("nav a").smoothScroll({});
}

myApp.nav = () => {
    $(".menu").on("click", () => {        
        $(".menu").toggleClass("turn");

        // different actions if nav is open or closed
        $(".siteNav").hasClass("open") ? myApp.closeNav() : myApp.openNav()
    })
}

// get halp with this
myApp.openNav = () => {
    $(".siteNav").toggleClass("open closed");
    $(".open").animate({
        width: "70vw"
    });
}

myApp.closeNav = () => {
    $(".siteNav").animate({
        width: "0vw",
    });
    // can i add a then?? no?
    $(".siteNav").toggleClass("open closed");
    $(".menu").toggleClass("turn");
}

myApp.init = () => {
    myApp.smoothScroll();
    myApp.nav();
}

// document ready
$(function () {
    myApp.init();
});