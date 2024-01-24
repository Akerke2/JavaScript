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


const users = [
    {name: "Akerke", age: 16},
    {name: "alina", age: 17},
    {name: "aman", age: 18},
    {name: "ruslan", age: 19},
    {name: "aidar", age: 20},
]
// users.forEach (a => a.age += 5)
// console.log(users)


const city = users.map ((i) => {
    return {name: i.name.toUpperCase(), age: i.age + 5, city: "Almaty"}
})
console.log(city)

// МАПТА ЖАҢА ОБЬЕКТ АШАМЫЗ 
// ФОРЕЙЯТА СОЛ ОБЬЕКТТА ӨЗГЕРТЕМІЗ

// 8 ДАЙ
// 3 - 10 ТАПСЫРМА ЛЕВЕЛ 1


// hw
// 1
const country = ["Japan", "USA", "Kanada", "Kazakhstan"]
country.forEach(count => console.log(count))

// 2
const names = ["Akerke", "Alina", "Sezim", "Danaya", "Aruna"]
names.forEach(name => console.log(name))

// 3
const number = [1, 2, 3, 4, 5]
number.forEach(numbers => console.log(numbers))

// 4
const countries = country.map ((c) => {
    return c.toUpperCase()
})
console.log(countries)

// 5
const countrieslenght = country.map ((length) => {
    return length.length
})
console.log(countrieslenght)

// 6
const numbes = [1, 2, 3, 4, 5]
const num = numbes.map ((n) => {
    return n **2
})
console.log(num)

// 7
const nam = ["Akerke", "Alina", "Sezim", "Danaya", "Aruna"]
const n = nam.map ((names) => {
    return names.toUpperCase()
})
console.log(n)

// 8
const product = ["Porsche", "Lambargini", "Mersedes", "BWM"]
const pries = [125258, 7895624656, 7852342, 456251]
const cars = product.map((car, euro) => {
    return {product: car, pries: euro}
})
console.log(cars)