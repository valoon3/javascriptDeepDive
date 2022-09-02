let Person_function = (function(){
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function() {
        console.log(`hi my name is ${this.name}`);
    }

    // 정적 메서드
    Person.sayHello = () => {
        console.log(`hello!`);
    }

    return Person;
}());

class Person_class {
    // 생성자 함수
    constructor(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    sayHi() {
        console.log(`hi my name is ${this.name}`);
    }

    // 정적 메서드
    static sayHello() {
        console.log(`hello!`);
    }
}

const person1 = new Person_function('최재혁');
person1.sayHi();
Person_function.sayHello();

const person2 = new Person_class('나병호');
person2.sayHi();
Person_class.sayHello();