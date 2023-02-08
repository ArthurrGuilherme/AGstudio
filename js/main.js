/*Pre-loand*/
function loading() {
    document.getElementsByClassName('load')[0].style.display = "none";
    document.getElementsByClassName('loandig')[0].style.display = "block";
}

/*Mapeamento*/ 
document.querySelector("#serviços").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#mapa_servisos");

    console.log("go to up");
});

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#contato").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#formulario");

    console.log("go to up");
});
document.querySelector("#seta").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#header");

    console.log("go to up");
});

/*Btn*/
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrolltop')
        scroll.classList.toggle('active', window.scrollY > 200)
})
window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".scrollbottom")
  scroll.classList.toggle("active", window.scrollY > 200)
})

