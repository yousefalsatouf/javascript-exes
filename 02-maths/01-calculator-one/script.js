/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let option1 = 0,
    option2 = 0,
    result = 0;

option1 = document.getElementById("op-one");
option2 = document.getElementById("op-two");
(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        result = parseInt(option1.value) + parseInt(option2.value);
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        result = parseInt(option1.value) - parseInt(option2.value);
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        result = parseInt(option1.value) * parseInt(option2.value);
        alert(result);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        result = parseInt(option1.value) / parseInt(option2.value);
        alert(result);
    });
})();