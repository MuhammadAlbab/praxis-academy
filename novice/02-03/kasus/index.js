const axios = require('axios').default

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(dataPost => dataPost.data)
// .then(dataPost.data forEach(element => {

//     })
//     cconsole.log("Id :", element.id)
// }


async function getData(){
    const dataUser = await axios.get("https://jsonplaceholder.typicode.com/users")
    dataUser.data.forEach(element => {
        console.log("Email :", element.email)
        console.log("Id :", element.id)
        console.log("Name :", element.name)
    })
}
getData()