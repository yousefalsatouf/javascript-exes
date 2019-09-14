//import { disconnect } from "cluster";

/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let button = document.getElementById("run"),
        yearsList = document.getElementById("dob-year"),
        monthsList = document.getElementById("dob-month"),
        daysList = document.getElementById("dob-day");

    button.addEventListener("click", function() {
        let yearDob = yearsList.value,
            monthDob = monthsList.value,
            dateDob = daysList.value;

        let birthDate = yearDob + "-" + monthDob + "-" + dateDob;
        let getStringDate = birthDate.toString();
        let year = parseInt(getStringDate.substring(0, 4), 10);
        let month = parseInt(getStringDate.substring(5, 7), 10);
        let day = parseInt(getStringDate.substring(8, 10), 10);

        let today = new Date();
        let birthday = new Date(year, (month - 1), day);
        let diff = today.valueOf() - birthday.valueOf();

        let yearsAge = Math.floor(diff / 31536000000);
        let daysAge = Math.floor((diff % 31536000000) / 86400000);

        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate()))
            alert("Happy Birth day!!!");

        let monthsAge = Math.floor(daysAge / 30);
        daysAge = daysAge % 30;
        console.log("You are" + yearsAge + " years " + monthsAge + " months and" + daysAge + " days old");
    });
})();