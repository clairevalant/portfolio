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
        $("nav").hasClass("open") ? myApp.closeNav() : myApp.openNav()
    })
}

// get halp with this
myApp.openNav = () => {
    $("nav").toggleClass("open closed");
    $(".open").animate({
        width: "70vw"
    });
}

myApp.closeNav = () => {
    $("nav").animate({
        width: "0vw",
    });
    // can i add a then?? no?
    $("nav").toggleClass("open closed");

    $(".menu").hasClass("turn") ? $(".menu").addClass("turn") : null
    
}

myApp.init = () => {
    myApp.smoothScroll();
    myApp.nav();
}

// document ready
$(function () {
    myApp.init();
});