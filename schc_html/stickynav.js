window.onscroll = function() {stickyNav()};

//Get nav bar
var nav = document.getElementById("nav");

//Get offset position of nav from top
var sticky = nav.offsetTop;

//Add sticky class to navbar when it's time to scroll past it
function stickyNav() {
    if(window.pageYOffset>=sticky) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
}