const person = {
    name : 'lee',
    address : '분당',
    whereFrom: function() {
        console.log(this.address);
    }
}

function Circle(r) {
    this.radius = r;
}
Circle.prototype.getArea = function() {
    console.log(this.radius * this.radius)

    this.test1 = function() {
        console.log(this);
    }
}
Circle.prototype.test2 = function() {
    console.log(this);
}

const circle = new Circle(5);
circle.getArea();

console.log(Circle.constructor.prototype);
console.log(Circle.prototype);
console.log(Circle.__proto__ === Circle.constructor.prototype);

circle.test1();
circle.test2();

