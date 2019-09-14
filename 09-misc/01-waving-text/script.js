/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let wave = document.getElementById("target");
    wave.innerHTML = "";
    let txt = "this text is waving like a sea's waves!!";

    for (let x in txt) {
        span = document.createElement("span");
        wave.appendChild(span);
        span.innerHTML = txt[x];
    }
})();