function kasus1(){
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
    
    kasus2() 
    console.log("")

    kasus3() 
    console.log("")

    kasus4() 
    console.log("")

    kasus5() 
    console.log("")

    kasus6() 
    console.log("")

    kasus7() 
    console.log("")

    kasus8() 
    console.log("")

    kasus9()
    console.log("")

    kasus10()
    console.log("")

    kasus11()
    console.log("")

    kasus12()
}
kasus1()


function kasus2(){
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

function kasus3(){
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

function kasus4(){
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

function kasus5(){
    console.log("KASUS 5")
    for (i = 0; i <=15; i++){
        if ([i] % 2 == 0){
            console.log([i] + " adalah genap")
        }else{
            console.log([i] + " adalah ganjil")
        }
    }
}

function kasus6(){
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

function kasus7(){
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

function kasus8(){
    console.log("KASUS 8")
    function happy_number(num) {
        var m, n ;
        var c = [] ;

        while(num != 1 && c[num] !== true) {
            c[num] = true ;
            m = 0 ;
            while (num > 0) {
                n = num % 10 ;
                m += n * n ;
                num = (num  - n) / 10 ;
            }
            num = m ;
        }
        return (num == 1) ;
    }

    var cnt = 5;
    var num = 1;
    var f5 = ''; 
    while(cnt-- > 0) {
        while(!happy_number(num))
            num++ ;
        f5 = f5+(num + ", ") ;
        num++ ;
    }
    console.log('First 5 happy numbers are : '+f5);
}

function kasus9(){
    console.log("KASUS 9")
    function three_digit_armstrong_number() {
     for (var i = 1; i < 10; ++i) {
       for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k){
              var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
              var plus = (i * 100 + j * 10 +  k);
              if (pow == plus) {     
                 console.log(pow);
                }
             }
           }
        }
      }
    three_digit_armstrong_number();   
}

function kasus10(){
    console.log("KASUS 10")
    var i, j, chr
    for (i = 1; i <= 6; i++){
       for( j = 1; j < i; j++){
        chr = chr+("*")
       }
    console.log(chr)
    chr=""
    }
}

function kasus11(){
    console.log('KASUS 11')
    var a = 2154 //First number
    var b = 458 //Second number 
    var gcd;
    while (a!=b){
        if (a>b){
            a = a -b;
        }else{
            b = b - a;
        }
    }
    gcd = a;
    console.log(gcd);
}

function kasus12(){
    console.log('KASUS 12')
    var sum = 0;
    for (var x = 0; x < 1000; x++){
        if (x % 3 === 0 || x % 5 === 0){
        sum += x;
        }
    }
    console.log(sum);
}