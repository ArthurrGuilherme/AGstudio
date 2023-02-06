/*Pre-loand*/
function loading() {
    document.getElementsByClassName('load')[0].style.display = "none";
    document.getElementsByClassName('loandig')[0].style.display = "block";
}

/*Mapeamento*/ 
document.querySelector("#sobre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#min");

    console.log("go to up");
});

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#habilidaes").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#idades");

    console.log("go to up");
});