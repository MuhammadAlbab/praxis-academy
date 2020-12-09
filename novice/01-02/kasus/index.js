function findLarger(){
    console.log("KASUS 1")
    i = 5
    j = 10
    if (i > j){
        console.log("Yang terbesar dari "+ i +" dan " + j+" adalah " + i)
    }else if(j > i){
        console.log("Yang terbesar dari "+ i +" dan " + j+" adalah " + j)
    }else{
        console.log("Nilai " + i + " dan " + j + " adalah sama" )
    }
    console.log("")
    
    findSign() //KASUS-2
    console.log("")

    sortNumber() //KASUS-3
    console.log("")

    largeOfFive() //KASUS-4
    console.log("")

    evenOdd() //KASUS-5
    console.log("")

    avgMarksStudents() //KASUS-6
    console.log("")

    iteratesInteger() //KASUS-7
    console.log("")

    happyNumber() //KASUS-8
    //console.log("")
}
findLarger() //KASUS-1


function findSign(){
    console.log("KASUS 2")
    x = 3
    y = -7
    z = 2
    if (x>0 && y>0 && z>0){
        alert("The sign is +");
    }else if (x<0 && y<0 && z<0){
        console.log("The sign is +");
    }else if (x>0 && y<0 && z<0){
        console.log("The sign is +");
    }else if (x<0 && y>0 && z<0){
        console.log("The sign is +");
    }else{
        console.log("The sign is -");
    }
}

function sortNumber(){
    console.log("KASUS 3")
    let x,y,z
    x = 0
    y = -1
    z = 4
    if (x>y && x>z){
        if (y>z){
            console.log(x + ", " + y + ", " +z);
        }else{
            console.log(x + ", " + z + ", " +y);
        }
    }else if (y>x && y >z){
        if (x>z){
            console.log(y + ", " + x + ", " +z);
        }else{
            console.log(y + ", " + z + ", " +x);
        }
    }else if (z>x && z>y){
        if (x>y){
            console.log(z + ", " + x + ", " +y);
        }else{
            console.log(z + ", " + y + ", " +x);
        }
    } 
}

function largeOfFive(){
    console.log("KASUS 4")
    a=-5;
    b=-2;
    c=-6;
    d= 0;
    f=-1;
    if (a>b && a>c && a>d && a>f){
        console.log(a);
    }else if (b>a && b>c && b>d && b>f){
        console.log(b);
    }else if (c>a && c>b && c>d && c>f){
        console.log(c);
    }else if (d>a && d>c && d>b && d>f){
        console.log(d);
    }else{
        console.log(f);
    }
}

function evenOdd(){
    console.log("KASUS 5")
    for (i = 0; i <=15; i++){
        if ([i] % 2 == 0){
            console.log([i] + " adalah genap")
        }else{
            console.log([i] + " adalah ganjil")
        }
    }
}

function avgMarksStudents(){
    console.log("KASUS 6")
    let studentsMarks = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
    let avgMarks = 0
    let i
    for (i =0; i < studentsMarks.length; i++){
        avgMarks += studentsMarks[i][1]
        var avg = (avgMarks/studentsMarks.length)
    }
    console.log("Nilai rata-rata: " + (avgMarks)/studentsMarks.length)

    if(avg < 60) {
        console.log("Grade : F")
    }else if(avg < 70) {
        console.log("Grade : D")
    }else if(avg < 80) {
        console.log("Grade : c")
    }else if(avg < 90) {
        console.log("Grade : B")
    }else if(avg < 100) {
        console.log("Grade : A")
    }

}

function iteratesInteger(){
    console.log("KASUS 7")
    let i
    
    for (i = 1; i <= 100; i++){      
        if( i % 3 === 0 && i % 5 === 0){
            console.log(i, "FizzBuzz")
        }else if ( i % 3 === 0){
            console.log(i, "Fizz")
        }else if ( i % 5 === 0){
            console.log(i, "Buzz")
        }else{
            console.log(i)
        }
    }
}

function happyNumber(){
    console.log("happynumber")
}