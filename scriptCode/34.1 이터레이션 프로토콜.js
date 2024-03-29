// 이터레이션 프로토콜

// ES6 에서 도입된 이터레이션 프로토콜은 순회 가능한(이터러블한) 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.

// iterable protocol
// well-known Symbol인 Symbol.iterator 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속 받은
// Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
// 이러한 규약을 이터러블 프로토콜이라 하며, 이터러블 프로토콜을 준수한 객체를 이터러블 이라고한다.
// 이터러블은 for...of 문으로 순회할 수 있으며 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.

// iterator protocol
// 이터러블의 iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
// 이터레이터는 next 메서드를 소유하며 next 메서드를 호출하면 이터러블을 순회하며 value와 done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
// 이러한 규약을 이터레이터 프로토콜이라 하며, 이터레이터 프로토콜을 준수한 객체를 이터레이터라 한다.
// 이터레이터는 이터러블한 요소를 탐색하기 위한 포인터 역할을 한다.

// 이터러블
const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';
// 배열, 문자열, Map, Set 등은 이터러블이다.
console.log(isIterable([]));
console.log(isIterable(''));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({}));

// 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
const array = [1, 2, 3];
const [a, ...rest] = array;
const b = [...array];
console.log(a, rest);
console.log(b);
