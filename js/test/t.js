// let d = (num1, num2) => {
//     return (num1 + num2) % 3
// }
// console.log(d(2, 2))

// // 2
// let fulname = (lastname, fname, yo) => {
//     return `Hello,  I m ${lastname} ${fname}  and  ${yo} years old.`
// }
// console.log(fulname("Leo", "Messi", "37"))

// // 3
// let h = (...numbers) => {
//     let n = 0
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 4 == 0) {
//             n += numbers[i]
//         }
//     } return n
// }
// console.log(h(2, 3, 4, 5, 6, 8, 9, 12))




// // 4
// let j = (num, f = " Celsius") => {
//     return `It is ${num} degrees hot in ${f} `
// }
// console.log(j(74, "farhenheit"))

// // 5
// let join = (...nums) => {
//     let l = nums.join("#")
//     return l
// }
// console.log(join(1, 2, 3, 4, 5, 6))



// БЛОКТЫҢ ТҮРЛЕРІ
// ЕГЕР АЙНЫМАЛЫЛАР БЛОКТЫҢ ІШІНДЕ ҚҰРЫЛСА ЛОКОЛЬНЫЙ
// ЕСЛИ БЛОКТЫҢ СЫРТЫНДА ҚҰРЫЛСА ГЛОБАЛЬНЫЙ
// ЕСЛИ СЫРТЫНДА ЕШҚАНДАЙ БЛОКҚА КІРМЕСЕ КОНДТШНАЛС, ФУНКШН, ФОР, 

// БЛОКТЫҢ ІШІНДЕГІ АЙНЫМАЛЫЛАР СЫРТҚА ШЫҒА АЛМАЙДЫ

// АЙНЫМАЛЫ ҚҰРУДЫҢ 3 ТҮРІ ВАР 
// var c = 15

// вармен ЖАЗСАҚ БЛОКТЫҢ ІШІНДЕГІНІДЕ ШЫҒАРА БЕРЕДІ 
// ҚОЛДАНБАУҒА ТЫРЫСУ КЕРЕК


// ОБЬЕКТ

const user1 = {
    id: 455525252,
    username: "Akerke", //key(property/свойство)-value 
    email: "adikyzy@gmail.com",
    pasword: "djjdjdj52",
    image: "picture",
    birthday: new Date(2005, 2, 23),
    purchases: [],
    cart: [],
    cards: []
};

const user2 = {
    id: 455525252,
    username: "alina", //key(property/свойство)-value 
    email: "alinaeva@gmail.com",
    pasword: "12345678",
    image: "picture",
    birthday: new Date(2006, 5, 15),
    purchases: [],
    cart: [],
    cards: [],
};

// let displayinfo = function() {
//     return`${this.username} ${this.email} ${this.birthday}`
// }
// displayinfo()

// user1.displayinfo = displayinfo
// user2.displayinfo = displayinfo
// // user2.displayinfo()


// let displayuserid = function() {
//     return this.id
// }
// user1.displayuserid = displayuserid
// user2.displayuserid = displayuserid
// user1.displayuserid()

// function addcard(card) {
//     this.cards.push(card);

// }   

// user1.addcard = addcard
// user1.addcard(card1)
// console.log(user1.cards)
// user1.addcard(card2)






const product1 = {
    category: "laptop",
    name: "Acer",
    price: 300000,
    ram: 16,
    ssd: 512
}



const product2 = {
    category: "phone",
    name: "iphone",
    price: 300000,
    ram: 16,
    ssd: 512
}

const product3 = {
    category: "hiphones",
    name: "iphone",
    price: 300000,
    ram: 16,
    ssd: 512
}

const product4 = {
    category: "mouse",
    name: "fstyler",
    price: 300000,
    ram: 16,
    ssd: 512
}


// const card1 = {
//     bank: "kaspi",
//     accountnumber: 4400285125482,
//     owner: "Ako Ako",
//     cvv: 555,
// }


// const card2 = {
//     bank: "halyk bank",
//     accountnumber: 4400585585,
//     owner: "Saru",
//     cvv: 777
// }

// let keyname = "cvv"

// console.log(card2.bank)
// console.log(card2.owner)
// console.log(card2["accountnumber"]) // кей нэйм слишком көп болса тік жақша қoлданамыз
// console.log(card2.cvv)
// console.log(card2[keyname])

// card2.expireingDate = "06/27" //


// card2.expireingDate = new Date(2027, 5) // 06/27 ten
// card2.expireingDate = new Date(2030, 7) //


// // СВВ ӨЗГЕРТІП ЖАТЫРМЫЗ
// card2.cvv = 789
// console.log(card2.cvv) //789 ШЫҒАДЫ ӨЙТКЕНІ БІЗ ӨЗГЕРТТІК



function addproDuctTocard(product) {
    this.cart.push(product)
}
user1.addproDuctTocard = addproDuctTocard
user1.addproDuctTocard(product1)
console.log(user1.cart)
user1.addproDuctTocard(product2)



function purchasesProduct(product) {
    this.purchases.push(product)
}
user1.purchasesProduct = purchasesProduct
user1.purchasesProduct(product3)
console.log(user1.purchases)
user1.purchasesProduct(product4)


const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)













const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    'phone number': '+3584545454545'
};

console.log(person.firstName); // Вывод: Asabeneh
console.log(person.lastName); // Вывод: Yetayeh
console.log(person.age); // Вывод: 250
console.log(person.city); // Вывод: Helsinki
console.log(person.getFullName()); // Вывод: Asabeneh Yetayeh
console.log(person['phone number']); // Вывод: +3584545454545
