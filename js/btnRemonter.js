let btnTop = document.getElementById("btnTop");

window.onscroll = function() {
    if (window.scrollY > 200) {
        btnTop.style.display = "block";
} else {
    btnTop.style.display = "none";
}
};

btnTop.onclick = function() {
    window.scrollTo({top: 0, behavior : "smooth"});
};