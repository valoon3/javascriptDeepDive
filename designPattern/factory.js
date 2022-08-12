// const num = new Object(42);
// const str = new Object('abc');
// console.log(num.constructor.name);
// console.log(str.constructor.name);

class Latte {
    constructor() {
        this.name = 'latte';
    }
}

class Espresso {
    constructor() {
        this.name = 'Espresso';
    }
}

class LatteFactory {
    static createCoffee() {
        return new Latte();
    }
}

class EspressoFactory {
    static createCoffee() {
        return new Espresso();
    }
}

const factoryList = { LatteFactory, EspressoFactory}

class CoffeeFactory {
    static createCoffee(type) {
        const factory = factoryList[type];
        return factory.createCoffee();
    }
}

const main = () => {
    // const type = 'LatteFactory';
    const type = 'EspressoFactory';
    // 라떼 커피를 주문한다.
    const coffee = CoffeeFactory.createCoffee(type);
    // 커피 이름을 부른다.
    console.log(coffee.name); // latte
}

main();