function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`hi my name is ${this.name}`);
}

const me = new Person('나병호');
me.sayHello();
console.log(me);
console.log(me.hasOwnProperty('name')); // hasOwnProperty 를 호출할 수 있다는 것은 Object 를 상속받았음을 알 수 있다.
console.log(Object.getPrototypeOf(me) === Person.prototype);
