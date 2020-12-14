//class declarations
function tesSatu(){
    console.log("prototype method using class declarations");
    console.log("");
    class Rectangle{
        constructor(height, width){
            this.height = height
            this.width = width
        }
        get area(){
            return this.calcArea()
        }
        calcArea(){
            return this.height * this.width
        } 
    }
    var x = prompt("Jumlah pengulangan: ", 0)
    var square = []
    for (var i = 0; i < x; i++){
        this.height = prompt("tinggi: ", 0)
        this.width = prompt("lebar: ", 0)        
        square[i] = new Rectangle(height, width) 
        console.log("Tinggi: " + this.height)
        console.log("lebar: " + this.width)
        console.log("");
    }
    console.log(square);
    
}
tesSatu()
console.log("")


//Class expressions
function tesDua(){
    // unnamed
    let unnamed = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    console.log(unnamed.name);
    // output: "Rectangle"

    // named
    let naming = class named {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    console.log(naming.name);
}
tesDua()
console.log("");