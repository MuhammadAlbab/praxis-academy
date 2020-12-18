// //latihan Callback
// function albab(keterangan, callBack){
//     setTimeout(() => {
//         console.log(keterangan);
//         console.log(callBack());
//     }, 200);
// }
// albab("Saya Satu", callBack = () => {
//     return "Saya Dua";
// })


// function albabHey(nama, tahunLahir, callBack, callBack2){
//     var hitungUmur = 2020 - tahunLahir;
//     console.log(callBack(nama, hitungUmur))
//     console.log(callBack2(nama))
// }

// albabHey('albab', 1998, callBack = (nama, umur) => {
//     var namabesar = nama.toUpperCase()
//     return namabesar + " " + umur
// }, callBack2 = (nama) => {
//     var sA = nama.toUpperCase().split("")
//     var rA = sA.reverse()
//     var jA = rA.join("")
//     return jA
// })


// //latihan Promise
// let done = true
// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Berhasil!'
//     resolve(workDone)
//   } else {
//     const why = 'Gagal!'
//     reject(why)
//   }
// })

// const checkIfItsDone = () => {
//   isItDoneYet
//     .then(ok => {
//       console.log(ok)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
// checkIfItsDone()


// //latihan new operator
// class Car {
//     constructor(nama, cc){
//         this.nama = nama
//         this.cc = cc
//     }
// }

// var carBaru = new Car("bmw", 100)
// var carBaru1 = new Car("tesla", 200)
// console.log(carBaru);
// console.log(carBaru1);

//latihan error handling ) try, carch, finally
//contoh 1:
// try {
//   class Car {
//     constructor(nama, cc){
//         this.nama = nama
//         this.cc = cc
//     }
// }
// var carBaru = new Car("bmw", 100)
// var carBaru1 = new Car("tesla", 200)
// console.log(carBaru);
// console.log(carBaru1);
// }catch(CustomError) {
//   console.log(CustomError);
  
// }finally{
//   console.log("DONE!");
// }

// // The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error"; // (different names for different built-in error classes)
//     this.stack = <call stack>; // non-standard, but most environments support it
//   }
// }

//contoh 2: custom Error
// class CustomError extends Error {
//   constructor(message){
//     super(message)
//     this.name ="Custom Error"
//   }
// }

// function test(){
//   throw new CustomError("Error Satu")
// }

// try{
//   test()
  
// }catch(err){
//   console.log((err.message))
//   console.log((err.name))
//   console.log((err.stack))
// }

//contoh 3: 
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new CustomError("No field: age");
  }
  if (!user.name) {
    throw new CustomError("No field: name");
  }
  return user;
}

// Working example with try..catch

try {
  let userSatu = readUser('{ "age": 25, "name" : "albab"}')
  let userDua = readUser('{ "age": 30}')
  console.log(userSatu)
  console.log(userDua)
  
}catch (err) {
if (err instanceof CustomError) {
  console.log(("Invalid data: " + err.message)); // Invalid data: No field: name
} else if (err instanceof SyntaxError) { // (*)
  console.log(("JSON Syntax Error: " + err.message))
} else {
  throw err; // unknown error, rethrow it (**)
}
}