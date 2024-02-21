//23.01.2024

// let student = {
//     name: 'Sarah',
//     surname: 'Alens',
//     age: 20,
//     email: 'saraainjrzHH',
//     grades: {
//         english: [5, 4, 4, 3, 6, 7, 3, 8, 9,],
//         chemestry: [4, 5, 6, 7, 4, 7],
//         history: [9, 6, 3, 7, 3, 2, 2],
//         math: [6, 5, 4, 6, 8, 6, 7],
//         phisics: [6, 7, 8, 9, 5, 4, 3]
//     },
//     subjects: [
//         'english',
//         'phisic',
//         'history',
//         'math',
//         'chemestry'
//     ],
//     attendance: [
//         {
//             attended: true,
//             date: new Date(2024, 0, 23),

//         },
//         {
//             attended: false,
//             date: new Date(2024, 0, 22),

//         },
//         {
//             attended: true,
//             date: new Date(2024, 0, 18)

//         }
//     ],
//     setGrade: function (subjects, grade) {
//         this.grades[subjects].push(grade);   //grade-is object ,subject-is variable
//     }
// }
// student.setGrade('chemestry', 5);
// student.setGrade('english', 2);
// console.log(student.grades)


// student.id = 23389
// console.log(student.id)//жаңа свойство-значение қосу


// student.age=student.age+1  //жасын арттыру
// console.log(student.age)
// //or
// student.age+=1
// console.log(student.age)


// console.log(student.grades)//значение алу
// console.log(student.birth)
// console.log(student.subjects)
// console.log(student.attendance)


// for (const key in student) {   //объекттің яғни студентс дегенді  свойстваларын алады key  деген айнымалмен
//     console.log(key)
//     console.log(student[key])
//     console.log(`${key}:${student[key]}`) //значение свойствасыy алады,нүктемен емес

// }

//егер свойстваның аты айнымалыда сақталса,тік жақша ішіне айнымалы қойып,значениесін 
//проста свойстваның атын қолдансаңыз,нүкте арқылы аласыз


// const books = [
//     { name: 'Javascript', quantity: 20 },
//     { name: 'Html', quantity: 15 },
//     { name: 'css', quantity: 25 },
//     { name: 'Java', quantity: 30 },
// ]
// books[0].quantity += 1
// console.log(books[0].quantity)

// books[1].quantity += 1
// console.log(books[1].quantity)

// books[2].quantity += 1
// console.log(books[2].quantity)

// books[3].quantity += 1
// console.log(books[3].quantity)



// for (let i = 0; i < books.length; i++) {
//     console.log(books[i])
// }


// for (let i = 0; i < books.length; i++) {
//     books[i].quantity += 1
//     // 
// }
// console.log(books)


// for (let i = 0; i < books.length; i++) {
//     books[i].author = 'Abay'
// }
// console.log(books)


//hw
//summa of books
//букстың общий суммасын табу

// let summa = 0
// for (let i = 0; i < books.length; i++) {
//     summa += books[i].quantity
// }
// console.log(summa)

// 24.01.24
// const users = [
//     {name: "Akerke", age: 16},
//     {name: "alina", age: 17},
//     {name: "aman", age: 18},
//     {name: "ruslan", age: 19},
//     {name: "aidar", age: 20},
// ]
// for (const user of users) {
//     user.age += 1
// }
// console.log(users)


// const userUpper = []
// for (let user of users) {
//     userUpper.push({name: user.name, age: user.age})
// }
// console.log(userUpper)



// const usersOlder = []
// for (let user of users) {
//     usersOlder.push({name: user.name, age: user.age + 10})
// }
// console.log(usersOlder)


// const nums = [1, 2, 3, 4, 5]
// const dubleNums = []
// for (let num of nums) {
//     dubleNums.push(num * 2)
// }
// console.log(dubleNums)


// const numbers = [1, 2, 3, 4, 5]

// const doublenumbers = numbers.map((num) => {
//     return num * 2
// })
// console.log(doublenumbers)

// трансформирующей фУНКЦИЯ 
// ЭЛЕМЕНТ ЖАЗДЫҚ АРГУМЕНТ АЛАДЫ РЕТУРНҒА САНДА 2 ГЕ КӨБЕЙТЕДІ

// const klap = numbers.map((num) => {
//     return num + 10
// })
// console.log(klap)


// const names = ["Akerke", "Alina", "Sezim", "Danaya", "Aruna"]
// const upperCase = names.map ((name) => {  //ӘРБІР ЭЛЕМЕНТТІ АЛЫП ШЫҒАДЫ
//     return name.toUpperCase() // АРГУМЕНТКЕ НЕ БЕРЕМІЗ СОНЫ
// })
// console.log(upperCase)

// const hey = names.map ((love) => {
//     return `hello ${love}`
// })
// console.log(hey)


// const users = [
//     {name: "Akerke", age: 16},
//     {name: "alina", age: 17},
//     {name: "aman", age: 18},
//     {name: "ruslan", age: 19},
//     {name: "aidar", age: 20},
// ]
// const upuser = users.map ((n) => {
//     return {name: n.name.toUpperCase()}  // МАПТЫҢ ІШІНДЕ ТЕК ТРАНСФОРМАЦИЯ БОЛАДЫ
// })
// console.log(upuser)


// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach((num) => {
//     console.log(num)
// });

// const numbers = [1, 2, 3, 4, 5]
// // numbers.forEach((num) => {
// //     console.log(num * 2)
// // })
// const dublenums = []
// numbers.forEach(num => dublenums.push(num * 3))
// console.log(dublenums)

// let k = 0
// numbers.forEach(num => k += num)
// console.log(k)

// let o = 0
// numbers.forEach((num) => {
//     if (num % 2 == 0) {
//         o += num
//     }
// })
// console.log(o)


// const users = [
//     {name: "Akerke", age: 16},
//     {name: "alina", age: 17},
//     {name: "aman", age: 18},
//     {name: "ruslan", age: 19},
//     {name: "aidar", age: 20},
// ]
// // users.forEach (a => a.age += 5)
// // console.log(users)


// const city = users.map ((i) => {
//     return {name: i.name.toUpperCase(), age: i.age + 5, city: "Almaty"} // новый ЭЛЕМЕНТ ҚОСУ ҮШІН ПРОСТО ОБЕКТТЫҢ ІШІНЕ ЖАЗА САЛАМЫЗ
// })
// console.log(city)

// // МАПТА ЖАҢА ОБЬЕКТ АШАМЫЗ 
// // ФОРЕЙЧТА СОЛ ОБЬЕКТТА ӨЗГЕРТУГЕ БОЛАДЫ БІРАҚ НЕ ОБЬЯЗАТЕЛЬНО

// // 8 ДЭЙ
// // 3 - 10 ТАПСЫРМА ЛЕВЕЛ 1


// // hw
// // 1
// const country = ["Japan", "USA", "Kanada", "Kazakhstan"]
// country.forEach(count => console.log(count))

// // 2
// const names = ["Akerke", "Alina", "Sezim", "Danaya", "Aruna"]
// names.forEach(name => console.log(name))

// // 3
// const number = [1, 2, 3, 4, 5]
// number.forEach(numbers => console.log(numbers))

// // 4
// const countries = country.map ((c) => {
//     return c.toUpperCase()
// })
// console.log(countries)

// // 5
// const countrieslenght = country.map ((length) => {
//     return length.length
// })
// console.log(countrieslenght)

// // 6
// const numbes = [1, 2, 3, 4, 5]
// const num = numbes.map ((n) => {
//     return n **2
// })
// console.log(num)

// // 7
// const nam = ["Akerke", "Alina", "Sezim", "Danaya", "Aruna"]
// const n = nam.map ((names) => {
//     return names.toUpperCase()
// })
// console.log(n)

// // 8
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// let price = products.map((prices) =>{
//      return {product: prices.product, price: Number(prices.price)}
// })
// console.log(price)



// 25.01.24
// even number
// фор ейч ештеңе қайтармайды 
// фор ейч өзгерте алады НО НЕ ОБЬЯЗАТЕЛЬНО
// let number = [5, 6, 7, 8, 9, 10]
// number.forEach((evens) => {
//         if (evens % 2 == 0) {
//         console.log(evens)
//     }
// })

// // *3 number
// let nums = number.map((n) => {
//     return n * 3
// })
// console.log(nums)

// // summa odd
// let odd = 0
// number.forEach((o) => {
//     if (o % 2 == 1) {
//         odd += o
//     }
// })
// console.log(odd)


// Түбір астын табу жаңағы намбер деген маССИВТЕГІ САНДАРДЫҢ
// МЭП масив ӨЗГЕРТПЕЙДІ БІРАҚ ЖАҢА МАССИВ ҚҰРАДЫ
// let square = number.map ((s) => {
//     return Math.sqrt(s)  // түбірін табу ҮШІН МЭЗ СКЬЮРТИДІ ҚОЛДАНАМЫЗ
// })
// console.log(square)

// 
// let number = [5, 6, 7, 8, 9, 10]
// const evens = number.filter((num) => {
//     return num % 2 == 0;  //условИЯНЫ РЕТУРНҒА ЖАЗАМЫЗ

// })
// console.log(evens)


// // ұЗЫНДЫҒЫ 7 ДЕН ҮЛКЕН ҚАЛАЛАРДЫ ШЫҒАРАМЫЗ 
// const cities = ['los Angeles', 'New York', 'Chicago', 'Hang Kong', 'San Franciso']
// const len = cities.filter((c) => {
//     return 7 < c.length
// })
// console.log(len)

// // if s startwith
// const s = cities.filter((start) => {
//     return start.startsWith('S')
// })
// console.log(s)

// // 1500 poplation < more
// const citiesPoplation = [
//     {city: "Los Ahgeles", population: 1000},
//     {city: "New York", population: 2000},
//     {city: "Chicago", population: 3000},
//     {city: "Philadelphia", population: 4000},
//     {city: "San Fracisco", population: 1500},
// ]
// const pop = citiesPoplation.filter((p) => {
//     return p.population > 1500
// })
// console.log(pop)

// 
// const users = [
//     {name: "Akerke", age: 16},
//     {name: "alina", age: 17},
//     {name: "aman", age: 18},
//     {name: "ruslan", age: 19},
//     {name: "aidar", age: 20},
// ]
// let us = users.filter ((u) => {
//     return u.age > 18
// })
// console.log(us)

// МАССИВ ҚАЙТАРАДЫ  ФИЛТР 

// end With o 
// const cities = ['los Angeles', 'New York', 'Chicago', 'Hang Kong', 'San Franciso']
// let g = cities.find ((c) => {
//     return c.endsWith('o')
// })
// console.log(g)

// // РЕТУРН ЖАЗБАСАҚТА СОЛ БАР ДЕП ЕСЕПТЕЙДІ ЕГЕР БІР ЖОЛДЫҚ КОД ОР АРГУМЕНТ БОЛСА

// const citiesPoplation = [
//     {city: "Los Ahgeles", population: 1000},
//     {city: "New York", population: 2000},
//     {city: "Chicago", population: 3000},
//     {city: "Philadelphia", population: 4000},
//     {city: "San Fracisco", population: 1500},
// ]
// let pop = citiesPoplation.find ((p) => {
//     return p.population === 3000
// })
// console.log(pop)


// const users = [
//     {name: "Akerke", age: 16},
//     {name: "alina", age: 17},
//     {name: "aman", age: 18},
//     {name: "ruslan", age: 19},
//     {name: "aidar", age: 20},
//     {name: "Meirzhan", age: 20},
// ]
// let m = users.find(f => f.name.startsWith("M"))
// console.log(m)

// 
// let number = [5, 6, 7, 8, 9, 10]
// function double(nums) {
//     let label = nums.map ((m) => {
//        return m * 2
//     })
//     return label
// }
// console.log(double([5, 6, 7]))

// function double(nums) {
//     return nums.map(num => num * 2)
// }
// console.log(double([2, 3, 4]))
// // or
// console.log(double(number))


// function increment(nums) {
//     nums.forEach((value, index) => {
//         nums[index] = value + 1
//     });
//     return nums
// }
// console.log(increment([2, 4]))


// function addExclamation(array) {
//     array.forEach((city, index) => {
//         array[index] = city + "!"  // значентны АУЫСТЫРЫП ОР ӨЗГЕРТІП  сақтаймыз ИНДЕКСТЕ
//     })
//     return array
// }
// console.log(addExclamation(["Hello", 'Akerke']))



// const citiesPoplation = [
//     {city: "Los Ahgeles", population: 1000},
//     {city: "New York", population: 2000},
//     {city: "Chicago", population: 3000},
//     {city: "Philadelphia", population: 4000},
//     {city: "San Fracisco", population: 1500},
// ]
// function poplation (cities) {
//    const o = cities.filter(city => city.population > 2000)
//     return o
// } 
// console.log(poplation(citiesPoplation))


// function cityPopulation (cities, poplation) {
//     const p = cities.filter(city => city.population > poplation)
//     return p
// }
// console.log(cityPopulation(citiesPoplation))

// // 
// function k(nums) {
//     nums.forEch((value, index) => {
//         nums[index] = value + 
// })
//     return nums
// }
// console.log(k([5, 6]))

// 11 -  15, 23 level1
// hw
// 11
// const countries = ['Egypt', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const o = countries.filter(land => land.toLowerCase().includes(`land`)) // Что бы и большой буква шығу үшін надо ТОЙLЕР КЕЙС СДЕЛАТЬ СОЛ ӘРІПТІ И ОЛ КІШКЕНtАЙ ЛЭНД БОЛАДЫ ДА ШЫҒАДЫ
// // 12
// const l = countries.filter(length => length.length == 6)

// // 13
// const k = countries.filter(count => count.length > 6)

// // 14
// const s = countries.filter(starts => starts[0] === ("E"))

// // 15
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]
// const p = products.filter(o => o.price)
// console.log(p)

// // 23
// const a = countries.find(l => l.length == 6)
// console.log(a);