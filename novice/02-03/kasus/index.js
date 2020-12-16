const axios = require('axios').default

//Async / Await
async function getData(){
    const dataUser = await axios.get("https://jsonplaceholder.typicode.com/users")
    dataUser.data.forEach(element => {
        console.log("Email :", element.email)
        console.log("Id :", element.id)
        console.log("Name :", element.name)
    })
}
getData()


//Promise
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(dataPost => dataPost.data)
.then(dataPost => {
        dataPost.forEach(element => {
        console.log("Id :", element.id)
        console.log("Title :", element.title)
    })
})