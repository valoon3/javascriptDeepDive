class Person{
    name = 'Lee';

    // 클래스 필드에 함수를 할당
    getName = () => {
        return this.name;
    }
}

const me = new Person();
console.log(me);
console.log(me.getName());

const test = {
    test1: function() {
        console.log('test1');
    },
    test2() {
        console.log('test2');
    }
}

const t = new test.test2();


