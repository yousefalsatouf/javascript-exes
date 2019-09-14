/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let msg = "",
            result = 0;

        for (let i = 1; i <= 21; i++) {
            result = i * i;
            msg = msg + " " + i + " * " + i + " = " + result + "\n";
        }

        alert(msg);

    });
})();