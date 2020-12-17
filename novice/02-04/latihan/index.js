//latihan Callback
function albab(keterangan, callBack){
    setTimeout(() => {
        console.log(keterangan);
        console.log(callBack());
    }, 200);
}
albab("Saya Satu", callBack = () => {
    return "Saya Dua";
})


function albabHey(nama, tahunLahir, callBack, callBack2){
    var hitungUmur = 2020 - tahunLahir;
    console.log(callBack(nama, hitungUmur))
    console.log(callBack2(nama))
}

albabHey('albab', 1998, callBack = (nama, umur) => {
    var namabesar = nama.toUpperCase()
    return namabesar + " " + umur
}, callBack2 = (nama) => {
    var sA = nama.toUpperCase().split("")
    var rA = sA.reverse()
    var jA = rA.join("")
    return jA
})


//latihan Promise
let done = true
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Berhasil!'
    resolve(workDone)
  } else {
    const why = 'Gagal!'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.log(err)
    })
}
checkIfItsDone()


//latihan new operator
class Car {
    constructor(nama, cc){
        this.nama = nama
        this.cc = cc
    }
}

var carBaru = new Car("bmw", 100)
var carBaru1 = new Car("tesla", 200)
console.log(carBaru);
console.log(carBaru1);