/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let btns = document.getElementsByTagName("button");
    let output = document.getElementById("target");
    let getValues = "";
    let setValue = "";
    let maxData499 = "",
        maxData99 = "",
        minData499 = "",
        minData99 = "";

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", doSomething);
        if (btns[i].getAttribute("id") == "part-one") {
            maxData499 = btns[i].getAttribute("data-max");
            minData499 = btns[i].getAttribute("data-min");
        } else {
            maxData99 = btns[i].getAttribute("data-max");
            minData99 = btns[i].getAttribute("data-min");
        }
    }

    let partOne = minData499,
        partTwo = minData99,
        partThree = minData99,
        partFour = minData99;

    function doSomething(e) {
        oldValue = parseInt(e.target.textContent);

        if (oldValue == parseInt(maxData499)) oldValue = minData499;
        else if (oldValue == parseInt(maxData99)) oldValue = minData99;
        //console.log(oldValue);
        setValue = oldValue;
        setValue++;
        if (setValue <= 9) e.target.innerHTML = "0" + setValue;
        else e.target.innerHTML = setValue;
        //e.target.innerHTML = setValue;

        switch (e.target.getAttribute("id")) {
            case "part-one":
                partOne = setValue;
                break;
            case "part-two":
                partTwo = setValue;
                break;
            case "part-three":
                partThree = setValue;
                break;
            case "part-four":
                partFour = setValue;
                break;
        }
        if (setValue <= 9) getValues = "+" + partOne + "0" + partTwo + "0" + partThree + "0" + partFour;
        else getValues = "+" + partOne + partTwo + partThree + partFour;
        output.innerHTML = getValues;
    }
})();