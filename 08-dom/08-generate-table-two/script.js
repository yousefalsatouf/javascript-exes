/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");
    let tr = "";
    for (let n = 1; n <= 10; n++) {
        tr += "<tr><td>" + n * n + "</td></tr>";
        //console.log(n * n);
    }
    target.innerHTML = "<table><tr><th>Multiplication</th></tr>" + tr + "</table>"


})();