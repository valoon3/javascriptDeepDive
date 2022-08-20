// const arr = [1, 2, 3, 4];
//
// console.log(arr.indexOf(1));
// console.log(arr.includes(1));

// =================================


const Stack = (function() {
    function Stack(array = []) {
        if(!array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }
    Stack.prototype = {
        constructor: Stack, // 생성자 함수에 의한 프로토타입 교체
        push(value) {
            return this.array.push(value);
        },
        pop() {
            return this.array.pop();
        },
        entries() {
            return [...this.array];
        }
    };
    return Stack;
}());

const stack = new Stack([1, 2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());