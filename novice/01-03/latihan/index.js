//POINT 1
console.log("Macam-macam function")
//Function Declaration 
function declarationExample(){
    console.log("Hi saya Function Declaration (FD) hehe. . .")
}
declarationExample()

//Function Exspression
let expressionsExample = function (){
    console.log("Hi saya Function Expression (FE) hehe. . .")
}
expressionsExample()

//Arrow Function Expression
let arrowExpressionExample = () => {
    console.log("Hi! saya Arrow Function Expression (AFD) hehe. . .")
    console.log("")
}
arrowExpressionExample()

//POINT 2
console.log("Binding and Scopes")
//Binding and Scopes
let x = 10
if (true){
    let y = 20
    var z = 30
    console.log(x + y + z)
}
console.log(x + z) // ( x + y + z) = error karena y tidak terbaca.

const halve =  function(n){
    return n / 2
}
let n = 30
console.log(halve(20)) //n local
console.log(n) //n global

//Nested Scope
const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor
        if (ingredientAmount > 1){
            unit += "s"
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    }
    ingredient(1, "can", "chickpeas")
    ingredient(0.25, "cup", "tahini")
    ingredient(0.25, "cup", "lemon juice")
    ingredient(1, "clove", "garlic")
    ingredient(2, "tablespoon", "olive oil")
    ingredient(0.5, "teaspoon", "cumin")
}
hummus(1)

//POINT 3
