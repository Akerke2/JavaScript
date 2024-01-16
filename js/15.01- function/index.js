// // 4 
// console.log(4 + 5)
// console.log(42 + 45)
// console.log(4452 + 5478)
// console.log(254 + 255)


// function sum() {
//     console.log(4 + 5)
// }
// sum();
// функция шақырмайынША ІСТЕМЕЙДӘ

// function sumtract() {
//     console.log(7-2)
// }
// sumtract();

// function multiply() {
//     console.log(456 * 596)
// }
// multiply() ;


// function divide () {
//     console.log(346 / 245)
// }

// divide();


// function sum(num1, num2) { // кез келген санды алып қоса алу үшін АРГУМЕНТ ДЕП АТАЛАДЫ
//     console.log(num1 + num2)
// }
// sum(789, 345);  

// function subtract(num3, num4) {
//     console.log(num3 - num4)
// }
// subtract(15, 5)

// function divide(num5, num6) {
//     console.log(num5 / num6)
// }
// divide(15,18)


// function kub(num1) {
//     console.log(num1**3)
// } 
// kub(2);

// function kB (num4) {
//     console.log(num4 **2)
// }
// kB(2)

// function even(num1) {
//     if (num1 % 2 === 0){
//         console.log("even")
// }   else{
//     console.log("odd")
// }
// }
// even(2)


// function odd(num1) {

//     console.log(num1 % 2 === 0 ? "even" : "odd")  //тернарный оператор ? ЖӘНЕ : АРҚЫЛЫ ШЫҒАРАМЫЗ 1 ғана консоль жазу арқылы
// }
// odd(3)

// function degree(number, degree) {
//     console.log(number**degree)
// }
// degree(4, 6)



// function sumOFEven(start, end) {
//     let o = 0
//     for(let i = start; i < end; i++) {
//         if (i % 2 == 0) {
//             o += i
//         }

//     }
//     console.log(o)
// }
// sumOFEven(0, 100)

// HW
// 1
// function fullName() {
//     console.log("Akerke")
// } 
// fullName()

// // 2
// function fullName(firstName, lastName) {
//     firstName = "Akerke"
//     lastName = "Adikyzy"
//     console.log(firstName, lastName)
// }
// fullName()

// // 3
// function addNumbers(num1, num2) {
//     console.log(num1 + num2)
// }
// addNumbers(5,6)

// // 4
// function areaOfRectangle(lenght, width) {
//     console.log(`area = ${lenght * width}`)
// }
// areaOfRectangle(5, 2)

// 5
// function perimeterOfRectangle(lenght, width) {
//     console.log(2 * (lenght + width))
// }
// perimeterOfRectangle(2, 2)

// // 6
// function volumeOfRectPrism (lenght, width, height) {
//     console.log(lenght * width * height)
// }
// volumeOfRectPrism(2, 2, 2)

// // 7
// function areaOfCircle(p, r) {
//     console.log(p * r * r)
// }
// areaOfCircle(5, 5)

// // 8
// function circumOfCircle(r) {
//     console.log(2 * 3.14 * r)
// }
// circumOfCircle(5)

// // 9
// function density(mass, volume) {
//     console.log(mass / volume)
// }
// density(16, 2)

// // 10
// function speed(time, distance) {
//     console.log(distance / time)
// }
// speed(5, 5)



// 16-01-24
// // 11
// function  weight(mass, gravity) {
//     console.log(mass * gravity)
// }
// weight(2, 4)

// // 12
// function convertCelsiusToFahrenheit (oC) {
//     console.log((oC * 9/5) + 32)
// }
// convertCelsiusToFahrenheit(5)

// 13
// function bmi (weightInKg, height) {
//     u = weightInKg / (height * height)
//     if (u < 18.5) {
//         console.log(`Underweight: BMI is less ${u}`)
//     }
//     n =  weightInKg / (height * height)
//     (n < 24.9) {
//         console.log(`Normal weight: BMI is ${n} to 24.9`)
//     }
//     o = weightInKg / (height * height)
//     if (o < 29.9) {
//         console.log(`Overweight: BMI is ${o}`)
//     }
//     b = weightInKg / (height * height)
//     if (b < 30) {
//         console.log(`Obese: BMI is ${b} or more`)
//     }
// }
// bmi(99, 29)

function sum(num1, num2) {
    return num1 + num2;
}
sum(60, 40) // 100 осылай жазу 100 деп жаза салғанмаен тең
console.log(sum(60, 40))

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(15, 56))



function divide(num3, num4) {
    return num3 / num4;
}
console.log(divide(15, 3))


function subtract(num6, num7) {
    return num6 - num7
}
console.log(subtract(2, 2))



// let omg = divide(sum(534, 678), multiply(456, 12))
// console.log(omg)

// let res1 = multiply(subtract(12, 56), sum(57, 7))
// let res2 = divide(sum(45, 9), subtract(34, 21))
// result = sum(res1, res2)
// console.log(result)


// function doubledSum (num1, num2) {
//     return multiply(sum(num1, num2),2)
// }
// console.log(doubledSum(2, 2))


// function doubledSum (num1, num2) {
//     return divide(subtract(num1, num2),3)
// }
// console.log(doubledSum(30, 3))

// 14
// function checkSeason(month) {
//     if (month == 1 || month == 2 ||month == 12) {
//         return `winter`
//     }
//     else if (month == 3|| month == 4|| month == 5) {
//         return "spring"
//     }
//     if (month == 6|| month == 7|| month == 8) {
//         return("summer")
//     }
//     else if (month == 9|| month == 10|| month == 11) {
//         return("outn")
//     }
// }console.log(checkSeason(5))



// function date(day, month, year) {
//     let birthday = new Date(year, month -1, day)
//     let now = new Date();
//     let years = (now.getTime() - birthday.getTime()      )(1000 * 60 * 60 * 24 * 30)

// }

// level2 1-4 \level1 15 

// HW 
// ax + by + c = 0
// function arr(a, x, b, y, c) {
//     return sum(multiply(a,x), sum(multiply(b,y),c))
// }
// console.log(arr(2, 2, 2, 2, 2))

// 2
// ax2 + bx + c = 0.
function solveQuadEquation(a, x, b, c) {
    return sum(multiply(a, x ** 2), multiply(b, x), c)
}
console.log(solveQuadEquation(2, 2, 2, 2)) //8 + 4 + 2

// 3
// асты астына шығару үшін 
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
let lorray = [1, 2, 3, 4, 5];
printArray(lorray);

// 4
// датаны шығару үшін 
new Date()
function showDateTime() {
    let currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month; // тернарный оператор
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
    console.log(formattedDateTime);
}

console.log(showDateTime())

// LEVEL1
// 15 
// ең үлкен санды алу үшін макснамберсіз
function findmax (num1, num2, num3) {
    if (num1 >= num2 && num2 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return b;
    }
    else {
        return num3
    }

}
console.log(findmax(5, 6, 7))