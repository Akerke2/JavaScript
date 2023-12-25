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

//console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5 САМЫЙ МИНИМАЛЬНВЙ САНДЫ ШЫҒАРАДЫ ЕҢ кіші санды
// console.log(Math.min(14, 32, 9, 27, 41))
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

// let num = Math.floor(Math.random() * 50)) + 50;
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
// 



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

// split(): әр элементті бөліп массив қайтарады
let string = '30 days of javascript'
// console.log(string.split(' ')) // ["30", "days", "of", "javascript"] осылай шығарады егер біз екі тырнақшаның ортасына пробел қойсақ.
// let str = '30 days of puthon'
// console.log(str.split()) // егер жақшаның ішіне ештеңе жазбасақ ['30 days of puthon'] осылай массив қылып қайтарады
console.log(string.split('n')) // осылай жазатын болсақ бір-бір эленттен алып шығарады. ['3', '0', ' ', 'd', 'a', 'y', 's', ' ', 'o', 'f', ' ', 'p', 'u', 't', 'h', 'o', 'n'] даже ПРОБЕЛДЫ ЭЛЕМЕНТ СИЯҚТЫ АЛАДЫ.



// let password = "    345   "
// console.log(password.trim())
// password = password.trim()  //осылай значениені сақтап алу керек а то ол жаңа сторка қылып береді
// console.log(password) //  сосын барып кансол жасаймыз
// password = password.trim()
// осылай значениені сақтап алу керек а то ол жаңа сторка қылып береді

// if (password.length < 8) {
//   console.log("The password should contain at least 8 sybols")
// } else {
//   console.log("the password saved")  //else шығады өйткені пасуорттың символы көп 8 ден көп болып кетеді ленз  сол үшін трим арқылы пробелдарды жою керекпіз
// }



// trim(): ПРБЕЛДЫ тексттың басында или соңында удалить етеді
// let str = "         30 days of javascript       "  
// console.log(str)    // қалай тұр солай шығарады.
// console.log(str.trim(" "))  // екі жағында қалған бос орындарды удалить етіп шығарады.

// includes(): строкада сол сөз бар ма жоқ па соны тексереді. Егер строкада біз жазған сөз бар болса тру кайтарады, в противным случае фолс.
// let ert = "30 days of javascript"
// console.log(ert.includes("40")) // бізге фолс қайтарады өйткені 40 деген сан ерт ішінде жоқ. егер біз 30 жазатын болсақ тру шығады өйткені ол ерттің ішінде бар

// lastIndexOf(): Ішкі бағдарламаны қабылдайды, ал егер ішкі бағдарлама жолда болса, ол ішкі бағдарламаның соңғы орнын қайтарады, егер ол болмаса, -1 қайтарады.
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.lastIndexOf('love')) //67
// console.log(string.lastIndexOf('you'))  //63

// indexOf егер элемент строкада бар болса бірінші строканы қайтарады ал егер ол сторокада жоқ болса -1 қайтарады.

// startsWith: Сөйлем сол біз еңгізген элементтен басталса тру басталмаса фолс қайтарады
// let string = 'Love is the best to in this world'
// console.log(string.startsWith('Love'))   // true


// CLASS WORK
// LEVEL 1
// let challenge = "30 Days Of JavaScript" //1
// // console.log(challenge)      //2
// console.log(challenge.length)  //3
// console.log(challenge.toUpperCase()) //4
// console.log(challenge.toLowerCase()) //5
// console.log(challenge.substr(0, 2))  //6
// console.log(challenge.substring(0,2))//7
// console.log(challenge.includes("Script")) //8
// console.log(challenge.split())  //9
// console.log(challenge.split(" "))  //10
// console.log(challenge.replace("JavaScript", "Python"))  //12
// console.log(challenge.charAt(15))   //13
// console.log(challenge.charCodeAt(11)) // 14
// console.log(challenge.indexOf('a'))     //15
// console.log(challenge.lastIndexOf('30 Days Of JavaScript')) //16

//joo = 'You cannot end a sentence with because because because is a conjunction' //17
// console.log(joo.indexOf('because'))
// console.log(joo.lastIndexOf('because')) //18
// console.log(joo.search('because'))  //19

// let sentence =  '   30 Days Of JavaScript    '  //20
// console.log(sentence.trim())

//let sentence =  '30 Days Of JavaScript' 
// console.log(sentence.startsWith('30'))
// console.log(sentence.endsWith('JavaScript'))
//console.log(sentence.match('30 Days'))

// let neft = '30 Days Of '  // 24
// console.log(neft.concat('JavaScript'))
 
// let language = '30 Days of JavaScript'  //25
// console.log(language.repeat(2))

// let it = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' //11
// console.log(it.split())


// LEVEL2
// 1
// let sentence = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// console.log(sentence)

// 2
// let quate = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// console.log(quate)

// 3
// let num = 10
// // let nums = 10
// console.log(typeof 10)

// 4
// let num = parseFloat ('9.8');
// if (num !== 10)
// num = 10
// console.log(num)
// 6
// let sentence = 'I hope this course is not full of jargon'
// console.log(sentence.includes('jargon'))
// 7
// num = Math.floor(Math.random() * 101)
// console.log(num)
// 8
// num = Math.floor(Math.random() * 50) + 50;
// console.log(num)
// 9
// num = Match.floor(Match.random() * 256)
// console.log(num)
// 10
// let sen = 'JavaScript'
// console.log(sen[4])
// 11
for (let i = 1; i <= 5; i++) {
    let output = `${i} `;
    for (let j = 1; j <= 5; j++) {
      if (j === 1) {
        output += `1 `;
      } else {
        output += `${Math.pow(i, j)} `;
      }
    }
    console.log(output);
  }

// 12
// let h = 'You cannot end a sentence with because because because is a conjunction'
// console.log(h.substr(31,24))

// LEVEL3
// 1
// let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// int count
// console.log(sentence.blockCount())
// // 2
// let sentence = 'You cannot end a sentence with because because because is a conjunction';

// let countBecause = (sentence.match(/\bbecause\b/g) || []).length;

// console.log("Number of occurrences of 'because':", countBecause);
// 3

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// // Clean the text and extract words
// const cleanedText = sentence.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
// const words = cleanedText.split(" ");

// // Count word occurrences
// let wordCount = {};
// words.forEach(word => {
//   if (wordCount[word]) {
//     wordCount[word]++;
//   } else {
//     wordCount[word] = 1;
//   }
// });

// // Find the most frequent word
// let mostFrequentWord = '';
// let maxCount = 0;
// for (let word in wordCount) {
//   if (wordCount[word] > maxCount) {
//     mostFrequentWord = word;
//     maxCount = wordCount[word];
//   }
// }

// console.log("Cleaned Text:", cleanedText);
// console.log("Most frequent word:", mostFrequentWord, "Occurrences:", maxCount);

// // 4
// console.log(5000 * 12 + 10000 + 12 * 15000)