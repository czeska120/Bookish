window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("search").classList.add("visible");
    } else {
    document.getElementById("navbar").style.top = "-150px";
    document.getElementById("search").classList.remove("visible");
    }
}