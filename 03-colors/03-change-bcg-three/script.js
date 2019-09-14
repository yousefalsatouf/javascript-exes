/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let button = document.getElementById("run");

    button.addEventListener("click", function() {
        let lettsNbres, color;

        lettsNbres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        color = "#";

        for (let col = 0; col < 6; col++) {
            color = color + lettsNbres[Math.floor(Math.random() * 10)];
        }

        console.log(color);

        document.body.style.backgroundColor = color;

    });
})();