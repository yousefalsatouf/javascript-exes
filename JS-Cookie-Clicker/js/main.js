let click = document.getElementById("click");
let output = document.getElementById("affichage");
let score = parseInt(output.textContent);
let multi = document.getElementById("multiplier");
let multiplicateur = 1;
let result = 0;
click.addEventListener("click", function() {
    if (multiplicateur == 1) {
        result = score++;
        output.innerHTML = result;
    } else {
        result += score + multiplicateur;
        output.innerHTML = result;
    }
});

multi.addEventListener("click", augmenterMultiplicateur);

function augmenterMultiplicateur() {
    multiplicateur++;
    return multiplicateur;
}