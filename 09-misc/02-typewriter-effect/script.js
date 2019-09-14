/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let go = 0;
    let target = document.getElementById("target");
    let txt = "Machin writter is a machine with keys for producing alphabetical characters, numerals, and typographical symbols one at a time on paper inserted round a roller."
    let speed = Math.floor(Math.random() * 30) + 150;
    target.innerHTML = "";

    function typeWriter() {
        if (go < txt.length) {

            target.innerHTML += txt.charAt(go);
            go++;
            speed--;
            //console.log(go);
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
})();