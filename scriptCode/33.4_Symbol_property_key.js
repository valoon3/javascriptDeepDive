// 33.4 심벌과 프로퍼티 키

// 객체의 프로퍼티 키는 빈 문자열을 포함하는 모든 문자열 또는 심벌 값으로 만들 수 있으며, 동적으로 생성할 수도 있다.
// 심벌 값으로 프로퍼티 키를 동적 생성하여 프로퍼티를 만들어 보자.
// 심벌 값을 프로퍼티에 접근할 때도 마찬가지로 대괄호를 사용해야한다.
const obj = {
    [Symbol.for('mySymbol')]: 1
}

// 심벌 값은 유일무의한 값이므로 심벌 값으로 프로퍼티 키를 만들면 다른 프로퍼티 키와 절대 충돌하지 않는다.
const num = obj[Symbol.for('mySymbol')];
console.log(num);


// 33.5 심벌과 프로퍼티 은닉

// 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for...in 문이나 Object.keys, Object.getOwnPropertyNames 메서드로 찾을 수 없다.
// 이처럼 심벌 값을 프로퍼티 키로 사용하여 프로퍼티를 생성하면 외부에 노출할 필요가 없는 프로퍼티를 은닉할 수 있다.
for(const key in obj) {
    console.log(key); // 아무것도 출력되지 않는다.
}
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

// SE6에서 도입된 Object.getOwnPropertySymbols 메서드를 사용하면 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티를 찾을 수 있다.
console.log(Object.getOwnPropertySymbols(obj));
