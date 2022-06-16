var figs = document.getElementsByTagName("figure");

window.addEventListener("load", () => {
    for (let fig of figs){
        fig.className += "one-third";
    }
    document.getElementsByTagName("figcaption")[0].tabIndex = "0";      
});

var footer = document.getElementsByTagName("footer");

footer[0].addEventListener("click", () => {
    footer[0].style.display = "none";
});


figs[4].addEventListener("dblclick", () => {
    figs[4].style.opacity = 0;
});


var fig_caps = document.getElementsByTagName("figcaption");
var orig = fig_caps[0].style.fontFamily;

fig_caps[0].addEventListener('mouseover', () => {
    fig_caps[0].style.fontFamily = 'cursive';
});

fig_caps[0].addEventListener('mouseout', () => {
    fig_caps[0].style.fontFamily = orig;
});

fig_caps[0].addEventListener('focusin', () => {
    fig_caps[0].style.fontFamily = 'cursive';
});

fig_caps[0].addEventListener('focusout', () => {
    fig_caps[0].style.fontFamily = orig;
});