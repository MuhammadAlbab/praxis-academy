//Object
function tesSatu(){
    console.log("OBJECT");
    let user = {
        name: "John",
        surname: "Smith"
    }

    console.log(user);
    user.name = "Pete"
    console.log(user);
    delete (user.name)
    console.log(user);
}
tesSatu()
console.log("");



//Method Example
function tesDua(){
    console.log("METHODE EXAMPLE!")
    let user = {
        name: "John",
        age: 40,
        SayHello: function(){
            console.log("Hi my name is " + this.name + " and im " + this.age + " years old.")
        }
    }
    user.SayHello()
}
tesDua()
console.log("");


function tesTiga(){
    console.log("KALKULATOR")
    let calculator = {
        read: function(){
            this.a = parseInt(prompt("Masukan angka pertama!"))
            this.b = parseInt(prompt("Masukan angka kedua!"))
        },
        sum: function(){
            this.tambah = this.a + this.b
            console.log(this.a + " + " + this.b + " = " + this.tambah)
        },
        mul: function(){
            this.kali = this.a * this.b
            console.log(this.a + " x " + this.b + " = " + this.kali)
        }
    }
    calculator.read()
    calculator.sum()
    calculator.mul()
}
tesTiga()
console.log("");


//Method Chaining Example
function tesEmpat(){
    console.log("STEP LADDER")
    let ladder = {
        step: 0,
        up: function(){
            this.step++
            return this
        },
        down: function(){
            this.step--
            return this
        },
        showStep: function(){
            console.log(this.step)
            return this
        }
    }
    ladder.up().up().down().showStep()
}
tesEmpat()
console.log("");

// Constructor, operator "new"
function tesLima(){
    console.log("Constructor, operator 'new'");
    function User(name){
        this.name = name
        this.isAdmin = false
    }

    let user = new User(("Jack"))
    console.log(user.name)
    console.log(user.isAdmin)
}
tesLima()
console.log("");

//Array
function tesEnam(){
    console.log("Array");
    let cars = ["isuzu", "toyota", "daihatsu", "honda", "bmw"]
    //old syntax
    for (let i = 0; i < cars.length; i++){
        console.log(cars[i])
    }
    console.log("");
    //modern syntax
    for (item of cars){
        console.log(item)
    }

    //Multidimensional Array
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    console.log(matrix[2][2]);
}
tesEnam()
console.log("");


//Iterables
// Symbol.iterator
function tesTujuh(){
    console.log("Symbol.iterator");
    let range = {
        from: 1,
        to: 5
    }
    range[Symbol.iterator] = function(){
        return {
            current: this.from,
            last: this.to,
            next(){
                if (this.current <= this.last){
                    return { done: false, value: this.current++ }
                }else{
                    return {done: true}
                }
            }
        }
    }
    for (let num of range){
        console.log(num);
    }

}
tesTujuh()
console.log("")

//Map
function tesDelapan(){
    console.log("Map");
    let map = new Map()
    map.set("1", "string key")
    map.set(1, "numeric key")
    map.set(true, "boolean key")
    

    // remember the regular Object? it would convert keys to string
    // Map keeps the type, so these two are different:

    console.log(map.get("1"))
    console.log(map.get(1))
    console.log(map.get(true))
    console.log("");

    //using objects as keys is one of the most notable and important Map features.
    //use object as key, example
    console.log("use object as key, example");
    let john = {name: "john"}
    let visitCountMap = new Map()
    visitCountMap.set(john, 123)
    console.log(visitCountMap.get(john));
    console.log("");

    //iteration over Map
    let recipe = new Map([
        ["cucumber", 20],
        ["tomato", 10],
        ["apple", 50]
    ])

    // iterate over keys (vegetables)
    console.log("iterate over keys (vegetables)");
    for (let vegetable of recipe.keys()) {
        console.log(vegetable); // cucumber, tomatoes, onion
    }
    
    // iterate over values (amounts)
    console.log("iterate over values (amounts)");
    for (let amount of recipe.values()) {
        console.log(amount); // 20, 10, 50
    }
    
    // iterate over [key, value] entries
    console.log("iterate over entry");
    for (let entry of recipe) { // the same as of recipeMap.entries()
        console.log(entry); // cucumber,500 (and so on)
    }

}
tesDelapan()
console.log("");

function tesSembilan(){
    console.log("Set")
    let set = new Set();

    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };

    // visits, some users come multiple times
    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(john);
    set.add(mary);

    // set keeps only unique values
    console.log( set.size ); // 3

    for (let user of set) {
    console.log(user.name); // John (then Pete and Mary)
    }

    let lset = new Set(["oranges", "apples", "bananas"]);

    for (let value of lset) 
    console.log(value)

    // the same with forEach:
    lset.forEach((value, valueAgain, set) => {
    console.log(value);
    })

    //task
    function unique(arr){
        return Array.from(new Set(arr)) 
    }
    let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]
    console.log(unique(values));
}
tesSembilan()