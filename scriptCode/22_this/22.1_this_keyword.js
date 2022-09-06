// this 바인딩은 함수 호출 방식에의해 동적으로 결정된다.
// const Circle = {
//     radius: 5,
//     getDiameter() {
//         return this.radius * this.radius;
//     }
// }

function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.getDiameter = function () {
    return this.radius ** 2;
}

const circle = new Circle(5);
console.log(circle.getDiameter());