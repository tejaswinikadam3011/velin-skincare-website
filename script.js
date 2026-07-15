const revealElements = document.querySelectorAll(
    '.section-heading, .eyebrow, .value-card, .testimonial-card, .ingredient-card'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once, not every scroll
      }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));

window.addEventListener("load",function(){

    setTimeout(function(){

        document.getElementById("loader").style.opacity="0";

        setTimeout(function(){

            document.getElementById("loader").style.display="none";
            document.getElementById("content").style.display="block";

        },500);

    },1800);

});

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";
        document.getElementById("content").classList.add("show");

    },1800);

});