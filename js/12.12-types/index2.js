// let word = "JavaScript"
// console.log(word[0] = 'Y')

// let numOne = 3
// let numTwo = 3

// console.log(numOne == numTwo)      // true береді өйткені 3 пен 3 тең

// let js = 'JavaScript'
// let py = 'Python'

// console.log(js == py)             //false береді өйткені жс пен пайтонның мәндері тең емес

// let lightOn = true
// let lightOff = false

// console.log(lightOn == lightOff) // false береді өйткені тру мен фолс тең емес 


// let nums = [1, 2, 3]
// nums[0] = 10

// console.log(nums)   // [10, 2, 3] береді өйткені 0 элементті 10-ға ауыстырдық ауыстырған кезде лет жазбаймыз.


// let nums = [1, 2, 3]
// let numbers = [1, 2, 3]

// console.log(nums == numbers)  // фолс кайтарады значение бойынша салыстырмаймыз

// НЕПРИВМИТИМЫЙДА МӘНІ БОЙЫНША САЛЫСТЫРМАЙМЫЗ

// Как правило, мы не сравниваем непримитивные типы данных. 
// Не сравниваем массивы, функции или объекты. Непримитивные значения
//  называются ссылочными типами, потому что они сравниваются по ссылке, а не по значению.
//  Два объекта строго равны, только если они ссылаются на один и тот же базовый объект.


// ПРИМЕТИВНЫЙ ДЕГЕН ПРОСТОЙ 

// Numbers  – целые числа, числа с плавающей запятой
// Strings  — любые данные в одинарной, двойной кавычке или обратной кавычке.
// Booleans  – истинное или ложное значение
// Null — пустое значение или отсутствие значения.
// Undefined  — объявленная переменная без значения
// let name
// Symbol  — уникальное значение, которое может быть сгенерировано конструктором символов.
//  NULL ПУСТОЙ ЗНАЧЕНИЕ ЖОҚ



// let nums = [1, 2, 3]
// let numbers = nums

// console.log(nums == numbers)  // true


// let userOne = {
//     name:'Asabeneh',
//     role:'teaching',
//     country:'Finland'
//     }
    
// let userTwo = userOne
    
// console.log(userOne == userTwo) // true

//  ROUND

// console.log(Math.round(3.89)) // 4 жуық сан кайтарады, бөлшек санды бүтін санға жуықтайды
// console.log(Math.round(3.5))  // 4   0,5 - тен жоғары болса жоғары жаққа жуықтайды
// console.log(Math.round(3.49)) // 3   0,5 - тен кіші болса төмен жаққа жуықтайды
// console.log(Math.round(13.81)) // 14


// FLOOR

// console.log(Math.floor(3.89)) //3  Әрқашан төмен жаққа карай жуыктайды


// // CEIL

// console.log(Math.ceil(5.6)) //6  ЖОҒАРҒЫ ЖАҚҚА ҚАРАЙ ЖУЫҚТАЙДЫ


// MIN-MAX

// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5 САМЫЙ МИНИМАЛЬНВЙ САНДЫ ШЫҒАРАДЫ ЕҢ кіші санды

// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20 САМЫЙ МАКСТИМАЛЬНАЙ САНДЫ ШЫҒАРАДЫ ең үлкен санды

// RANDOM

// const randNum = Math.random() // creates random number between 0 to 0.999999
// console.log(randNum)   // РАНДОМНЫЙ БӨЛШЕК САН КАЙТАРАДЫ


// рандомный бүтін сан шағыру үшін

// const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
// console.log(num) // 11-дің орнына өзімізге қай сан аралығы керек соны жазсақ болады мысалы 1 мен 100 аралығы керек болса 101 деп жазамыз. т.б
// Флорды 101, 201, 21 деген сандарды көбейткенде флор қолданамыз 0-100
//  Сейлды 100, 200, 500 деген сандарға көбейткенде сейл 0-100


// Absolute value
//console.log(Math.abs(-10)) // минус санды плюс. плюс санды минус кылады

//Square root
// console.log(Math.sqrt(100))     // 10 түбірін табады бөлшек сан шағатын болса 


// Power  Дәрежесін табады
// console.log(Math.pow(3, 2))     // 9 3-тің дәрежесі 9

// console.log(Math.E)             // 2.718

// console.log(7**0.5)


// HW

// 1

// const num = Math.floor(Math.random() * 101)
// console.log(num)

// 2

// let num = Math.floor(Math.random() * (100-50+1)) + 50;
// console.log(num)

// 3

// let num = Math.floor(Math.random() * 256)
// console.log(num)

// 4

// console.log(5000 * 12 + 10000 + 12 * 15000)

// Declaring different variables of different data types
// let space = ' '
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250


// let fullName =firstName + space + lastName
// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition текстты тырнақшаның ішіне салып айнымалыларға доллар бермей ақ жасауға болады

// console.log(personInfoOne)

// \n: новая строка
// \t: Табуляция, означает 8 пробелов
// \\: Обратная косая черта
// ': Одинарная кавычка (')
// ": Двойная кавычка (")


// console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
// let a = 2
// let b = 3
// console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically




// toUpperCase(): ӘРІПТЕРДІ БАС ӘРІП ҚЫЛАДЫ 
// let str = 'JavaScript'
// console.log(str.toUpperCase())
// let name = 'Ako'
// console.log(name.toUpperCase())

// toLowerCase(): ӘРІПТЕРДІ КІШКЕНТАЙ ҚЫЛЫП ШЫҒАРАДЫ
// let city = 'GONKONG' 
// console.log(city.toLowerCase())
// let job = 'It' 
// console.log(job.toLowerCase()) // it деген шығады

// substr(): қиады. ең бірінші қай элементтен бастап қию керек екенін көрсетеді, сосын қанша шт элемент қию керек екенін жазады.
// let language = 'JavaScript'
// console.log(language.substr(0,4)) // 0 - ші яғни ең бірінші элементтен бастап 4 элемент қиамыз Java деген сөз шығады.
// let country = 'Finland'
// console.log(country.substr(3,4)) // 3-ші элементтен бастап 4 шт элемент қиып алады

// split(): строканы бөліп тастайды
// let string = '30 days of javascript'
// console.log(string.split(' ')) // ["30", "days", "of", "javascript"] осылай шығарады егер біз екі тырнақшаның ортасына пробел қойсақ.
// let str = '30 days of puthon'
// console.log(str.split()) // егер жақшаның ішіне ештеңе жазбасақ ['30 days of puthon'] осылай массив қылып қайтарады
// console.log(str.split('')) // осылай жазатын болсақ бір-бір эленттен алып шығарады. ['3', '0', ' ', 'd', 'a', 'y', 's', ' ', 'o', 'f', ' ', 'p', 'u', 't', 'h', 'o', 'n'] даже ПРОБЕЛДЫ ЭЛЕМЕНТ СИЯҚТЫ АЛАДЫ.

// trim(): ПРБЕЛДЫ тексттың басында или соңында удалить етеді
let str = ""