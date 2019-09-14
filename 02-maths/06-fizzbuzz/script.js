/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // your code here
    let max = 100;
    for (let compter = 1; compter <= max; compter++) {
        if (compter % 3 == 0) console.log("Fizz");
        else if (compter % 5 == 0) console.log("buzz");
        else if (compter % 5 == 0 && compter % 3 == 0) console.log("FizzBuzz");
        else console.log(compter);
    }

})();