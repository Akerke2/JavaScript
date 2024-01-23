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


const books = [
    { name: 'Javascript', quantity: 20 },
    { name: 'Html', quantity: 15 },
    { name: 'css', quantity: 25 },
    { name: 'Java', quantity: 30 },
]
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

// let booksumma = 0
let summa = 0
for (let i = 0; i < books.length; i++) {
    summa += books[i].quantity
}
console.log(summa)