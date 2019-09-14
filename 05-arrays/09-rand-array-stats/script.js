/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run");

    run.addEventListener("click", function() {
        let numbers = new Array(10);
        let somme = 0;
        let moyenne = 0;
        let hight = 0;
        let low = 100;
        let size = numbers.length;

        //console.log(size);

        function randomMinMax(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        for (let i = 1; i <= size; i++) {
            numbers[i] = randomMinMax(1, 100);
            document.getElementById("n-" + i).innerHTML = numbers[i];
            //console.log(numbers[i]);
            somme += numbers[i];
            //console.log(somme);

        }
        numbers.forEach(element => {
            if (element > hight)
                hight = element;
            else if (element < low)
                low = element;
        });
        moyenne = somme / 10;
        //console.log(somme);
        //console.log(moyenne);
        document.getElementById("min").innerHTML = low;
        document.getElementById("max").innerHTML = hight;
        document.getElementById("sum").innerHTML = somme;
        document.getElementById("average").innerHTML = moyenne;

    });
})();