
// 옵셔널 체이닝 ?.
// 좌항의 피연산자가 null 또는 undefined 인경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
let test = {value : 10}

// 객체의 검사를 시행할 수 있게 해준다.
let value = test?.value;
console.log(value);
