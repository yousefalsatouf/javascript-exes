/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
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
            pass1.style.borderColor = "#3ae056";
            pass2.style.borderColor = "#3ae056";
        } else {
            //console.log('bad');
            pass1.style.borderColor = "#f00";
            pass2.style.borderColor = "#f00";
        }
    }
})();