/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let question1, question2, question3, confirm;

    do {
        question1 = prompt('Enter Your Age!');
        question2 = prompt('Enter Your sex!');
        question3 = prompt('Enter Your city!');

        alert('So your info is ' + '\n Age : ' + question1 +
            '\n Sex : ' + question2 +
            '\n City : ' + question3);
        confirm = prompt('Are you confirming your info? yes/no');
        if (confirm == "yes") {
            alert('Done');
        }
    } while (confirm == "no");
})();