//import { on } from "cluster";

/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let inputOne = document.getElementById("part-one");
    let btnOne = document.getElementById("fix-part-one");
    let output = document.getElementById("target");
    btnOne.innerHTML = "Start";
    let inputTwo = document.getElementById("part-two");
    let btnTwo = document.getElementById("fix-part-two");
    btnTwo.innerHTML = "Start";
    let inputThree = document.getElementById("part-three");
    let btnThree = document.getElementById("fix-part-three");
    btnThree.innerHTML = "Start";
    let inputFour = document.getElementById("part-four");
    let btnFour = document.getElementById("fix-part-four");
    btnFour.innerHTML = "Start";
    let max499 = inputOne.getAttribute("data-max");
    let min499 = inputOne.getAttribute("data-min");
    let max99 = inputTwo.getAttribute("data-max");
    let min99 = inputTwo.getAttribute("data-min");

    let timer1, timer2, timer3, timer4;
    let getValues = "";

    let click1 = 0;
    btnOne.addEventListener("click", function() {
        click1++;
        if (click1 % 2 == 1) {
            btnOne.innerHTML = "Stop";
            timer1 = setInterval(() => {
                if (inputOne.value == parseInt(max499)) inputOne.value = min499;

                output.innerHTML = inputOne.value;
            }, 300);
        } else {
            btnOne.innerHTML = "Start";
            clearInterval(timer1);
        }
        inputOne.value = parseInt(inputOne.value) + 1;
    });
    let click2 = 0;
    btnTwo.addEventListener("click", function() {
        click2++;
        if (click2 % 2 == 1) {
            btnTwo.innerHTML = "Stop";
            timer2 = setInterval(() => {
                if (inputTwo.value == parseInt(max99)) inputTwo.value = min99;
                if (parseInt(inputTwo.value) < 9)
                    inputTwo.value = "0" + (parseInt(inputTwo.value) + 1);
                else inputTwo.value = parseInt(inputTwo.value) + 1;
            }, 300);
        } else {
            btnTwo.innerHTML = "Start";
            clearInterval(timer2);
        }
    });
    let click3 = 0;
    btnThree.addEventListener("click", function() {
        click3++;
        if (click3 % 2 == 1) {
            btnThree.innerHTML = "Stop";
            timer3 = setInterval(() => {
                if (inputThree.value == parseInt(max99)) inputThree.value = min99;
                if (parseInt(inputThree.value) < 9)
                    inputThree.value = "0" + (parseInt(inputThree.value) + 1);
                else inputThree.value = parseInt(inputThree.value) + 1;
            }, 300);
        } else {
            btnThree.innerHTML = "Start";
            clearInterval(timer3);
        }
    });
    let click4 = 0;
    btnFour.addEventListener("click", function() {
        click4++;
        if (click4 % 2 == 1) {
            btnFour.innerHTML = "Stop";
            timer4 = setInterval(() => {
                if (inputFour.value == parseInt(max99)) inputFour.value = min99;
                if (parseInt(inputFour.value) < 9)
                    inputFour.value = "0" + (parseInt(inputFour.value) + 1);
                else inputFour.value = parseInt(inputFour.value) + 1;
            }, 300);
        } else {
            btnFour.innerHTML = "Start";
            clearInterval(timer4);
        }
    });
    let partOne = inputOne.value;
    let partTwo = inputTwo.value;
    let partThree = inputThree.value;
    let partFour = inputFour.value;

    if (partOne <= 9 || partFour <= 9 || partThree <= 9 || partFour <= 9)
        getValues =
        "+" + partOne + "0" + partTwo + "0" + partThree + "0" + partFour;
    else getValues = "+" + partOne + partTwo + partThree + partFour;
    output.innerHTML = getValues;
})();