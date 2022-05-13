
// 논리함 (||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.

const animal = 'Cat' && 'Dog' // -> 'Dog'
console.log(animal);
// 논리곱 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다.
// 논리곱 연산자는 좌항에서 우항으로 평가된다.
