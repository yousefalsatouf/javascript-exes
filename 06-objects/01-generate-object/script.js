/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let run = document.getElementById("run");
    let person = {
        lastName: "Alsatouf",
        firstName: "Yousef",
        age: 25,
        city: "Liege",
        country: "Belgium"
    }

    run.addEventListener("click", function() {
        const values = Object.values(person);
        for (let value of values) {
            console.log(value);
        }
    });
})();