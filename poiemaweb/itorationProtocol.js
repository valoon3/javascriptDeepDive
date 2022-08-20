// 이터러블 프로토콜을 준수한 객체를 이터러블이라고 한다.
// 배열은 Symbol.iterator 메서드를 소유한다 따라서 배열은 이터러블 프로토콜을 준수한 이터러블이다.

// const array = [1, 2, 3];
// console.log(Symbol.iterator in array);
//
// for(const item of array) {
//     console.log(item);
// }

// ===============================

// 객체는 이터러블 메서드를 가지고 있지 않으므로 스프레드 문법도 통하지 않고 이터러블하지 않다.

// const obj = {a: '1', b: '2'};
// console.log(Symbol.iterator in obj);
// for(const p of obj) {
//     console.log(p);
// }
// ===============================

// const array = [1, 2, 3];
//
// // Symbol.iterator 메서드는 이터레이터를 반환한다.
// const iterator = array[Symbol.iterator]();
//
// // 이터러블 프로토콜을 준수한 이터러블 객체는 next 메서드를 가진다.
// console.log('next' in iterator);
//
// // 이터레이터의 next 메서드를 호출하면 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
// let iteratorResult = iterator.next();
// console.log(iteratorResult);
// iteratorResult = iterator.next();
// console.log(iteratorResult);
// iteratorResult = iterator.next();
// console.log(iteratorResult);
// iteratorResult = iterator.next();
// console.log(iteratorResult);

// ===============================

// 빌트인 리터러블은 아래와 같다.
// Array, String, Map, Set,
// ypedArray(Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array),
// DOM data structure(NodeList, HTMLCollection),
// Arguments

// // 배열은 이터러블이다.
// const array = [1, 2, 3];
//
// // 이터러블은 Symbol.iterator 메소드를 소유한다.
// // Symbol.iterator 메소드는 이터레이터를 반환한다.
// let iter = array[Symbol.iterator]();
//
// // 이터레이터는 next 메소드를 소유한다.
// // next 메소드는 이터레이터 리절트 객체를 반환한다.
// console.log(iter.next()); // {value: 1, done: false}
// console.log(iter.next()); // {value: 2, done: false}
// console.log(iter.next()); // {value: 3, done: false}
// console.log(iter.next()); // {value: undefined, done: true}
//
// // 이터러블은 for...of 문으로 순회 가능하다.
// for (const item of array) {
//     console.log(item);
// }
//
// // 문자열은 이터러블이다.
// const string = 'hi';
//
// // 이터러블은 Symbol.iterator 메소드를 소유한다.
// // Symbol.iterator 메소드는 이터레이터를 반환한다.
// iter = string[Symbol.iterator]();
//
// // 이터레이터는 next 메소드를 소유한다.
// // next 메소드는 이터레이터 리절트 객체를 반환한다.
// console.log(iter.next()); // {value: "h", done: false}
// console.log(iter.next()); // {value: "i", done: false}
// console.log(iter.next()); // {value: undefined, done: true}
//
// // 이터러블은 for...of 문으로 순회 가능하다.
// for (const letter of string) {
//     console.log(letter);
// }
//
// // arguments 객체는 이터러블이다.
// (function () {
//     // 이터러블은 Symbol.iterator 메소드를 소유한다.
//     // Symbol.iterator 메소드는 이터레이터를 반환한다.
//     iter = arguments[Symbol.iterator]();
//
//     // 이터레이터는 next 메소드를 소유한다.
//     // next 메소드는 이터레이터 리절트 객체를 반환한다.
//     console.log(iter.next()); // {value: 1, done: false}
//     console.log(iter.next()); // {value: 2, done: false}
//     console.log(iter.next()); // {value: undefined, done: true}
//
//     // 이터러블은 for...of 문으로 순회 가능하다.
//     for (const arg of arguments) {
//         console.log(arg);
//     }
// }(1, 2));

// ===============================

// 객체 리터럴 이터러블로 만들기

const fibonacci =  {
    // Simbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        // 최대값
        let max = 10;

        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환햐야한다.
        // next method 는 iterator result object 를 환한다.
        return {
            // fibonacci 객체를 순회할 때마다 next method 가 호출된다.
            next() {
                [pre, cur] = [cur, pre + cur];
                return {
                    value: cur,
                    done: cur >= max,
                };
            }
        }
    }

}

for(const num of fibonacci) {
    console.log(num);
}













