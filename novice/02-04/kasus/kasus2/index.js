//matiin kalau akses di browser
// const axios = require('axios').default; 

// class SalahUrl extends Error {
//     constructor(message) {
//       super(message); // (1)
//       this.name = "SalahUrl"; // (2)
//     }
//   }
let getContainer = document.getElementById('container')

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(response => {
        response.forEach(element => {
        var createDataEl = document.createElement('div')
        var dataContent = `
            <div> ${element.name} </div>
            <div> ${element.id} </div>
        `
        createDataEl.innerHTML = dataContent
        getContainer.append(createDataEl)
        //
        // console.log("Id :", element.id)
        // console.log("Name :", element.name)
    }
    ) } )
    .catch(err => {
        alert(err)
        //
        // console.log(err);        
    })