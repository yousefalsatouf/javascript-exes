/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let target = document.getElementById("target");
    let now = new Date()
    let weekdays = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "jeudi",
        "Vendredi", "Samedi")
    let monthdays = new Array("Janviere", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout",
        "Septembre", "Octobre", "Novembre", "Decembre");

    //console.log(weekdays[now.getDay()]);
    let getD = weekdays[now.getDay()] + " " + (now.getDay() + 1);
    let getM = monthdays[now.getMonth()];
    let getY = now.getFullYear();
    let getHrAndMin = now.getHours() + "h" + now.getMinutes();
    target.innerHTML = getD + " " + getM + " " + getY + " " + getHrAndMin;

})()