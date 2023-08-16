
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});



window.onscroll = function() {fixNav()};

var navBar = document.getElementById("nav");
var fixed = nav.offsetTop;

function fixNav() {
    if (window.pageYOffset >= fixed) {
        nav.classList.add("fixed")
    } else {
        navBar.classList.remove("fixed")
    }
}

