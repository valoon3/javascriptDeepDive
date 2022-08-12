// 주체가 어떤 객체의 상태를 관리하다가 변화가 생기면 옵저버 목록에 있는 옵저버들에게 변화를 알리는 디자이 패턴

// proxy sample project
// Proxy 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용합니다.
// 프로퍼티 이름이 객체에 없을때, 기본값을 숫자 37로 리턴받는 간단한 예제이다. 이것은 get handler를 사용하였다.
// let handler = {
//     get: function(target, name){
//         return name in target?
//             target[name] :
//             37;
//     }
// };
//
// let p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;
//
// console.log(p.a, p.b); // 1, undefined
// console.log('c' in p, p.c); // false, 37

// ==================================================================

// const handler = {
//     get: (target, name) => {
//         return name === 'name' ? `${target.a} ${target.b}` : target[name];
//     }
// }
//
// const p = new Proxy({a: 'KUNDOL', b: 'IS AUMUMU ZNNGIN'}, handler);
// console.log(p.name);

// ==================================================================

