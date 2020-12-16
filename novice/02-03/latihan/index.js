//callback
function calculate(param1, param2, callback){
    result = param1 + param2
        if (typeof callback == 'function'){
            result = callback(param1, param2)
        } 
        return result
}
console.log("tambah: ", calculate(2, 2))
console.log("bagi: ", calculate(10,2, (a,b) => (a/b)))
console.log("kurang: ",calculate(10,5, (a,b) => (a-b)))


//promise 
function tesPromise(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
            console.log("ini data dari luar guys: ", data)
    })
}
tesPromise()


// fetch async/await
async function getData(){
    let request = await fetch('https://jsonplaceholder.typicode.com/posts')
    let response = await request.json()
    console.log("ini data dari luar guys: ", response)
}
console.log(getData())