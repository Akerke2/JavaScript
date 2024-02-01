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

// function subtract() {
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
//         return "even"   
// }   else{
//     return "odd"
// }
// }
// console.log(even(5))


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

// // 13
// function bmi (weightInKg, height) {
//     u = weightInKg / (height * height)
//     if (u < 18.5) {
//         return (`Underweight: BMI is less ${u}`)
//     }
//     n =  weightInKg / (height * height)
//     else if(n < 24.9) {
//         return (`Normal weight: BMI is ${n} to 24.9`)
//     }
//     o = weightInKg / (height * height)
//     if (o < 29.9) {
//         return (`Overweight: BMI is ${o}`)
//     }
//     b = weightInKg / (height * height)
//     else if(b < 30) {
//         return (`Obese: BMI is ${b} or more`)
//     }
// }
// console.log(bmi(99, 29))

// function sum(num1, num2) {
//     return num1 + num2;
// }
// sum(60, 40) // 100 осылай жазу 100 деп жаза салғанмаен Тең
// console.log(sum(60, 40))

// function multiply(num1, num2) {
//     return num1 * num2;
// }
// console.log(multiply(15, 56))



// function divide(num3, num4) {
//     return num3 / num4;
// }
// console.log(divide(15, 3))


// function subtract(num6, num7) {
//     return num6 - num7
// }
// console.log(subtract(2, 2))



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
// function solveQuadEquation(a, x, b, c) {
//     return sum(multiply(a, x ** 2), multiply(b, x), c)
// }
// console.log(solveQuadEquation(2, 2, 2, 2)) //8 + 4 + 2

// // 3
// // асты астына шығару үшін 
// function printArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// let lorray = [1, 2, 3, 4, 5];
// console.log(printArray(lorray)); 

// // 4
// // датаны шығару үшін 
// new Date()
// function showDateTime() {
//     let currentDate = new Date();

//     let day = currentDate.getDate();
//     let month = currentDate.getMonth() + 1;
//     let year = currentDate.getFullYear();

//     let hours = currentDate.getHours();
//     let minutes = currentDate.getMinutes();

//     day = day < 10 ? '0' + day : day;
//     month = month < 10 ? '0' + month : month; // тернарный оператор
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;

//     let formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
//     console.log(formattedDateTime);
// }

// console.log(showDateTime())

// // LEVEL1
// // 15 
// // ең үлкен санды алу үшін 
// function findMax(num1, num2, num3){
//     let max = Math.max(num1, num2, num3)
//     return max
// }
// console.log(findMax(40, 10, 30))




// 17.01.24
// периметр табу 3 бұрыштың  ЕГер кабыргасы бирДЕЙ БОЛСА 1 ГАНА ПАРАМЕТРАЛАМЫЗ егЕР Б3РДЕ БОЛМАСА ПО УСМАТРЕНИЮ  
// function p (num1) {
//     return num1 + num1 + num1;
// }
// console.log(p(5))


// function even (num2) {
//     if (num2 % 2 == 1) {
//         return num2 * 2
//     }else{
//         return 0
//     }
// }
// console.log(even(5))

// function solve(a, b, c) {
//     let x1 = (-b + Math.sqrt(b**2 - 4 * a * c)) / 2 * a
//     let x2 = (-b - Math.sqrt(b**2 - 4 * a * c)) / 2 * a
//     return x1, x2
// }

// function sum (num1, num2) {
//     return num1 + num2;
// }
// Classic function

// const sum = function(num1, num2) {  // const
//     return num1 + num2;
// }
// console.log(sum(1,5))

// const multiply = function(num3, num4) {
//     return num3 * num4;
// }
// console.log(multiply(5,6))

// // ex

// const num = (num5, num6) => {
//     return num5 + num6
// }
// console.log(num(2, 2))

// // Arrow function


// let divide = (num1, num2) => {
//     return num1 / num2
// }
// console.log(divide(15, 3))


// let o = sum(divide(45, 5), multiply(7, 4))
// console.log(o)

// const lastname = (fname, lname) => {
//     return `hello, ${fname}, ${lname}`;
// }
// console.log(lastname("Akerke", "Adikyzy"))




// HW level2 7ex, aroow, 8 ex,arrow, 9 ex,arraw
// 1
// ARROW
// let capiTalizeArray = arr => {
//     let o = []
//     for (const a of arr) {
//         o.push(a.toUpperCase())
//     }
//     return o
// }
// const c = ["capitalizeArray"]
// console.log(capiTalizeArray(c))

// ex
// let capiTalizeArray = function (arr) {
//     return arr.toUpperCase()
// }
// let text = "capitalizeArray"
// console.log(capiTalizeArray(text))

// // 2
// // ex
// let additem = function(item) {
//     let newitem = []
//     newitem.push(item)
//     return newitem
// }
// let newd = "water"
// console.log(additem(newd))

// arrow
// let additem = (item) => {
//     let mas = []
//     mas.push(item)
//     return mas
// }
// console.log(additem("Pretty"))

// // 3
// // exx
// let removeItem = function(index, text) {
//     text.splice(index, 1);
//     return text
// }
// let fruits = ["apple", "orange", "mango"]
// let indexo = 1

// let aire = removeItem(indexo, fruits)
// console.log(aire)

// // aroow
// let removeItem = (index, text) => {
//     text.splice(index, 2)
//     return text
// }                                       
// let fruts = ["mango", "papais", "banana"]
// let indexo = 2
// let j = removeItem(indexo, fruts)
// console.log(j)


// 08.01.24

// let j = (num1, num2) => {
//     return num1 + num2
// }
// console.log(j(5,6))


// let sum = (num1, num2, num3, num4) => { // 4 san kosu ushun
//     return num1 + num2 + num3 + num4
// }
// console.log(sum(5, 5, 5, 5))


// let sums = function(num1, num2, num3) { //expresion
//     return num1 + num2 + num3
// }
// console.log(sums(5, 5, 5))

// const sum = (...nums) => { // қанша параметр аргумент жазғымыз келеді сонша жазамыз
//     let sum1 = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum1 += nums[i]
//     }
//     return sum1
// }
// console.log(sum(5,6))


// "for of" ONLY MASSIV 

// let capitalize = (...ca) => {
//     let capitals = []
//     for (let i of ca) {
//         capitals.push(i)
//     }
//     return capitals
// }
// console.log(capitalize("Almaty", "Astana", "Shumkent"))


let capitalize = (...cap) => {
    for(let i = 0; i < cap.length; i++){
        cap[i] = cap[i].charAt(0).toLocaleUpperCase() + cap[i].slice(1)
    }
    return cap
}
console.log(capitalize("Almaty", "Astana", "Shumkent"))


// capitalize("Almaty", "Astana", "Shumkent")


// САНДАРДЫҢ ОРТАША МӘНІ

// let average = (...nums) => {
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum / nums.length
// }
// console.log(average(6, 2))


// let max = (...num) => {
//     let o = num[0]
//     for (let i = 1; i < num.length; i++) {
//         if (o < num[i]) {
//             o = num[i]
//         }
//         else if (num == 0) {
//             return -1
//         }
//     }
//     return o
// }
// console.log(max(54, 58, 562, 4))


// дефолтный аргумент 
// function grte(firstName, lastName = "messi")
// console.log(grte("kilian"))

// ЕСЛИ 2 ЗАНАЧЕНИЕ ЕНГІЗУ КЕРЕК БОЛСА ТЕК 1 ҒАНА ЗНАЧЕНИ ЕҢГІЗСЕ 

// let sum = (num1, num2 = 0) => { // егер тек 1 элемент еңгізсек сол элементтің өзі шығады
//     return num1 + num2
// }
// console.log(sum(5))

// let city = (names, cit = "Almaty") => {
//     return `i am ${names}, i live in ${cit}`
// }
// console.log(city("Akerke"))


// Максимальный санды шығарады
// let max = (...num) => {
//     let nol = num[0]
//     for (let i = 1; i < num.length; i++) {
//         if (nol < num[i]) {
//             nol = num[i]
//         } else if (nol == 0) {
//             nol = -1
//         }
//         return nol
//     }
// }
// console.log(max(45, 748, 19))


// // // РАБОТА С ТЕКСТАМ
// let  j = (name, lastname = "Adikykyzy") => {
//     return `I "m ${name} ${lastname}`
// }
// console.log(j(`Akerke`))



// ПОДГОТОВКА К ТЕСТТУ

// let nums = (num1, num2) => {
//     return (num1 + num2) * 3
// }
// console.log(nums(2, 2))

// // 2
// let fulname = (fname, lname) => {
//     return `Hello ${lname} ${fname} `
// }
// console.log(fulname("Akerke", "Adikyzy"))

// // 3
// let numbers = (...num) => {
//     let m = 0
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 2 == 0) {
//             m += num[i]
//         }
//     }
//     return m
// }
// console.log(numbers(15, 16, 12, 2))

// // 4
// let start = (massiv) => {
//     let m = []
//     for (let i of massiv) {
//         if (i.startsWith('H')) {
//             m.push(i);
//         }
//     } 
//     return m;
// }
// console.log(start(['apple', 'Home', 'work'])) //КОНСОЛЬҒА МАСИВПЕН ЖАЗУДЫ ҰМЫТАЙМЫЗ!!!

// // 5
// let logo = (logicol) => {
//     let m = []
//     for (let i of logicol) {
//         if (i == true) {
//             m.push(1)
//         } else{
//             m.push(0)
//         }
//     } return m 
// }
// console.log(logo([true, false, undefined, null, true]))

// // 6
// let d = (name, country = `Kazakhstan`) => {
//     return `Hello i'm ${name} and i live in ${country}`
// }
// console.log(d("Akerke"))

// // 7
// let f = (...string) => {
//     focus = string.join(" ")
//     return focus
// }
// console.log(f("smsmm", "smsms", "ldl"))





// let sum = (num1, num2) => {
//     return (num1 + num2) * 3
// }
// console.log(sum(5, 5))

// // 2
// let fullName = (sname, name) => {
//     return `Hello ${sname} ${name}`
// }
// console.log(fullName("Adikyzy", "Akerke"))

// // 3
// let even = (...nums) => {
//     let massiv = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 0){
//             massiv += nums[i]
//         }
//     } return massiv
// }
// console.log(even(5, 2, 8))

// // 4
// let st = (str) => {
//     let m = []
//     for (let i of str) {
//         if (i.startsWith('H')) {
//             m.push(i)
//         }
//     } return m 
// }
// console.log(st(["Home", "Alone", "Harry"]))

// // 5
// let tr = (bol) => {
//     let mas = []
//     for (let i = 0; i < bol.length; i++) {
//         if (bol[i] == true) {
//             mas.push(1)
//         } else {
//             mas.push(0)
//         }
//     } return mas
// }
// console.log(tr([true, false, undefined, true]))

// // 6
// let dan = (name, country = "Kazakhstan") => {
//     return `Hello i' m ${name} and i live in ${country}`
// }
// console.log(dan("Akerke"))

// // 7
// let fn = (...string) => {
//     let vs = string.join(" ")
//     return vs
// }
// console.log(fn("apple", "orange", "meet"))

start