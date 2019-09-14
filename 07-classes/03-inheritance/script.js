/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        static constructor() {
            return this.greeting();
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal {
        name(name) {
            return this.name = name;
        }
        static get greeting() {
            return "Salut";
        }
    }
    class Cat extends Animal {
        name(name) {
            return this.name = name;
        }
        static get greeting() {
            return "Hola";
        }
    }
    // your code here
    let run = document.getElementById("run");

    run.addEventListener("click", function() {
        new Animal();
        const dog = new Dog();
        dog.name("dog");

        const cat = new Cat();
        cat.name("cat");

        function display(content) {
            console.log(content);
        }

        display(dog.sayHello());
        display(cat.sayHello());


    });
})();