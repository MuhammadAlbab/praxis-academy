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