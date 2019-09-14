/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let Person = class {
        constructor(firstName, lastName) {
            this.fName = firstName;
            this.lName = lastName;
        }
        sayHello() {
            return "Hello, " + this.fName + " " + this.lName;
        }
    }
    let run = document.getElementById("run");

    run.addEventListener("click", function() {
        const person = new Person('Yousef', 'Alsatouf');
        let hello = person.sayHello();
        console.log(hello);
    });
})();