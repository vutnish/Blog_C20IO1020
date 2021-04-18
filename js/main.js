let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function () {
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})


// with masonry
new Masonry("#posts .grid", {
    itemSelector: '.grid-item',
    gutter: 20
});

var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
function register() {
    x.style.left = '-400px'
    y.style.left = '50px'
    z.style.left = '110px'
}
function login() {
    x.style.left = '50px'
    y.style.left = '450px'
    z.style.left = '0px'
}




var modal = document.getElementById('login-form');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
