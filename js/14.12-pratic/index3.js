// boolean and operators
// boole = ans деген логических тип данных тру фолс қайтарады
// let isMarried = false
// let isTeenager = true
// let isKazakh = true

// логикалық операторлар 
{/* < > <= >= == != */} // БҰЛ ОПЕРАТОРЛАР ӘРДАЙЫМ ТРУ НЕМЕСЕ ФОЛС ҚАЙТАРАДЫ

// console.log((4 > 3))  //true
// console.log(4 < 3) // false
// console.log(4 <= 3)  // false
// console.log(4 >= 4) // true
// console.log((4 == 3)) //false
// console.log(4 == 4) // true
// console.log(4 != 4) //false /тең емес деген оператор тең болып тұрғандықтан фолс береді
// console.log(4 != 3) //true  / тең емес деген оператор тең емес болғандықтан тру береді

// АРИФМЕТИКАЛЫҚ ОПЕРАТОРЛАР
// // console.log(10 / 4) // 2.5  
// console.log(15 % 2) // 3  27 / 6 *6 -27 = 


// дәреже
// console.log(3 ** (18 % 6))

// radius

// let radius = 100  // лет жазсақ айнымалының мәнін өзгерте аламыз
// // radius = 150 
// // radius = 90
// const pi = 3.14  //конст пен айнымалы құрсақ констың мәні өзгермейді
// let result = pi * radius**2
// console.log(result)

// салмақ табу
// const gravity = 9.8
// let mass = 72
// let result = 9.8 * 72
// console.log(result)
// metr = 100
// m2 = 31400
// console.log(`the weight of a person who weight ${mass} kg is ${result} N`)
// console.log(`the area of a circle with radius ${metr} is ${m2} m2`)


// let temp = 20
// let result = temp * 9/5 + 32
// console.log(`${result} in celcius is  in Faranheit`)


// let minNumber = Math.min(14, 32, 9, 27, 41)
// console.log(minNumber)

// math = Math.ceil (minNumber/745)
// console.log(math)

// let num = Math.floor(Math.random() * 51)
// console.log(num)

// console.log(num + math) 




// HOME WORK
// 1
// let FirstName = 'Akerke'
// let LastName = 'Adikyzy'
// let country = 'Kazakhstan'
// let city = 'Almaty'
// let age = 15
// let isMarried = false
// let year = 2023
// console.log(typeof FirstName)
// console.log(typeof LastName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof year)
// 2
// if ('10' == typeof 10) {
//     console.log('ten')
// } else {
//     console.log('ten emes')

// }

// 3
// if (parseInt('9.8') == typeof 10) {
//     console.log('ten')
// } else {
//     console.log('ten emes')
// }

// 4
// console.log(10 == 10)
// console.log(156 >= 123)
// let isTeenager = true
// console.log(isTeenager)
// // false
// console.log(10 >= 15)
// console.log(562 != 562)
// let isMetis = false
// console.log(isMetis)
// 5
// i = 4 > 3    true
// ii = 4 >= 3  true
// iii = 4 < 3  false
// iv =  4 <= 3 false
// v = 4 == 4   true
// vi = 4 === 4 true
// vii = 4 != 4 false
// viii = 4 !== 4   false
// ix = 4 != '4'    false
// x = 4 == '4' true
// xi = 4 === '4'   false

// let word = 'python'
// console.log(word.length)

// console.log(5 < 5)

// 6
// i 4 > 3 && 10 < 12      //true
// ii 4 > 3 && 10 > 12     //false
// iii 4 > 3 || 10 < 12    //true
// console.log(4 > 3 || 10 > 12) // true
// console.log(!(4 > 3)) // false
// console.log(!(4 < 3)) // true
// console.log(!(false)) // true
// console.log(!(4 > 3 && 10 < 12)) // false
// console.log(!(4 > 3 && 10 > 12)) // true
// console.log(!(4 === '4')) // true


// CLASS WORK

// let x = 5;

// x += 1  // 6  
// x += 6; // 12 болады өйткені 6 деегн мән сақталып қалады 6+6=12 қосамыз тең 12
// x += 18 //30
  
// let y = 9;
// x += y; // x = 39

// y += x  //y = 48

// x *= 2 //78
// x -= y; //30
// y /= 6; //8
// x %= y; // x = x % y = 30 % 8 = 30 - 3 *8 = 6

// z **= 2 //36
// x **= 0.5 // 6 /САННЫҢ 0,5 ДӘРЕЖЕСІ САННЫҢ ТҮБІРІНЕ ТЕҢ!


// == деген еквивалентный мәнін тексереді "1" = 1 true қайтарады  "" = 0 true қайтарады
// === мәнін және типән тексереді деген типін тексереді мысалы стринг пен намбер болса фолс қайтарады '' = 0 фолс қайтарады



// console.log(typeof undefined) // 


// console.log(2 == true)
// console.log(-2 == true)

// if (0) {  // 0 - басқа кез келген сан еквивалентный тру шығарады,  труге равноценный
//     console.log("posetiv")
// }

// if ("") {  // пустой - дан басқа кез келген сөз еквивалентный тру шығарады,  труге равноценный
//     console.log("posetiv")
// }

// let  someVarible
// console.log(typeof someVarible)  // андефайнд деген тип қайтарады өйткені значение бермедік вариблға

// Nagetion

// let check = !(4 > 3)
// console.log(check)  // false қайтарады
//  мәнін керсінше ауыстырады

// let isLightOn = true
// let isLightOff = !isLightOn           // false
// !isLightOn
// console.log(isLightOn)
// isLightOn = !isLightOn
// console.log(isLightOn)

// енд бірінші орындалады 
 // && ampersand operator example

// const check = 4 > 3 && 10 > 5         // true && true -> true
// const check = 4 > 3 && 10 < 5         // true && false -> false
// const check = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// const check = 4 > 3 || 10 > 5         // true  || true -> true
// const check = 4 > 3 || 10 < 5         // true  || false -> true
// const check = 4 < 3 || 10 < 5         // false || false -> false



// // Increment Operator + 
// let x = 7;
// --x; //x -= 1; pre-decrement
// console.log(x)
// ++x; // x += 1; pre-increment
// console.log(x) //7

// // console.log(--x); //6
// console.log(++x); //7
// console.log(x++); //7
// console.log(x++); //7


// Pre-increment
// let count = 0
// console.log(++count)        // 1  пре де 
// console.log(count)          // 1

// // Post-increment
// let count = 0
// console.log(count++)        // 0
// console.log(count)          // 1

// Ternary Operators

// true  болған кезде ? сұрақ белгісі орындалады
// фолс болса кос нүкте

// let isRaining = 10
// // temp > 0 ? temp++ : temp--; //5 бірақ 6
// // console.log(--temp)  //5 точно
// // console.log(temp++)  //5 бірақ 6
// // console.log(temp--) //6 бірақ 5
// // console.log(temp)  //5 точно

// temp > 0 ? temp++ : temp--; // 7 бірақ 8
// console.log(temp++) //8 бірақ 9
// console.log(temp--) //9 бірақ 8
// console.log(++temp) //9 
// console.log(--temp) //8
// console.log(temp) //8

// temp > 0 ? --temp : temp--;  //9
// console.log(temp--) //9 but 8
// console.log(++temp) //9
// console.log(temp--) //9 but 8
// console.log(++temp) //9
// console.log(temp--) //9 but 8
// // 8
// let isRainingr= 4

// temp > 6? --temp : temp--;  //4 yj 3
// console.log(temp--) //3 yj 2
// console.log(++temp) //3
// console.log(temp++) //3 yj 4
// console.log(++temp) //5
// console.log(temp--) 5 yj 4
// console.log(temp--) 4 yj 3

// HOME WORK 
// 1
// а) true  || false -> true (True)
// б) true && false -> false (False)
// в) false || false -> false (False)

// 2
// а) x / z = False
// b) x && y = false
// d) x && z = False

// 3
// Вычислить значение логического выражения при следующих значениях логических величин А, В и С: А = Истина, В = Ложь, С = Ложь:
// а) не А и В; б) А или не В; в) А и В или С.
// a) a && B = False
// B) a / B = True
// d) A && B / C = False

// 4
// a) X && Y = FALSE
// B) X / Y = TRUE
// C) X / Y && Z = TRUE

// 5
// Вычислить значение логического выражения при следующих значениях логических величин А, В и С: А = Истина, В = Ложь, С = Ложь:
// а) А или В и не С; 
// г) А и не В или С;
// б) не А и не В; 
// д) А и (не В или С);
// в) не (А и С) или В; 
// е) А или (не (В и С)).

// A / B && A = TRUE
// A && A / C = TRUE
// C && C = FALSE
// A && (A / C) = TRUE
// (B && C) / B = FALSE
// A / (A (B && C)) = TRUE

// 6
// Вычислить значение логического выражения при следующих значениях логических величин X, Y и Z: X = Ложь, Y = Ложь, Z = Истина:
// а) X или Y и не Z;
// г) X и не Y или Z;
// б) не X и не Y; 
// д) X и (не Y или Z);
// в) не (X и Z) или Y; 
// е) X или (не (Y или Z)).

// X / Y && X = FALSE
// X && Z / Z = TRUE
// Z & Z = TRUE
// X && (Z / Z) = FALSE
// (Y & Z) / Y = FALSE
// X / (X (Y / Z) = TRUE

// 7
// Вычислить значение логического выражения при следующих значениях логических величин А, В и С: А = Истина, В = Ложь, С = Ложь:
// а) А или не (А и В) или С;
// б) не А или А и (В или С);
// в) (А или В и не С) и С.

// A / (B && A) / A = TRUE
// B / B && (A / A) = FALSE
// (A / B & A) && C = FALSE

// 8
// Вычислить значение логического выражения при следующих значениях логических величин X, Y и Z: X = Ложь, Y = Истина, Z = Ложь:
// а) X и не (Z или Y) или не Z;
// б) не X или X и (Y или Z);
// в) (X или Y и не Z) и Z.

// X && (Y / Z) / Y = TRUE
// Y / Y && (Z / Y) = FALSE
// (X / Y && Y) && Z = FALSE

// 9
// Вычислить значение логического выражения при следующих значениях логических величин X, Y и Z: X = Истина, Y = Ложь, Z = Ложь:
// а) не X или не Y или не Z;
// б) (не X или не Y) и (X или Y);
// в) X и Y или X и Z или не Z.

// Y / X / X = TRUE
// (Y / X) && (X / Y) = TRUE
// X && Y / X && Z / X = TRUE

// 10
// Вычислить значение логического выражения при следующих значениях логических величин А, В и С: А = Ложь, В = Ложь, С = Истина:
// а) (не А или не В) и не С;
// б) (не А или не В) и (А или В);
// в) А и В или А и С или не С.

// (C / C) & A = FALSE
// (C / C) && (A / B) = FALSE
// A && B / A && C / A = FALSE 



// let temp = 20
// temp > 0 ? temp++ : --temp;  //
// console.log(temp--) //21
// console.log(temp++) //20
// console.log(++temp) //22
// console.log(--temp) //21
// console.log(temp)

// alert("heloo world") //төбесінен сообщение сияқты келеді

// let name = prompt("Enter your name")
// alert(`hello ${name}`)

// let year = prompt("enter your year")
// alert(`You are somthing years old ${year-2023}`)

// let a = Number(prompt("a"))
// let B = Number(prompt("b"))
// alert(`${a} * ${B} = ${a * B}
//     ${a} / ${B} = ${a - B}
//     ${a} - ${B} = ${a - B}`)
// prompt инпут еңгізу
// намьер деген пайтондағы инт сияқты санға айналдырып аламыз намбер арқылы промт жазған затты стринг яғни текст

// let agree = confirm("are you sure to delete")

// agree
// ? alert ("deleted")
// : alert("Not deleted")
// confirm true or false қайтарды typeoff boolean

// let age = prompt("are you adult")
// age > 18
// ? alert("daus bere alasuz")
// : alert("daus bere almaisuz")


// hw
// // 1 
// let base = Number(prompt("base"))
// let height = Number(prompt("enter height"))
// alert(`${0.5} * ${base} * ${height} = ${0.5 * base * height}`)

// 2
// let a = Number(prompt("a"))
// let b = Number(prompt("b"))
// let c = Number(prompt("c"))
// alert(`${a} + ${b} + ${c} = ${ a + b +c}`)

// 3
// let islength = Number(prompt("lenght"))
// let iswith = Number(prompt("wit"))
// alert(`${islength} * ${iswith} = ${islength * iswith}`)
// alert(` 2 * ${islength} + ${iswith} = ${2 * islength + iswith}`)

// 4
// let r = Number(prompt("r"))
// let pi = 3.14
// alert(`${pi} * ${r} * ${r} = ${pi * r * r}`)
// alert(` 2 * ${pi} * ${r} = ${2 * pi * r}`)

// // 5
// let m = 2
// let x = 2 / m
// let y = -2
// alert(`slope: ${m}
// x: ${x}
// y: ${y}`)

// // 6
// let x1 = 2
// let y1 = 2
// let x2 = 6
// let y2 = 10
// let o = (y2 - y1) / (x2 - x1)
// alert(`Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)${o}`)

// 7
// біріншісі оңай екіншісі нормально

// 8
// y (y = x2 + 6x + 9)

// let x = Number(prompt("x"))
// let h = 2
// let k = 6
// let o = 9
// alert(`${x}*${h} + ${k}${x} + ${o} = ${x * h + 6 * x + 9}`)

// 9
// let h = Number(prompt("Enter hours"))
// let r = Number(prompt("Enter rate per hour"))
// alert(h * r)

// 10
let name = prompt("name")
name.length > 7
? alert(" name is short.")
: alert("name is long ")