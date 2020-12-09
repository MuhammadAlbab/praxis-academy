//Pengendalian alur
//if
function ifExample(){
    console.log("IF Example")
    i = 5
    if ( i === 5){
        console.log("benar, i sama dengan:",i)
    }else if(i < 3){
        console.log("benar, i lebih kecil dari 3")
    }
    else{
        console.log("tidak ada kondisi yang terpenuhi")
    }
}
ifExample()
console.log("")

//switch
function switchExample(){
    console.log("SWITCH EXAMPLE")
    let i = 3
    switch (i) {
        case 1:
            console.log("Apel")
            break;
        case 2:
            console.log("Jeruk")
            break;
        case 3:
            console.log("Mangga")
            break;
        case 4:
            console.log("Anggur")
            break;    
        default:
            console.log("masukan index buah")
            break;
    }
}
switchExample()
console.log("")


//Iterasi dan looping
//for
function forLooping(){
    console.log("FOR LOOPING")
    let mobil = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    let i
    for (i = 0; i < mobil.length; i++) {
        console.log("Jumlah mobil:",i)
        console.log(mobil[i])
    }
}
forLooping()
console.log("")

//while
function whileLooping(){
    console.log("WHILE LOOPING")
    let biasa = 0
    let special = 0
    while (biasa < 5){
        biasa++
        special += biasa
        console.log(biasa, special)
    }
}
whileLooping()
console.log("")

//do while
function doWhile(){
    console.log("DO WHILE LOOPING")
    let i=0
    do{
        i += 5;
        console.log(i);
    } while (i < 40);
}
doWhile()
console.log("")

//break
function breakExample(){
    console.log("BREAK EXAMPLE: index 5, break di 3")
    let i = 0
    let a = ["hey", "hallo", "laper", "ngantuk", "hehe"]
    while ( i < a.length){
        console.log(a[i])
        i++
        if (i == 3){
            break
        }
    }   
}


breakExample()
console.log("")

//continue
function continueExample(){
    console.log("CONTINUE EXAMPLE")
    let i = 0
    let a = 0
    while (i < 5){
        i++
        if (i === 3){
            continue
        }
        a += i
        console.log(a)
    }
}
continueExample()