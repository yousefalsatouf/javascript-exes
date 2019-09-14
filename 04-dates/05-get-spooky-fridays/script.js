/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let run = document.getElementById("run");
let year = document.getElementById("year");
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let get = "";

(() => {
    // your code here
    run.addEventListener("click", function() {
        //console.log('u got me');
        let yearValue = year.value;
        let counter = 0;

        if (yearValue == "") console.log("Empty Value!");
        else {
            function getYear(year) {
                for (let mon = 0; mon < 12; mon++) {
                    let check = new Date(year, mon, 13);
                    if (check.getDay() == 5) {
                        counter++;
                        console.log(counter + " Month:");
                        console.log(months[check.getMonth()]);
                    }
                }
            }
        }
        getYear(yearValue);

    });
})();