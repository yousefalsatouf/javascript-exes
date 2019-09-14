/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    let run = document.getElementById("run");

    run.addEventListener("click", function() {
        const cat1 = new Cat();
        let name = cat1.name = "Skitty";
        let age = cat1.age = 9;
        console.log("name first cat : " + name + "\nAge first cat :" + age + "ans");

        const cat2 = new Cat();
        let nameS = cat2.name = "Pixel";
        let ageS = cat2.age = 6;
        console.log("name second cat : " + nameS + "\nAge second cat :" + ageS + "ans");
    });
})();