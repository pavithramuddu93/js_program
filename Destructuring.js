console.log("Destructuring in java script")
let a, b, c, d;

// [a, b, c, ...d] = [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

({ a, b, c, ...d } = { a: 34, b: 34, c: 536, d: 45, e: 66 })
// console.log(a,b,c,d)

//array destructuring
const fruits = ["Apple", "Banana", "Orange", "Mangoes", "Pine Apple", "Gua"];
[a, b, c, ...d] = fruits
console.log(a, b, c, d)

// function fruit(fruits){
//     [a,b,c,...d] = fruits
//     return [a,b,c,...d]
// }

// let fruits1  = fruit(fruits)
// console.log(fruits1)

// object destructuring
const laptop = {
    model: "Hp pavillion",
    age: "23 days",
    gender: "Male",
    netWorth: 1233,
    start: function () { console.log("started") }
}

const { model, age, gender, netWorth ,start } = laptop
console.log(model, age, gender, netWorth,start)
start()