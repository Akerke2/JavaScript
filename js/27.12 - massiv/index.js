// let weekdays = ["Monday", "tuesday", "wednesday", "thusday", "Friday", "Saturday", "sunday"]
// console.log(weekdays.length)

// // console.log(weekdays[0].split()) //['Monday']\
// // console.log(weekdays[1].split(" ")) //['tuesday']
// // console.log(weekdays[1].split("")) //['t', 'u', 'e', 's', 'd', 'a', 'y']
// // console.log(weekdays[1].split("e")[1].split("a")) // ['sd', 'y']
// // console.log(weekdays[1].split(" ")) //['tuesday']

// console.log(weekdays[3]) //
// console.log(weekdays[5]) //

// weekdays[0] = "Дүйсенбі"
// weekdays[1] = "сейсенбі"
// weekdays[2] = "Сәрсенбі"  
// weekdays[3] = "Бейсенбі"
// weekdays[4] = "Жұма"
// weekdays[5] = "сенбі"
// weekdays[6] = "жексенбі"

// weekdays[1] = weekdays[1].toUpperCase() // текущиий мәнді үлкен әріп қылу үшін

// // өзгерттік мәнін

// console.log(weekdays)





// switch(weekdays.length % 2 == 1) {
//     case true:
//         console.log("There is odd of days")
//         break
//     default:
//         console.log("There is even number of days")
// }



// switch(weekdays.length++ % 2 == 1) {
//     case 7:
//         console.log("There is odd of days")
//         break
//     case 8:
//         console.log("There is odd of days")
//         break
//     default:
//         console.log("There is even number of days")
// }



// let num = [34, 45, 24, 78, 12, 57]
// num [0] = num[0] + 1
// num [1] = num[1] + 2
// num [2] = num[2] + 3
// num [3] = num[3] + 4
// num [4] = num[4] + 5
// num [5] = num[5] + 6

// console.log(num)


// Array

// пустой  масивв құрады 8 /ТЕК 8 ЕМЕС КЕЗ КЕЛГЕН САН ЖАЗСАҢ СОНША ШЫҒАРЫП БЕРЕДІ элементтен тұратын 
// e = Array(5).fill("1")
// console.log(e.length)
// console.log(e)

// t = Array(10).fill(true)
// // console.log(t)

// const u = Array(10).fill("") // пустой стринг
// console.log(u)
// console.log(e.concat(t)) // екі масивв қосады конкат деген жаңа масивв қайтарады т деген жаңа масивв қайтарады 
// console.log(e)

// e = e.concat(t) // 
// console.log(e)

// t = t.concat(e) //[trueAAAAAtrue]
// console.log(e)

// // бірінші қайсысын жазасың сол шығады 
// t = t.concat(e)
// console.log(t)
// ТЕК ОСЫЛАЙ ЖАЗҒАНДА ҒАНА ӨЗГЕРЕДІ
// КОНКАТ ЕШТЕҢЕ ӨЗГЕРТПЕЙДІ ТЕК ЖАҢА МАСИВВ ҚАЙТАРАДЫ ӨЗГЕРТУ КЕРЕК БОЛСА ТӨБЕДЕГІДЕЙ ЖАЗАМЫЗ



// МЕТОДТАР
// let weekdays = ["Monday", "tuesday", "wednesday", "thusday", "Friday", "Saturday", "sunday"]
// // console.log(weekdays.indexOf("Monday")) // monday деген сөз бар болса индексін жоқ болса -1 қайтарады

// let day = "wednesday" 
// if (weekdays.indexOf(day) >= 0) {               
//     console.log("day is present")
// } else {
//     console.log("no such day")
// }

// console.log(weekdays.lastIndexOf("Tuesday")) //соңғы элементты біз іздеген


// let day = "wednesday" 
// if (weekdays.includes(day) >= 0) { //includes деген тру немесе фолс қайтарады біз іздеген элемент бар болса тру жоқ болса фолс 
//     console.log("day is present")
// } else {
//     console.log("no such day")
// }


// HOME WORK
// 1
// let d = Array()
// console.log(d)

// // 2
// const s = ["Mango", "Pineapple", "apple", "orange", "cherry", "banana"]
// console.log(s)

// // 3
// console.log(s.length)

// // 4
// console.log(s[0])
// console.log(s[3])
// console.log(s[5])

// // 5
// let mixedDataTypes = ["Akerke", 5, "Zhaidar", 1, "Dina", 7, "Lili"]
// console.log(mixedDataTypes.length)

// // 6
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// // 7
// console.log(itCompanies)

// // 8
// console.log(itCompanies.length)

// // 9
// console.log(itCompanies[0])
// console.log(itCompanies[3])
// console.log(itCompanies[6])

// // 10
// console.log(itCompanies[0])
// console.log(itCompanies[1])
// console.log(itCompanies[2])
// console.log(itCompanies[3])
// console.log(itCompanies[4])
// console.log(itCompanies[5])

// // 11
// itCompanies[0] = itCompanies[0].toUpperCase()
// itCompanies[1] = itCompanies[1].toUpperCase()
// itCompanies[2] = itCompanies[2].toUpperCase()
// itCompanies[3] = itCompanies[3].toUpperCase()
// itCompanies[4] = itCompanies[4].toUpperCase()
// itCompanies[5] = itCompanies[5].toUpperCase()
// console.log(itCompanies)

// // 12
// console.log(`${itCompanies} are big IT companies.`)

// // 13
if (itCompanies.indexOf(user)>=0){
    console.log("yes")}
else{
    console.log("No")
}



// join() - масивты стрингке айналдырады жойнның ішіне не жазамыз сол арқылы қосады ештеңе жазбасақ үтірмен қосады

// splice - өшіреді 4 сан жазсақ орындарын ауыстырады
// slice(1, 4) - кесіп алады 1 ЭЛЕМЕНТТЕН БАСТАП 3 ШТУК ЭЛЕМЕНТ ҚИЫП АЛАДЫ
// const numbers = [1,2,3,4,5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.slice(0)) // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

// push () жаңа элемент қосу үшін пуш соңына қосады

// pop() - ең соңғы элементті удалить етіп, шығарады
let o = [`mddmd`, `jddjdj`, `kdkd`]
console.log(o.pop())

// shift() ең басынан бір элемент удалить етіп, шығарады консольға
let k = [`mddmd`, `jddjdj`, `kdkd`]
console.log(k.shift())



// unshift() - ең алдына бір элемент қосады
let p = [`mddmd`, `jddjdj`, `kdkd`]
console.log(p.unshift(5))


// БАРЛЫҚ МЕТОДТАР ЖАҢА СТРИНГ ҚАЙТАРАДЫ ЕШҚАЙСЫСЫ ӨЗГЕРМЕЙДІ ТЕК МАСИВТЫҢ КОРИЯСЫН ӨЗГЕРТЕДІ

// задачи

// let nums = []
// nums.push(37)
// nums.push(0)
// nums.push(50)
// nums.push(46)
// nums.push(34)
// nums.push(46)
// nums.push(0)
// nums.push(13)

// // глава 1
// p = 3.14
// console.log(`${p.toFixed(2)}`)

// e = Math.E
// console.log(`${e.toFixed(1)}`)

// a = prompt("enter number")
// console.log(`you enter ${a}`)

// let num = prompt("enter number")
// console.log(`${num} - you enter `)

// console.log(`1 13 49`)

// console.log(`7  15  100`)

// a = +prompt("enter number")
// z = +prompt("enter number")
// d = +prompt("enter number")
// console.log(`${a}  ${z}  ${d} `)

// s = +prompt("enter your")
// m = +prompt("enter your")
// l = +prompt("enter your")
// p = +prompt("enter your")
// console.log(`${s} ${m} ${l} ${p}`)

// console.log(50)
// console.log(10)

// console.log(5)
// console.log(10)
// console.log(21)

// // 11
// a = 15
// d = 16
// z = 17
// m = 11
// console.log(a)
// console.log(d)
// console.log(z)
// console.log(m)

// 12
// a = "5 10"
// g = "7 cm"
// console.log(a)
// console.log(g)

// a = 100
// t = +prompt("enter number")
// g = 1949
// v = +prompt("enter number")
// console.log(a, t)
// console.log(g, v)

// a = "25"
// x = +prompt("enter number")
// y = +prompt("enter number")
// console.log(x, a)
// console.log(x, y)


// // 13
// a = "2 kg"
// g = "17"
// console.log(a)
// console.log(g)

// a = "1"
// g = "19"
// b = +prompt("enter number")
// l = +prompt("enter number")
// console.log(l, a)
// console.log(g, b)


// g = 5
// x = +prompt("enter number")
// y = +prompt("enter number")
// console.log(x, y)
// console.log(g, y)


// 14
