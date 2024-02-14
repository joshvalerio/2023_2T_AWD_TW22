function animateBox(id) {
    var box = document.getElementById(id);
    box.classList.add('animate');
    setTimeout(function() {
        box.style.backgroundColor = "blue";
    }, 500);
}
