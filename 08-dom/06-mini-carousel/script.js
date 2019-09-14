/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let next = document.getElementById("next");
    let img = document.getElementsByTagName("img");

    next.addEventListener("click", goNext);

    function goNext() {
        for (let i = 0; i < gallery.length; i++) {
            //console.log(gallery[i]);
            img[0].setAttribute("src", gallery[i]);
        }
        //console.log("u got me");
    }

})();