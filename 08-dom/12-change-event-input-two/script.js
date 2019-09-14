/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let nbre = document.getElementById("pass-one");
    let indicator = document.getElementById("validity");
    let rule = new RegExp("^(?=.*?\\d.*\\d)[a-zA-Z0-9]{8,}$");
    //console.log(nbre.value);

    nbre.addEventListener("input", function() {
        if (rule.test(nbre.value))
            indicator.innerHTML = "OK";
    });
})();