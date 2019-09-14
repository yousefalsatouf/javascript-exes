/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let red = document.getElementById("red");

    red.addEventListener("click", function() {
        document.body.style.background = "red";
    });

    let green = document.getElementById("green");

    green.addEventListener("click", function() {
        document.body.style.background = "green";
    });

    let yellow = document.getElementById("yellow");

    yellow.addEventListener("click", function() {
        document.body.style.background = "yellow";
    });

    let blue = document.getElementById("blue");

    blue.addEventListener("click", function() {
        document.body.style.background = "blue";
    });

})();