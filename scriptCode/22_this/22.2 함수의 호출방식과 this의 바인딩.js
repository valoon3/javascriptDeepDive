// 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수가 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프가 결정되지만
// this 바인딩은 함수가 호출되는 시점에 결정된다.

// 함수의 호출 방식
// 1. 일반 함수 호출
// 2. 메서드 호출
// 3. 생성자 함수 호출
// 4. Function.prototype.apply/call 에 의한 간접 호출

const foo = function() {
    console.dir(this);
}

// 1. 일반 함수 호출
// foo();

// 2. 메서드 호출
const obj = { foo };
obj.foo();

// 3. 생성자 함수 호출
new foo();

const bar = { name : 'bar'};

foo.call(bar);
foo.apply(bar);
foo.bind(bar)();

const test = {
    value: 100,
    func1: function () {
        console.log(this.value);

        function test() {
            console.log(this);
        }

        test();
    },
    func2: function() {
        console.log(this.value);
        const test = () => {
            console.log(this);
        }
        test();
    },
    func3() {
        console.log(this.value);
        const test = () => {
            console.log(this);
        }
        test();
    }
}

test.func3();
