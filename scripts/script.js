// add scripts

const myApp = {};

// add smoothScroll
myApp.smoothScroll = function () {
    $("header a").smoothScroll({});
}

myApp.nav = () => {
    const $nav = $("nav");
    const $navToggle = $(".navToggle");

    // fn to remove event listener from document: we only need it hwen the nav is open
    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener)        
    }
    // close nav if user clicks outside of nav or navToggle
    const outsideClickListener = (event) => {        
            if (!$(event.target).closest('nav').length && !$(event.target).closest('.navToggle').length){
                $nav.removeClass('open');
                $navToggle.removeClass('turn');
                removeClickListener();
            }
    };

    $navToggle.on('click', (event) => {
        if ($nav.hasClass('open')) {
            $nav.removeClass('open');
            $navToggle.removeClass('turn');
            removeClickListener();
        } else {
            $nav.addClass('open');
            $navToggle.addClass('turn');
            document.addEventListener('click', outsideClickListener)
        }
    });
    
};


myApp.init = () => {
    myApp.smoothScroll();
    myApp.nav();
}

// document ready
$(function () {
    myApp.init();
});