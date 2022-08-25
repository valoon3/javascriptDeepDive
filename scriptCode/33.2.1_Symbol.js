
// Symbol
// symbol은 Symbol 함수를 사용하여 생성한다.
// 심볼은 외부로 드러나지 않아 확인할 수 없으며, 다른값과 중복되지 않는 유일무의한 값이다.
const mySymbol = Symbol();
console.log(typeof mySymbol);
console.log(mySymbol);

// 심벌 값에 대한 설명이 같더라도 유일무의한 심벌 값을 생성한다.
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');
console.log(mySymbol1 === mySymbol2);

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');
console.log(s1 === s2);

// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
// 자바스크립트 엔진이 관리하는 심벌 값 저장소인 전역 심벌 레지스트리에서 심벌 값을 검색할 수 있는 키를 지정할 수 없으므로 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
// 하지만 Symbol.for 메서드를 사용하면 애플리케이션 전역에서 중복되지 않는 유일무이한 상수인 심벌 값을 단 하나만 생성하여 전역 심벌 레지스트리를 통해 공유할 수 있다.
const key = Symbol.keyFor(s1);
console.log(key);
// 전역 심벌 레지스트리에 저장은 되지만 관리되지 않는다.
// 그렇기 때문에 키를 추출해도 검색되지 않는다.
const s5 = Symbol('foo');
console.log(Symbol.keyFor(s5));

const Direction = {
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right'),
};
const myDirection = Direction.UP;
if(myDirection === Direction.UP) {
    console.log('you are going up.');
}


