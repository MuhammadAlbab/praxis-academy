//Callback
//contoh 1:
// function main(param1,param2,callBack){ 
//     console.log(param1, param2) 
//     callBack()  
// }
// function myCallback(){ 
//     console.log ('hello callback')
// }
//main(1,2, myCallback)
//contoh 2:
// function calculate(param1, param2, callback){
//     result = param1 + param2
//     if (typeof callback == 'function'){
//         result = callback(param1, param2)
//     } 
//     return result
// }
// console.log("tambah: ", calculate(2, 2))
// console.log("bagi: ", calculate(10,2, (a,b) => (a/b)))
// console.log("kurang: ",calculate(10,5, (a,b) => (a-b)))
//contoh: 3 (Simulasi asynchronus)
// function p1(){
//     console.log("p1 done")
    
// }
// function p2(callBack){
//     setTimeout(
//         function() {
//           console.log('p2 done')
//           callBack()
//         },100
//     )
// }
// function p3(){
//     console.log("p3 done")
// }
// p1()
// p2(p3)

// Promise
//contoh: 1
let janjian = new Promise(
    (resolve, reject) => {
        // salah satu dari 2 callback berikut
        resolve('success')
        reject('fail')
    }
)
console.log(janjian);
//
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(data => {
//     console.log("ini data dari luar guys: ", data)
// })



// Async/Await
// async function getData(){
//     let request = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let response = await request.json()
//     console.log("ini data dari luar guys: ", response)
// }
// console.log(getData())