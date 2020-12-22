//Solusi 1
let btnGunung = document.querySelector('#lihat-table')
btnGunung.addEventListener("click", () => { 
    
    const dataGunung = [
            {Nama: "Kilimanjaro", Height: 5895, Place: "Tanzania"},
            {Nama: "Everest", Height: 8848, Place: "Nepal"},
            {Nama: "Mount Fuji", Height: 3776, Place: "Japan"},
            {Nama: "Vaalserberg", Height: 323, Place: "Netherlands"},
            {Nama: "Denali", Height: 6168, Place: "United States"},
            {Nama: "Popocatepetl", Height: 5465, Place: "Mexico"},
            {Nama: "Mont Blanc", Height: 4808, Place: "Italy/France"}
        ]
    
        let table_html = "<table>\n";
        table_html += "\t<tr>\n";
    
        for (let key of Object.keys(dataGunung[0])) {
            table_html += `
                <th>${key}</th>
            `;
        }
    
        for (let mountain of dataGunung) {
            table_html += `
                <tr>
                    <th style="font-weight: lighter">${mountain.Nama}</th>
                    <th style="font-weight: lighter">${mountain.Height}</th>
                    <th style="font-weight: lighter">${mountain.Place}</th>
                </tr>
            `
        }
    
        table_html += "</table>\n";
        document.querySelector("#mountains").innerHTML = table_html
    }
)


//Solusi 2
// const gunung = [
//     {Nama: "Kilimanjaro", Height: 5895, Place: "Tanzania"},
//     {Nama: "Everest", Height: 8848, Place: "Nepal"},
//     {Nama: "Mount Fuji", Height: 3776, Place: "Japan"},
//     {Nama: "Vaalserberg", Height: 323, Place: "Netherlands"},
//     {Nama: "Denali", Height: 6168, Place: "United States"},
//     {Nama: "Popocatepetl", Height: 5465, Place: "Mexico"},
//     {Nama: "Mont Blanc", Height: 4808, Place: "Italy/France"}
// ]

// function solusi2(data){
//     let table = document.createElement('table')
//     let row = document.createElement('tr')
//     let fields = Object.keys(data[0])
//     fields.forEach(element => {
//         let tableHead = document.createElement('th')
//         tableHead.appendChild(document.createTextNode(element))
//         row.appendChild(tableHead)
//     });
//     table.appendChild(row)

//     data.forEach(element =>{
//         let row = document.createElement('tr')
//         fields.forEach(element2 => {
//             let cell = document.createElement('td')
//             cell.appendChild(document.createTextNode(element[element2]))
//             if (typeof element[element2] == 'number'){
//                 cell.style.textAlign = 'right'
//             }
//             row.appendChild(cell)
//         })
//         table.appendChild(row)
//     })
//     return table
// }
// document.querySelector('#mountains').appendChild(solusi2(gunung))