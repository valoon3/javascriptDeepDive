// well known symbol

// 빌트인 심벌 값은 symbol 함수의 프로퍼티에 할당되어 있다.
// array, string, map, set, tpyedArray, arguments, nodeList, htmlCollection과 같이 for...of 문으로 순회 가능한 빌트인 이터러블은
// well-known symbol인 symbol.itorator를 키로 갖는 메서드를 가지며
// symbol.iteratio 메서드를 호출하면 이터레이터를 반환하도록한다.
// 즉 빌트인 이터러블은 이터레이션 프로로토콜을 준수한다.
// symbol.iteratio를 키로 같은 메서드를 객체에 추가하고 이터레이터를 반환하도록 구현하면 그 객체는 이터러블이 된다.

// 1 ~ 5 범위의 정수로 이루어진 이터러블
// 이터레이션 프로토콜을 준수하기 위해 일반 객체에 추가해야 하는 메서드의 키 Symbol.iterator는 기존 프로퍼티 키 또는
// 미래에 추가될 프로퍼티 키와 절대로 중복되지 않을 것이다.
// 이처럼 심벌은 중복되지 않는 상수 값을 생성하는 것은 물론 기존에 작성된 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해,
// 즉 하위 호환성을 보장하기 위해 도입되었다.
const iterable = {
    // symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;
        // symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
        return {
            next() {
                return { value: cur++, done: cur > max + 1 };
            }
        };
    }
};
for(const num of iterable)
    console.log(num);
