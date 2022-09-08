function getThisBinding() {
    console.log(arguments);
    return this;
}

// this로 바인딩할 객체
const thisArgs = {
    a: 1,
}

// console.log(getThisBinding()); // window

// apply는 매개변수를 함수의 인수를 배열로 묶어서 전달
console.log(getThisBinding.apply(thisArgs, ['skqudgh12', 'asdf', 1, 2]));

// call은 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달
console.log(getThisBinding.call(thisArgs, 'skqudgh12', 1, 2));

// bind는 함수를 호출 하지는 않기때문에 따로 추가로 호출해줘야한다.
console.log(getThisBinding.bind(thisArgs)('asdf', 'test'));

