/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let parent = document.getElementsByClassName("material");
    let img = document.getElementsByTagName("img");
    let data = img[0].getAttribute("data-hover");
    let src = img[0].getAttribute("src");

    console.log(data);
    img[0].addEventListener("mouseover", mouseover);
    img[0].addEventListener("mouseout", mouseout);

    function mouseover() {
        img[0].setAttribute("src", data);
        //console.log("u got me");
    }

    function mouseout() {
        img[0].setAttribute("src", src);
    }

})();