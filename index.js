console.log("OHiYO")
function btnaction() {
    var menu = document.getElementById("menu-btn");
    var nav = document.getElementById("nav");
    // menu.classList.toggle("hide");
    nav.classList.toggle("show");
    var side_nav = document.getElementById("side-nav");
    side_nav.classList.remove("show");
}
function linkaction() {
    var side_nav = document.getElementById("side-nav");
    side_nav.classList.toggle("show");
}