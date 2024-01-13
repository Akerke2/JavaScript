// Қайталанатын циклды лупстың көмегімен шығарамыз

// for (let i = 10; i < 21; i++) {
//     console.log(i)
// } // 10 - 20 ға дейінгі сандарды шығардық


// for (i = 50; i >= 40; i--) {
//     console.log(i)
// }

// for(i = 0; i <= 100; i+=4) {
//     console.log(i)
// }


// z = 0
// for(i = 0; i <= 100; i+=2) {
//     console.log(z += i)
// }

// // кіші -> үлкен: || <= | ++ || +=x x 
// // үлкен --> кіші : > || => || -- || -=х x-тің орнына сан қоямыз 


// let sum = 0
// for (let i = 0; i <= 100; i += 2) {
//     sum += i;
// }
// console.log(sum)

// let num = 0 
// for (let i = 0; i <= 100; i+-2) {
//     sum += (i + 1) 
// }
// console.log(num)


// 1
// for (i = 0; i < 10; i++) {
//     console.log(i)
// }

// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// // }

// // 2
// for (i = 10; i < 0; i++) {
//     console.log(i)
// }

// let i = 0 
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// // 3
// let o = 15
// for (i = 0; i <= n; i++) {
//     console.log(i)
// }

// // 4
// for (let i = 1; i <= 5; i++) {
//     let p = '';
//     for (let j = 1; j <= i; j++) {
//         p += '#';
//     }
//     console.log(p);
// }

// 5
// for (let i = 0; i <= 10; i++) {
//     let result = i * i;
//     console.log(i + ' x ' + i + ' = ' + result);
// }

// // 6
// console.log('i    i^2   i^3');
// for (i = 0; i <= 10; i++) {
//     a = i * i
//     b = i * i * i
//     console.log(`${i},   ${a},   ${b}`)
// }

// // 7
// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// // 8
// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i)
//     }
// }

// // 9
// for (let i = 0; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

// 10
// let n = 0;
// for (i = 0; i <= 100; i++) {
//     n += i;
// }
// console.log(n)

// 11
// m = 0
// y = 0
// for (i = 0; i <= 100; i++) {
//     if (i % 2 ==0) {
//         m += i
//     } else {
//         y += i
//     }
// }
// console.log(m)
// console.log(y)

// k = 0
// for (i = 0; i <= 50; i+=2) {
//     k += i
// }
// console.log(k)


// for (i = 0; i <= 10; i++) {
//     console.log(i*2)
// }

// for (i = 0; i <= 7; i++) {
//     console.log("#".repeat(i));
// }

// for (i=0; i <= 10; i++) {
//     let result = i * i
//     console.log(`${i} x ${i} = ${i * i}`)
// }

// e = 0
// o = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         e += i
//     }else{
//         o += i
//     }
// } console.log(e)
//  console.log(o)


// let num = [15, 34, 12, 78, 45];
// let sum = 0;
// for (i = 0; i <= 4; i++) {
//     sum += num[i]
// }
// console.log(sum)


// let num = [15, 34, 12, 78, 45];
// let sum = 0;
// for (i = 0; i < num.length; i++) {
//     sum += num[i]
// } 
// console.log(sum)


// let num = [15, 34, 12, 78, 45];
// for (i = 0; i <= 4; i++) {
//     console.log(num[i] * 3)
// } 


// let num = [15, 34, 12, 78, 45];
// for (i = 0; i <= 4; i++) {
//    if ( num[i] % 2 == 0)
//      console.log(num[i])
// }

// let num = [15, 34, 12, 78, 45];
// for (i = 0; i <= 4; i++) {
//     num[i] % 2 == 1
//      console.log(num[i])
// }

// let num = [15, 34, 12, 78, 45];
// for (i = 0; i <= 4; i++) {
//     num[i] % 2 == 0
//      ? console.log(num[i]*2)
//      : console.log(num[i]*3)
// }

// let num = [15, 34, 12, 78, 45];
// for (i = 0; i <= 4; i++) {
//  console.log(num[i] + 3)
// }


// let random = []
// for (let i = 1; i <= 5; i++){
//     random.push(i * i);
// }
// console.log(random)

// let num= []
// for (let i = 1; i <= 5; i++){  // қанша деп жазамыз сонша сан шығарады 5 тің орнына 
//     num.push(Math.round(Math.random() * 100));
// }
// console.log(num)


// let num= []
// for (let i = 1; i <= 5; i++){  // қанша деп жазамыз сонша сан шығарады 5 тің орнына 
//     num.push(Math.round(Math.random() ));
// }
// console.log(num)

// 70-100 дің арасындағы сандарды алу үшін
// Match.random() * 30 + 70


// HOME WORK
// // 15
// let s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let random = '';
// for (let i = 0; i < 6; i++) {
//     let m = Math.floor(Math.random() * s.length);
//     random += s.charAt(m);
// }
// console.log(random);



// // // 3
// let r = Math.floor(Math.random() * 256);
// let g = Math.floor(Math.random() * 256);
// let b = Math.floor(Math.random() * 256);

// let j = `rgb(${r},${g},${b})`;
// console.log(j);


// // 4
// let countries = [
//     "albania", "bolivia", "canada", "denmark", "ethiopia",
//     "finland", "germany", "hungary", "ireland", "japan", "kenya"
// ];

// let capital = countries.map(country => country.toUpperCase());
// console.log(capital);


// // 5
// let country = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let countriesLength = country.map(country => country.length);
// console.log(countriesLength);

// // 6
// let countr = [
//     "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
//     "Finland", "Germany", "Hungary", "Ireland", "Iceland",
//     "Japan", "Kenya"
//   ];

//   let new = countr.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);
//   console.log(new);

// // 7
// let country = [
//     "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
//     "Finland", "Germany", "Hungary", "Ireland", "Iceland",
//     "Japan", "Kenya"
//   ];

//   let Land = country.filter(country => country.toLowerCase().includes('land'));

//   if (Land.length > 0) {
//     console.log(Land);
//   } else {
//     console.log('All these countries are without land');
//   }


// // 8
// let countries = [
//     "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
//     "Finland", "Germany", "Hungary", "Ireland", "Iceland",
//     "Japan", "Kenya"
//   ];

//   let coun = countries.filter(country => country.toLowerCase().endsWith('ia'));

//   if (coun.length > 0) {
//     console.log(coun);
//   } else {
//     console.log('These are countries ends without ia');
//   }

// // 9
// let countries = [
//     "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
//     "Finland", "Germany", "Hungary", "Ireland", "Iceland",
//     "Japan", "Kenya"
//   ];

//   let a = countries.reduce((longest, country) => {
//     return country.length > longest.length ? country : longest;
//   }, '');

//   console.log(a);

// // 10
// let s = [
//     "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia",
//     "Finland", "Germany", "Hungary", "Ireland", "Iceland",
//     "Japan", "Kenya"
//   ];

//   let r = countries.filter(country => country.length === 5);

//   console.log(r);


// 14
// Уникальный 5 элемент шығаратын программа 
// 0-5 5-10 10-15 15-20 20-25 барлығының аралығы 5 ке тең сол үшін 5 ке көбейтеміз
// ал екінші 5 қай санан басталатынын, интервалдың басқы саны білдіреді
//  і көбейттік өйткені 
// let numbers = []
// for (let i = 0; i <= 5; i++) {
//     numbers.push(Math.floor(Math.random() * 5) + i * 5) // 

// }    console.log(numbers)

// // 1 мен 100 арасыгдағы уникальный сандар
// let num = []
// for (i = 0; i <= 5; i++) {
//     num.push(Math.round(Math.random() * 20) + i * 20)
// } console.log(num)

// // 15
// let characters = ["a", "b", "c", "d", "f", "g", "e"]
// let id = []
// for (let i = 0; i < 6; i++) {
//     id += characters[Math.floor(Math.random() * characters.length)]
// } console.log(id)

// 1
// let characters = ["a", "b", "c", "d", "f", "g", "e"]
// let id = []
// for (let i = 0; i < Math.floor(Math.random() * 14 + 6); i++) {
//     id += characters[Math.floor(Math.random() * characters.length)]
// } console.log(id)

// // 2
// let rgb = []
// for (i = 0; i < 3; i++) {
//     let random = Math.round(Math.random() * 255)
//     rgb.push(random);
// } 
// console.log(`rgb(${rgb})`)

// // 4
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let upper = [];
// for (let i = 0; i < countries.length; i++) {
//     upper.push(countries[i].toUpperCase())  // i - әрбір элемент
// }
// console.log(upper)

// 5
// жоғарыдағы массивтің ленз шығару үшін
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let o = []
// for (let i = 0; i < countries.length; i++) {
//     o.push(countries[i].length)
// } console.log(o)

// 6
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let l = []
// for (let i = 0; i < countries.length; i++) {
//     let arr = [countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length]; // ең алдымен массив қылып аламыз массивтің ішіне массив салдық, масссивтің жанына үлкен әріптермен текст және сандар жаздық
//     l.push(arr)  // i - әрбір элемент
// }
// console.log(l)


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let landCountries = []
// for (i = 0; i < countries.length; i++) {
//     if ((countries[i]).endsWith("Land")) {  //лэнд пен аяқталама соны біліп аламыз
//         landCountries.push(countries[i]);   // сосын қосып
//     }
// }
// landCountries.length > 0 // консол шығарамыз
// ? console.log(landCountries)// лэнд пен аяқталса лэндпен аяқталатын сөз шығады 
// : console.log("All these countries are without land");


// 8 



// // 9
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let maxlenght = countries[0].length;
// let country = countries[0]

// console.log(country)

// // 10
// let fiveletter = []
// for (let i = 1; i < countries.length; i++) {
//     if (countries[i].length == 5) {
//         fiveletter.push(countries[i])
//     }
// } console.log(fiveletter)


// hw
// // 1
// let nom = [747, 707, 701, 705, 706, 771] 
// let telNum = []
// for (let i = 0; i < 1; i++) {
//     telNum += nom[Math.floor(Math.random() * nom.length)] // 
// }

// let threenum = [234, 555, 888, 444, 966, 722, 101, 456, 789]
// let tn = []
// for (let i = 0; i < 1; i++) {
//     tn += threenum[Math.floor(Math.random() * threenum.length)]
// } 

// let numbers = [2222, 5555, 1212, 4545, 7878, 6363, 2020, 7474]
// let id = []
// for (i = 0; i < 1; i++) {
//     id += numbers[Math.floor(Math.random() * numbers.length)]
// }


// console.log(`+7 ${telNum} ${tn} ${id}`)

// // 2
// let hsl = []
// for (i = 0; i < 1; i++) {
//     hsl.push(Math.round(Math.random() * 360) + i * 360)
// } 

// let h = []
// for (i = 0; i < 1; i++) {
//     h.push(Math.round(Math.random() * 100) + i * 100)
// }

// let l = []
// for (i = 0; i < 1; i++) {
//     l.push(Math.round(Math.random() * 100) + i * 100)
// }
// console.log(`${hsl}, ${h}%, ${l}%`)

// //  3
// let country = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// for (i = 0; i < country.length; i++) {
//     country[i] = country[i].toLowerCase()
// }
// console.log(country)

// 4
// let countries= ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// for (i = 0; i < countries.length; i++) {
//     countries[i] = countries[i].charAt()
// }
// console.log(countries)

// 11.01.24


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let c = []
// for (i = countries.length - 1 ; i >= 0; i--) {
//     c.push(countries[i])
// }
// console.log(c)


// let варилс of  арқылы обращать етеміз 

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let a = []
// for (let country of countries) {
//     if (country[0] == ["A"]) { // ВСЕГДА ЛЕТ ОФКЕ БЕРГЕН АТТЫ ЖАЗАМЫЗ  ОЛ ӘРБІР ЭЛЕМЕНТ ҚЫЛЫП АЛАДЫ
//         console.log(country)
//     }
// } 

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// for (let country of countries) { // ЖАНЫНА ҚАЙ МАСИВВТЕН АЛЫП ЖАТҚАНЫМЫЗДЫ ЖАЗАМЫЗ
//     if (country.length > 6) { // ұзындығы 6 дан үлкен елдер АЛАСЫЗ. ВСЕГДА КОУНТРИ ОЛ ӘРБІР ЭЛЕМЕНТ ДЕГЕН СӨЗ
//         console.log(country) // КАНСОЛЬҒАДА КОУНТРИ
//     }
// // }

// let numbers = [34, 23, 78, 35, 90]
// // let k = 0
// // for (let nums of numbers) {
// //     k += nums
// // } console.log(k)

// // 
// let u = 0
// for (let l of numbers) {
//     if (l % 2 == 1){
//        u += l 
//     }
// }console.log(u)



// WHILE


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let i = 0;
// while (i < countries.length) {
//     console.log(countries[i])
//     i++;
// }

// let numbers = [34, 23, 78, 35, 90]
// let p = 0
// while (p < numbers.length) {
//     if (numbers[p] % 2 == 0) {
//     console.log(numbers[p])
//     }
//     p++
// }

// i = 0
// while ( i <= 10) {
//     console.log(i)
//     i++
// }i = 0

// i = 0
// while ( i <= 10) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }

// let i = 0
// let p = 0
// let numbers = [34, 23, 78, 35, 90]
// while (i < numbers.length) {
//     p += numbers[i]
//     i++
// }
// console.log(p)


// let numbers = [34, 23, 78, 35, 90]
// i = 0
// while ( i < numbers.length) {
//     if (i % 2 == 1) {
//       i ++
//       continue // 
//     }
//     console.log(numbers[i])
//     i++
// }

// let numbers = [34, 23, 78, 35, 90]
// i = 0
// while ( i < numbers.length) {
//     if (i % 2 == 1) {
//       i ++
//       break // 
//     }
//     console.log(numbers[i])
//     i++
// }


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let i = 0
// while (0 < countries.length) {
//     if (countries.length <= 6) {
//     continue
//     }
// } console.log(countries)


// let i = 0
// while (i < countries.length) {
//     if (countries[i][0] !== "A") {
//         i++
//         continue
//     }
//     console.log(countries[i])
//     i++
// }

// for (let o of countries) {
//     if (o == "Germany") {
//         break
//     }
//     console.log(o)
// }

// LEVEL2
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]
// let max = webTechs[0];
// for (let i = 0; i < webTechs.length; i++){
//     if (webTechs[i].length <= max.length) {
//         continue
//     }
//     max = webTechs[i]
//     console.log(i)
// }

// let arr = []
// for (let i = 0; i < webTechs.length; i++) {
//     let nem = [webTechs[i], webTechs[i].length]
//     arr.push(nem)
// } console.log(arr)

// 14
// let lan =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// for (let i = 0; i <= lan.length -1; i++) {
//     console.log(lan[i])
// }

// 15
// let fruits = ['banana', 'orange', 'mango', 'lemon']
// // for (let o of fruits){
// //     o = "water"
// // }console.log(fruits[o])

// fruits[0] = "water"
// console.log(fruits)

// 16
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ];
// for (let i = 0; i < fullStack.length; i++) {
//     for (let j = 0; j < fullStack[i].length; j++) {
//         fullStack[i][j] = fullStack[i][j].toUpperCase();
//     }
// }
// console.log(fullStack);

// LEVEL3
// 1
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// console.log(countries)

// // 2
// let sortedCountries = countries.slice()
// console.log(sortedCountries)

// // 3
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]
// webTechs.sort()
// console.log(webTechs)


// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// mernStack.sort()
// console.log(mernStack)

// 4
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
// let mas = []
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].includes("land")) {
//         mas.push(countries[i])
//     }

// }    console.log(mas)

// 5
// let maxlenght = 0
// let lenght = " ";
// for (let o of countries) {
//     if (o.length > maxlenght) {
//         maxlenght = o.length;
//         lenght = o;
//     }
// }console.log(lenght)


// 6
// let k = []
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].includes("land")) {
//         k.push(countries[i])
//     }
// } console.log(k)

// // 7
// let m = []
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length <= 4) {
//         m.push(countries[i])
//     }
// }console.log(m)

// 8
// let two = []
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length <= 5) {
//         two.push(countries[i])
//     }
// }console.log(two)

// 9
let upper = []
for (let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toUpperCase()
    upper.push(countries[i])
} 
console.log(upper)