/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
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
        let value = document.getElementById("number").value;

        var f = [];

        function factorial(n) {
            if (n == 0 || n == 1)
                return 1;

            if (f[n] > 0)
                return f[n];

            return f[n] = factorial(n - 1) * n;
        }
        let result = factorial(parseInt(value));

        alert(result);
    });
})();