
// 논리함 (||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.

const animal = 'Cat' && 'Dog' // -> 'Dog'
console.log(1, animal);
// 논리곱 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다.
// 논리곱 연산자는 좌항에서 우항으로 평가된다.
// 모두가 참이면 마지막 문자열이 나옴


const myani = 'Cat' || 'Dog'
const myani2 = '0' || 'Dog'
console.log(2, myani);
console.log(3, myani2);

// 논리합 연산자는 논리 연산의 결과를 결정한 첫 번째 피연산자, 즉 문자열 'Cat'을 그대로 반환한다.


//===== 단축 평가 활용 =====
// 객체를 불러오면서 type error 혹은 undefined error 방지하기
let elem = null;
let testElem = elem && elem.value;
console.log(4, testElem);
