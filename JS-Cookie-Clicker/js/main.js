let affichage = document.getElementById("affichage");
let click = document.getElementById("click");
let score = 0;
let multiplier = document.getElementById("multiplier");
let multiplicateur = 1;
let autoclick = document.getElementById("autoclick");
let autoCounter;
let autobonus;
let counter = 0;
let bonus = document.getElementById("bonus");
let y = 30;

multiplier.disabled = true;
multiplier.style.backgroundColor = "red";
autoclick.disabled = true;
autoclick.style.backgroundColor = "red";
bonus.disabled = true;
bonus.style.backgroundColor = "red";

click.addEventListener("click", function() {
    score += multiplicateur;
    affichage.innerHTML = score;
    disableButton();
    disableAutoclick();
    disableBonus();
});

bonus.addEventListener("click", function() {
    let y = 30;
    score = score - 5000;
    let interval = setInterval(function() {
        score += (multiplicateur * 2);
        affichage.innerHTML = score;
        bonus.disabled = true;
        bonus.style.backgroundColor = "red";
        bonus.innerHTML = y;
        y--;
        if (y == -1) {
            clearInterval(interval);
            bonus.innerHTML = "Double / 5000 Pts";
            bonus.disabled = false;
            bonus.style.backgroundColor = "#b5def4";
        }
    }, 1000);

});

autoclick.addEventListener("click", function() {
    counter++;
    if (counter == 1) {
        autoclick.disabled = true;
        autoclick.style.backgroundColor = "red";
    }
    autoCounter = setInterval(() => {
        score += 1;
        affichage.innerHTML = score;
    }, 1000);
});

function disableAutoclick() {
    if (score >= 500) {
        autoclick.disabled = false;
        autoclick.style.backgroundColor = "#b5def4";
    } else {
        autoclick.disabled = true;
        autoclick.style.backgroundColor = "red";
    }
}

function disableBonus() {
    if (score >= 5000) {
        bonus.disabled = false;
        bonus.style.backgroundColor = "#b5def4";
    } else {
        bonus.disabled = true;
        bonus.style.backgroundColor = "red";
    }
}

function disableButton() {
    if (score < (50 * multiplicateur)) {
        multiplier.disabled = true;
        multiplier.style.backgroundColor = "red";
    } else {
        multiplier.disabled = false;
        multiplier.style.backgroundColor = "#b5def4";
    }
}

multiplier.addEventListener("click", function() {
    Multiplicateur();
    multiplier.innerHTML = multiplicateur + "/" + (50 * multiplicateur) + "pts";
    affichage.innerHTML = score;
    disableButton();
})

function Multiplicateur() {
    if (score >= (50 * multiplicateur)) {
        score -= (50 * multiplicateur);
        multiplicateur++;
    }
}

/***************************** */
/**************************** */

/*let btn = document.getElementById("click");
let affichage = document.getElementById("affichage");
let multi = document.getElementById("multiplier");
let score = 0;
let multiplicateur = 1;
let result = 0;
let callBack = "";
let price = 0;
let rest = 0;

if (result <= 100) {
    multi.disabled = true;
}

btn.addEventListener("click", function() {
    result += score + multiplicateur;
    if (result >= 100) {
        multi.disabled = false;
    }
    affichage.textContent = result;
});

multi.addEventListener("click", augmenterMultiplicateur);

function augmenterMultiplicateur() {
    multiplicateur++;
    price = 50 * multiplicateur;
    rest = result - price;
    if (rest < 0) {
        multi.disabled = true;
    } else if (rest < price) {
        multi.disabled = true;
        result = result - price;
    } else {
        result = result - price;
    }
    affichage.textContent = result;
    multi.textContent = "*" + multiplicateur + "/" + multiplicateur * 50;
    return multiplicateur;
}*/