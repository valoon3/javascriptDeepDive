const person = {
    firstName: 'Ungmo',
    lastName: 'Lee',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

class Person {
    view = 'background';

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}
const me = new Person('나', '병호');
// console.log(`${me.firstName} ${me.lastName}`);
// me.fullName = '최 재혁';
console.log(me);
// console.log(me.firstName)

