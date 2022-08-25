
// // 피보나치 수열을 구현한 사용자 정의 이터러블
// const fibonacci = {
//     [Symbol.iterator]() {
//         let [pre, cur] = [0, 1];
//         const max = 10; // 수열의 최대 값
//
//         return {
//             next() {
//                 [pre, cur] = [cur, pre + cur];
//
//                 return { value: cur, done: cur >= max};
//             }
//         };
//     }
// }
//
// for(const num of fibonacci) {
//     console.log(num);
// }


// 이터러블을 생성하는 함수
const fibonacciFunc = function(max) {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {value: cur, done: cur >= max}
                }
            };
        }
    };
}

for(const num of fibonacciFunc(10)) {
    console.log(num);
}

// fibonacciFunc 함수는 이터러블을 반환한다.
const iterable = fibonacciFunc(5);
// 이터러블의 Symbol.iterator 메서드는 이터레이터를 반환한다.
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 이터러블이면서 이터레이터인 객체
//
// {
//     [Symbol.iterator]() { return this;},
//     next() { return {value: any, done: boolean }};
// }