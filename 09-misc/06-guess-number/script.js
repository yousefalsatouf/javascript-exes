/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let randomNber = Math.floor(Math.random() * 100) + 1;
    let userNber = 0;
    let testNber = 0;

    do {
        userNber = parseInt(prompt("Give me a nomber"));

        testNber++;
        if (userNber > randomNber) console.log(userNber + " est plus grand que " + randomNber + " numbre d'essais est " + testNber);
        else if (userNber < randomNber) console.log(userNber + " est plus petit que " + randomNber + " numbre d'essais est " + testNber);
        else console.log("Felicitation: " + userNber + " est Correct avec " + randomNber + " numbre d'essais est " + testNber);

    } while (userNber != randomNber);

})();