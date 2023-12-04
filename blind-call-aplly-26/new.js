class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('siam', 'hossain', 50000);
console.log(heroPerson);

function Person1(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldMan = new Person1('grand','papa',1200)
console.log(oldMan);