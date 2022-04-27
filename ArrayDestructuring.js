let fruits = ["Apple","Banana","Orange","Pine Apple",{name:"apple",job:"juice"}]
let fruits1 = ["Papaya","Pear","Peach"]
console.log(fruits)
fruits  = fruits.concat(fruits1)
let [a,b,c,...d] = fruits

console.log(a,b,c,d)