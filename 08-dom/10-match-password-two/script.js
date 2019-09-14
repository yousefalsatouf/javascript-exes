/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run");
    let pass1 = document.getElementById("pass-one");
    let pass2 = document.getElementById("pass-two");

    run.addEventListener("click", doIt);

    function doIt() {
        //console.log(pass1.value + pass2.value);
        if (pass1.value == pass2.value) {
            //console.log('good');
        } else {
            //console.log('bad');
            pass1.setAttribute("class", "error");
            pass2.setAttribute("class", "error");
        }
    }
})();