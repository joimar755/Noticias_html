$(".menu-toggle-btn").click(function (e) { 
   $(this).toggleClass("fa-times");
   $(".navigation-menu").toggleClass("active");
    
});
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})