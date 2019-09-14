/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let click = document.getElementById("increment");
    let nber = document.getElementById("target");
    let zeroNber = 0;
    let store = localStorage.getItem("counter");
    if (store == null) localStorage.setItem("counter", zeroNber);
    let nberContent = store;

    click.addEventListener("click", function() {

        nberContent++;
        localStorage.setItem("counter", nberContent);
        //console.log(nberContent);
        nber.innerHTML = nberContent;
        //console.log("u got me");
    });

    if (store) nber.innerHTML = store;
    else console.log("something went wrong");
    console.log(store);

})();