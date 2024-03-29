/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here

    let run = document.getElementById("run");
    let size1 = fruits.length;

    run.addEventListener("click", function() {
        console.log(size1);

        let fruitsUnique = Array.from(new Set(fruits));

        let size2 = fruitsUnique.length;
        console.log(size2);
        fruitsUnique.forEach(fruit => {
            console.log(fruit);
        });
    });
})();