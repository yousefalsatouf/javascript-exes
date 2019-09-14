/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        firstName(firstName) {
            this.fName = firstName;
        }
        lastName(lastName) {
            this.lName = lastName;
        }
        setName(fName, lName) {
            fName = this.fName;
            lName = this.lName;
            this.fullName = fName + " " + lName;
        }
        getName() {
            return this.fullName;
        }
    }
    let run = document.getElementById("run");

    run.addEventListener("click", function() {
        function display(content) {
            console.log(content);
        }
        let person = new Person();
        person.firstName("Yousef");
        person.lastName("Alsatouf");

        person.setName("Yousef", "Alsatouf");
        let getFullName = person.getName();
        display(getFullName);
    });
})();