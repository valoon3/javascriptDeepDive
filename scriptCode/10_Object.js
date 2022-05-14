
const person = {
    name: 'bh',
    age: 29,
}

console.log(person.age);
console.log(person.tall);

let a = 'a', b = 'b', c = 'c';
const person2 = (a, b, c) => ({
    a, b, c
})

console.log("person2", ':' , person2);