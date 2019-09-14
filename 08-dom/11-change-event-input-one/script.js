/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let nbre = document.getElementById("pass-one");
    //console.log(nbre.value);

    nbre.addEventListener("input", function() {
        let size = nbre.value.length;
        //console.log(nbre.value);
        if (parseInt(size) <= 10)
            document.getElementById("counter").innerHTML = size + " /10";
        else
            nbre.disabled = true;
    });

})();