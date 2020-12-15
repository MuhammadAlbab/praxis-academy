//Functional Programming

//Array Functions
console.log("Filtering");
let meetups = [
    {name: 'JS', isActive: true, members: 450},
    {name: 'Angular', isActive: false, members: 200},
    {name: 'Node', isActive: true, members: 500},
    {name: 'Vue', isActive: true, members: 300},
    {name: 'Python', isActive: false, members: 400}
]
console.log("from this:");
console.log(meetups);
//try to filter only active meet-ups. can be achieved with two different approach
//example 1 (manual)/(imperative--focuses on describing how program operates)
let activeMeetups = []
for (let i = 0; i < meetups.length; i++ ){
    let m = meetups[i]
    if (m.isActive){
        activeMeetups.push(m)
    }
}
console.log("to this:");
console.log(activeMeetups);

//example 2 (FP)/(declarative--focus on what the program should accomplish)
let activeMeetupsFP = []
activeMeetupsFP = (meetups.filter((m) =>{
    return m.isActive
}))
console.log(activeMeetupsFP)
console.log("");

//try to filter only even  number. can be achieved with two different approach
//example 1 (manual)/(imperative--focuses on describing how program operates)
console.log("from this");
const numberKu = [1,2,3,4,5,6,7,8,9,10]
console.log(numberKu);
let evenNumber = []
for( let i = 0; i < numberKu.length; i++){
    if (numberKu[i] % 2 === 0){
        evenNumber.push(numberKu[i])
    }
}
console.log("to this");
console.log(evenNumber);

//example 2 (FP)/(declarative--focus on what the program should accomplish)
const even = n => n % 2 === 0
console.log(numberKu.filter(even))
console.log("");


//currying
console.log("currying");
function multiply(a, b, c){
    return a * b * c
}
console.log(multiply(2, 5, 2))

//call the "kali" function with arguments
function kali(a){
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
console.log(kali(2)(5)(2))


// MAP
// The idea of map is to transform a collection.
var books = [
    {name:'JavaScript', pages:450}, 
    {name:'Angular', pages:902},
    {name:'Node', pages:732}
  ];
/* Imperative Pattern */
for (var i = 0; i < books.length; i++) {
books[i].lastRead =  new Date();
}
/* Declarative Pattern */
books.map((book)=> {
book.lastReadBy = 'me';
return book;
});
console.log(books);

// imperative way
var people = [
        { name: "TK", age: 26 },
        { name: "Kaio", age: 10 },
        { name: "Kazumi", age: 30 }
    ];

    var peopleSentences = [];
    for (var i = 0; i < people.length; i++) {
    var sentence = people[i].name + " is " + people[i].age + " years old";
    peopleSentences.push(sentence);
}
console.log(peopleSentences); // ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']

// declarative way
const makeSentenceFP = (person) => `${person.name} is ${person.age} years old`;
const peopleSentencesFP = (people) => people.map(makeSentenceFP);
console.log(peopleSentencesFP(people)); // ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']
console.log("");
//problem: the input [1, 2, 3, -4, 5] needs the output to be [1, 2, 3, 4, 5]
// imperative way
var values = [1, 2, 3, -4, 5];
console.log(values);
for (var i = 0; i < values.length; i++) {
  values[i] = Math.abs(values[i]);
}
console.log(values);

//declarative way
var valuesFP = [1, 2, 3, -4, 5];
console.log(valuesFP)
const updateListMap = (valuesFP) => valuesFP.map(Math.abs);
console.log(updateListMap(valuesFP));

//REDUCE
//The idea of reduce is to receive a function and a collection, and return a value created by combining the items
/* A common example people talk about is to get the total amount of an order.
Imagine you were at a shopping website. You’ve added Product 1, Product 2, Product 3, and Product 4 to your shopping cart (order). 
Now we want to calculate the total amount of the shopping cart. */

var orders = [
    { productTitle: "Product 1", amount: 10 },
    { productTitle: "Product 2", amount: 30 },
    { productTitle: "Product 3", amount: 20 },
    { productTitle: "Product 4", amount: 60 }
  ];
  
var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
totalAmount += orders[i].amount;
}
console.log(totalAmount);

let shoppingCart = [
    { productTitle: "Product 1", amount: 10 },
    { productTitle: "Product 2", amount: 30 },
    { productTitle: "Product 3", amount: 20 },
    { productTitle: "Product 4", amount: 60 }
  ];
  
const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;
const getTotalAmount = (shoppingCart) => shoppingCart.reduce(sumAmount, 0);
console.log(getTotalAmount(shoppingCart));