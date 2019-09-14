/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let nbers = Array(2, 4, 14, 10, 90, 23, 16);
        /*
            function sortEggsInNest(a, b) {
            if (a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            } else {
                return 0;
            }
            }
        */
        function sortEggsInNest(a, b) {
            return a > b ? 1 : b > a ? -1 : 0;
        }
        let range = nbers.sort(sortEggsInNest);
        document.getElementById("numbers").value = range;
    });
})();