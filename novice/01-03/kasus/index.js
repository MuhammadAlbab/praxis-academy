function kasus1(){
    console.log("KASUS-1") // RAMALAN
    function tellFortune(x, y, z, n) {
        var future = 'Kau akan menjadi ' + x + ' di ' + y + ' dan menikah dengan ' + z + ' ' + ' memiliki ' + n + ' anak.';
        console.log(future);
    }
    tellFortune('PILOT', 'USA', 'JUSTIN', 3);
    tellFortune('AKTOR', 'KORSEL', 'NARUTO', 2);
    tellFortune('PENYANYI', 'KONOHA', 'SASUKA', 1);
}
kasus1()
console.log("")

function kasus2(){
    console.log("KASUS-2") // KALKULATOR UMUR ANJING
    function calculateDogAge(n){
        n *= 7
        var umurAjg = "Umur anjing mu yaitu " + n + " tahun"
        console.log(umurAjg)
    }
    calculateDogAge(4)
    calculateDogAge(2)
    calculateDogAge(1)
}
kasus2()
console.log("")

function kasus3(){
    console.log("KASUS-3") // KALKULATOR SUPPLY MAKANAN
    function calculateSupply(age, amountPerDay){
        var maxAge = 65 - age
        var year = 365 * amountPerDay 
        total = maxAge * year + (" Unit makanan")
        console.log("kamu akan butuh " + total + " untuk bertahan sampai " + maxAge +" tahun")
    }
    calculateSupply(18, 3)
    calculateSupply(25, 3)
    calculateSupply(40, 3)
}
kasus3()
console.log("")

function kasus4(){
    console.log("KASUS-4") // The Geometrizer
    function calcCircumFrence(radius){
        const PI = 3.14
        let circumferenceOfCircle = 2 * PI * radius
        console.log("Circumference adalah :" + circumferenceOfCircle)
        function calcArea(){
            var area = PI * radius * radius
            console.log("Area adalah :" + area)
        }
        calcArea()
    }
    calcCircumFrence(100)
}
kasus4()
console.log("")

function kasus5(){
    console.log("KASUS-5") // Temperatur celcius.farenheit konversi
    function calciusToFahrenheit(){
        let celsTemp = 20
        let farTemp = (celsTemp * 9/5) + 32
        console.log(celsTemp + "c adalah " + farTemp + "f")
    }
    calciusToFahrenheit()

    function fahrenheitTOCelcius(){
        let farTemp = 68
        let celsTemp = (farTemp - 32) * 5/9
        console.log(farTemp + "f adalah " + celsTemp + "c")
    }
    fahrenheitTOCelcius()
}
kasus5()