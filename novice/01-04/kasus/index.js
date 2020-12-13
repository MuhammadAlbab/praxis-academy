function kasus1(){
    var matrixOne = [
        [12, 45, 90],
        [90, 23, 12],
        [30, 22, 81],
        [9, 23,  4]
    ]

    var matrixTwo = [
        [10, 23, 40],
        [90, 23, 12],
        [30, 22, 81],
        [9, 23,  4]
    ]

    function jumlah(){
        console.log("matrix-1")
        for (let entry of matrixOne)
        console.log(entry)
        console.log("")
        
        
        console.log("matrix-2")
        for (let entry of matrixTwo)
        console.log(entry)
        console.log("");

        console.log("hasil matrix-1 + matrix-2");
        var hasil = []
        hasil = new Array( matrixOne.length )
        for ( var i = 0; i < hasil.length; i++ ) {
            hasil[ i ] = new Array( matrixOne[ i ].length )
            for ( var j = 0; j < hasil[ i ].length; j++ ) {  
                hasil[ i ][ j ] = matrixOne[ i ][ j ] + matrixTwo[ i ][ j ]
            }
        }
        console.log(hasil)
        return hasil
        
    }
    jumlah()
}
kasus1()
console.log("")

function kasus2(){

}
kasus2()