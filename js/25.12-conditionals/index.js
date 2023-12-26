
// иф элс
// let x = 5;
// let y = 7;
// if (!(x > 5) && y % 2 != 0) {
//     console.log("x is greater than 5")
// } else {
//     console.log("x is not greater than 5")
// }


// elif- деген пайтонда 
//  else if - деген елиф пайтондағы  джаскриптегі елсиф 3 вариант


// let name = prompt("Enter your name")

// if (name.startsWith("A")) {
//     if (name.endWith("a")) {
//     console.log("Hello")
// }else{
//     console.log("hi")
// }
// }else if (name.startsWith("B")){
//     console.log("hey")
// }else if (name.startsWith("c")){
//     console.log("Hii")
// }else{
//     console.log("Sorry")
// }

// swith карап к\


// HOME WORK
//1
// let age = Number(prompt("Enter your age"))

// if (age >= 18) {
//     console.log(`You are  old enough to drive`)
// }else{
//     let h = 18 - age
//     console.log(` he needs ${h} to turn 18.`)
// }

// 2
// let myAge = prompt("Enter my age")
// let yourage = prompt("Enter your age")
// let result = myAge < yourage
// let math = yourage - myAge
// if (result) {
//     if (yourage - myAge) {
//         console.log(`You are ${math} years older than me.`)
//     }
// }else{
//     console.log(`I am older ${myAge - yourage} years than you`)
// }

// // 3
// a = 4
// b = 3
// if (a > b) {
//     console.log( 'a is greater than b')
// } else if (b > a) {
//     console.log('a is less than b')
// }

// 4
// let num = Number(prompt("Enter a number"))
// if (num % 2 == 0) {
//     console.log(`${num} is an even number`)
// }else{
//     console.log(`is a odd number`)
// }

// LEVEL2
//1
// let ball = prompt("Ball")
// if (ball >= 80 && ball <= 100) {
//     console.log('A')
// } else if (ball >= 70 && ball < 80) {
//     console.log('B')
// } else if (ball >= 60 && ball < 70) {
//     console.log('C')
// } else if (ball >= 50 && ball < 60) {
//     console.log('D')
// } else if (ball >= 0 && ball < 50) {
//     console.log("f")
// }
// else {
//     console.log('Invalid Score') // Если введен неправильный балл
// }

// // 2
// let a = prompt("Enter month")
// if (a == "September" || a == "October" || a == "November") {
//     console.log("Autumn")
// }
// else if (a == "December" || a == "January" || a == "February") {
//     console.log("Winter")
// }
// if (a == "March" || a == "April" || a == "May") {
//     console.log("Spring")
// }
// else if (a == "June" || a == "July" || a == "August") {
//     console.log("Summer")
// }

// // 3
// let weeks = prompt("What is the day  today?")
// if (weeks == "Monday") {
//     console.log(`${weeks} is a working day`)
// }
// else if (weeks == "Tuesday") {
//     console.log(`${weeks} is working day`)
// }
// if (weeks == "Wednesday") {
//     console.log(`${weeks} is working day`)
// }
// if (weeks == "Thursday") {
//     console.log(`${weeks} is working day`)
// }
// else if (weeks == "Friday") {
//     console.log(`${weeks} is working day`)
// }
// if (weeks == "Saturday") {
//     console.log(`${weeks} is weekend day`)
// }
// else if (weeks == "Sunday") {
//     console.log(`${weeks} is weekend day`)
// }

// LEVEL 3
// let month = prompt("Enter your month")
// if (month == "January") {
//     console.log("January has 31 days.")
// }
// else if (month == "February") {
//     console.log("February has 28 days.")
// }
// if (month == "March") {
//     console.log("March has 31 days.")
// }
// else if (month == "May") {
//     console.log("May has 31 days.")
// }
// if (month == "April") {
//     console.log("January has 30 days.")
// }
// else if (month == "June") {
//     console.log("June has 30 days.")
// }
// if (month == "July") {
//     console.log("July has 31 days.")
// }
// else if (month == "September") {
//     console.log("September has 30 days.")
// }
// if (month == "October") {
//     console.log("October  has 31 days.")
// }
// if (month == "November") {
//     console.log("November has 31 days.")
// }
// if (month == "December") {
//     console.log("December has 31 days.")
// }

// 2
// let year = prompt("Eneter year")
// if (year % 4 == 0) {
//     console.log(" leap year")
// }else{
//     console.log(" this is not leap year")
// }

// x = 24
// y = 33

// if (x++ % 5 != 0 && --y % 4 == 0) {
//     console.log("hi")
// } else {
//     console.log("hey")
// }

// switch



// let grade = 4
// switch(grade) {
//     case 2: console.log("Very bad")
//     break
//     case 3: console.log("Satyfying")
//     break
//     case 4: console.log("good")
//     break
//     case 5: console.log("Very good")
//     break
//     default:
//         console.log("Invalid grade")
// }

// let password = "12sssikdfld"
// switch (password.length >= 8) {
//     case true:
//     default:
// }
 

// let city = "Astana"
// switch (city.length) {
//     case "Astana":
//     case "Almaty":
//     case "Karaganda":
//     default:
// }
// default деген элс


// let city = "Astana"
// switch (city[0]) {
//     case "A":
//     case "B":
//     case "K":
//     default:
// } // КЕЙСТІҢ ІШІНДЕ БОЛУЫ МҮМКІН ВАРИАНТТАР немесе варианттар

// let num = 18

// switch(num == 0) {
//     case true:
//         console.log("the number is zero")
//         break
//     default:
//         switch (num < 0) {
//             case false:
//                 switch (num % 2) {
//                     case 0:
//                         console.log("Even number")
//                         break
//                     default:
//                         console.log("odd number")
//                 }
//                 break
//               default: 
//               console.log("The number is negative")
//             }
// }


// КЕЙС немеСЕ ДЕФУЛТТЫҢ ІШІНЕН АШУ КЕРЕК СУИЧТІҢ ІШІНЕН АШЫЛМАЙДЫ!
//  default: console.log("The number is zero")


// 4,37
// let num = Number(prompt("enter num is -5, 3"))
// if (-5 < num && num < 3) {
//     console.log(`принадлежит`)
// }
// else{console.log("не принадлежит")}


// let y = Number(prompt("enter y"))
// let x = Number(prompt("enter x"))
// if (x > 3 && y > 2) {
//     console.log("hits the spot")
// }
// else{console.log("not hits the spot")}

// b

// let y = Number(prompt("enter y"))
// let x = Number(prompt("enter x"))
// if (x < -2 && y < -4) {
//     console.log("hits the spot")
// }
// else{console.log("not hits the spot")}

// HOME WORK
// let age = +prompt("eneter your age")
// switch (age >= 18) {
//     case true: console.log("You are old enough to drive.")
//     break
// }
// switch (age <= 18) {
//     case true: console.log(`You are left with ${18 - age} years to drive.`)
//     break
// }

// 2
// myage = +prompt("enter myage")
// yourage = +prompt("enter yourage")
// switch (myage > yourage) {
//     case true: console.log(`me are ${myage - yourage}`)
// }
// switch (myage < yourage) {
//     case true: console.log(`You are ${yourage - myage} years older than me.`)
// }

// // 3
// let a = 4
// let b = 3
// switch (a > b) {
//     case true: console.log(`${a}is greater than ${b}`)
// }
// switch (a < b) {
//     case true: console.log(`${b}is greater than ${a}`)
// }
// 4
// num = +prompt("num")
// switch (num % 2 == 0) {
//     case true: console.log("even")
//     break
// default: 
//     switch (num % 2 == 1) {
//         case true: console.log("odd")}
// }

// 5
// LEVEL 2
// let month = prompt("eneter month")
// switch (month) {
//     case "April":
//     case "May":
//     case "March":
//         console.log("Spring")
//         break
//     case 'december':
//     case 'january':
//     case 'february':
//         console.log("Winter")
//         break
//     case 'June':
//     case 'July':
//     case 'August':
//         console.log("Summer")
//         break
//     case 'september':
//     case 'october':
//     case 'november':
//         console.log("Autumn");
//         break;
// }

// let month = prompt("What is the day  today")
// switch (month) {
//     case 'monday':
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//         console.log(`${month} working day`);
//         break;
//     case 'saturday':
//     case 'sunday':
//             console.log(`${month} weekend day`);
//             break;
// }

// LEVEL3
// let month = prompt("Enter a month:")
// switch (month) {
//     case "january":
//         console.log("31 days")
//         break
//     case "february" :
//         console.log("28 days")
//     break
//     case "october":
//         console.log("31 days")
//         break
//     case 'december':
//         console.log(`31 days`);
//         break
//     case 'november':
//         console.log(`30 days`)
//         break;
//     case 'january':
//         console.log(`31 days`);
//         break
//     case 'march':
//         console.log(`31 days`);
//         break
//     case 'may':
//         console.log(`31 days`);
//         break
//     case 'july':
//         console.log(`31 days`);
//         break
//     case 'august':
//         console.log(`31 days`);
//         break
// }

// let year = +prompt("enter year")
// switch (year % 4 == 0) {
//     case true:
//         console.log("Leap year")
//         break
// default: console.log("not leap year")
// }