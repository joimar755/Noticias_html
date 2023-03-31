$(".menu-toggle-btn").click(function (e) { 
   $(this).toggleClass("fa-times");
   $(".navigation-menu").toggleClass("active");
});
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
//Acordeon
let abrir = document.getElementById("show")
abrir.addEventListener("click", function() {
    let element = document.getElementById('to-show');
    if (element.className === 'hide') {
      element.className = 'show';
    } else {
      element.className = 'hide';
    }
})