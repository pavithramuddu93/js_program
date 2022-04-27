//a simple object
let person = {
    name: "simbha",
    occupation: "police",
    place: "Mumbai",
    work: (s) => console.log(s),
    address: {
        zip: "577522",
        locality: "Indian",
        state: "Maharastra"
    }
}

//object destructuring 
let { name, occupation, place, work,address } = person
console.log(name, occupation, place, work,address)
let {zip,locality,state} = address
console.log(zip,locality,state)
work("Charge taken")