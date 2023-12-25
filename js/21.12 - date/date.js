// Date Object 
// Мысалы қанша күн бұрын шықаныны есептек үшін 

// let now = new Date();
// console.log(now);

// let mybirthday = new Date();
// console.log(mybirthday);

// console.log(mybirthday.getFullYear());

// console.log(mybirthday.getMonth());
// // getmouth айды шығарады 0-
// console.log(mybirthday.getDay()); // 0-6
// //  
// console.log(mybirthday.getDate()); //1-31
// // 
// console.log(mybirthday.getHours()); //0-23 используется для получения текущего часа из времени, хранящегося в объекте Date.
// // 
// console.log(mybirthday.getMinutes()); //0-59  текущи времяның минутын алу үшін 
// // 
// console.log(mybirthday.getMilliseconds()); // 0-999 милисекундтын қайтарады
// // 
// console.log(mybirthday.getTime()); // ms since 01.01.1970 еңгізген датамызға дейінгі уақытты шығарып береді екі жылдың арасындағы милисекунддты уақытты
// // 
// let date1 = new Date("2023-04-27")
// let date2 = new Date("2023-08-19") // 27 апрельмен 19 августтың арасындағы сандарды шығарады
// let msdiff = date2.getTime() - date1.getTime();
// console.log(msdiff)

// let sdiff = msdiff / 1000
// console.log(sdiff)

// // clock
// let hrdiff = msdiff / (1000 * 60);
// console.log(hrdiff)

// // 
// let nidiff = msdiff / (1000 * 60 *60)
// console.log(nidiff)

// // 
// let daydiff = msdiff / (1000 * 60 * 60 * 24) // 1 күндегі милисекунд
// console.log(daydiff)

// // 
// let weekdiff = msdiff / (1000 * 60 * 60 * 24 * 7);
// console.log(Math.round(weekdiff))


// let mouth = msdiff / (1000 * 60 * 60 * 24 * 30); //1000 - 1 секундтың ішіндегі милисекунд, 60 - 1 минуттың ішіндегі 60 секунд, 60 - 1 сағаттың ішіндегі 60минут, 24 - 1 күннің ішіндегі 24сағат, 30 - 1 айдың ішіндегі 30күн
// console.log(Math.round(mouth))

// let yeardiff = msdiff / (1000 * 60 * 60 * 24 * 365);
// console.log(Math.round(yeardiff))


// let birthday = prompt("Enter u birthday")
// let uage = new Date(birthday);
// let year = new Date()
// let birth = uage.getTime() - year.getDate()
// let yeardiff = birth / (1000 * 60 * 60 *24 * 365)
// console.log(Math.round(yeardiff));


// HOME WORK
// 1
// let d1 = new Date
// console.log(d1.getFullYear())
// console.log(d1.getMonth())
// console.log(d1.getDate())
// console.log(d1.getDay())
// console.log(d1.getMonth())
// console.log(d1.getHours())
// console.log(d1.getMinutes())
// console.log(d1.getTime());

// // 2
// let year = Number(prompt("Enter your year"))
// let d1 = new Date().getFullYear()
// let nums = d1 - year
// let age = 18 - nums 
// 18 < nums
// ? console.log(`You are ${nums}. You are old enough to drive`)
// : console.log(`You are ${nums}. You will be allowed to drive after ${age} years.`)

// 3
// let age = Number(prompt("Enter number of years you live"));
// let h = parseInt(age);
// let y = 100;
// let year = (365 * 60 * 60 * 24 * h)
// console.log(year)

// 4
// let currentDate = new Date();

// // Формат ГГГГ-ММ-ДД ЧЧ:мм
// let format1 = currentDate.getFullYear() + '-' + 
//               ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + 
//               ('0' + currentDate.getDate()).slice(-2) + ' ' + 
//               ('0' + currentDate.getHours()).slice(-2) + ':' + 
//               ('0' + currentDate.getMinutes()).slice(-2);
// console.log('Формат ГГГГ-ММ-ДД ЧЧ:мм:', format1);

// // Формат ДД-ММ-ГГГГ ЧЧ:мм
// let format2 = ('0' + currentDate.getDate()).slice(-2) + '-' + 
//               ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + 
//               currentDate.getFullYear() + ' ' + 
//               ('0' + currentDate.getHours()).slice(-2) + ':' + 
//               ('0' + currentDate.getMinutes()).slice(-2);
// console.log('Формат ДД-ММ-ГГГГ ЧЧ:мм:', format2);

// // Формат ДД/ММ/ГГГГ ЧЧ:мм
// let format3 = ('0' + currentDate.getDate()).slice(-2) + '/' + 
//               ('0' + (currentDate.getMonth() + 1)).slice(-2) + '/' + 
//               currentDate.getFullYear() + ' ' + 
//               ('0' + currentDate.getHours()).slice(-2) + ':' + 
//               ('0' + currentDate.getMinutes()).slice(-2);
// console.log('Формат ДД/ММ/ГГГГ ЧЧ:мм:', format3);

// 5
// let currentDate = new Date();

// let year = currentDate.getFullYear();
// let month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
// let day = ('0' + currentDate.getDate()).slice(-2);
// let hours = ('0' + currentDate.getHours()).slice(-2);
// let minutes = ('0' + currentDate.getMinutes()).slice(-2);

// let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
// console.log(formattedDateTime); // Outputs something like 2023-12-11 09:05
 

// let date  = new Date()
// let year = date.getFullYear();
// let month = (`0` + (date.getMonth() + 1)).slice(-2);
// let day = (`0` + date.getDate()).slice(-2);
// let hours = (`0` + date.getHours()).slice(-2)
// let minutes = (`0` + date.getMinutes()).slice(-2);
// console.log(`${year}-${month}-${day}-${hours}-${minutes}`);


// console

// let j = 11;
// let k = 15;
// let l = 23;
// let m = 17;
// let n = 14;
// let o = 19;
// let p = 13;
// let q = 20;
// let r = 18;
// let s = 10;
// let t = 22;
// let u = 16;
// let v = 21;
// let w = 12;
// let x = 25;
// let y = 27;
// let z = 24;
// let aa = 26;
// let bb = 28;
// let cc = 29;

// let problem_1 = ++j - k++ * ++l + ++n; // -333 к мен л ды кобейтемыз 360 шығад 12 ні алып тастаймыз + 15 қосамыз 333 шығады өйткені минус шығады
// // console.log(problem_1) 
// let problem_2 = ++m + p-- * --o + ++j; // 265 бірақ 264
// console.log(problem_2)
// let problem_3 = ++l - cc++ / ++n + ++m; //
// console.log(problem_3)
// let problem_4 = ++q * p-- - --j + ++l; // 287
// console.log(problem_4)
// let problem_5 = ++n / o++ + ++cc * --r; //510,789474
// console.log(problem_5)
// let problem_6 = ++w % p++ - ++j / --l; // -0.5454545454545454 шығады 13 пен 13 тің қалдығы жоқ сосын 12 мен 22 бөлеміз и сол сан шығады
// console.log(problem_6)
// let problem_7 = ++p * cc-- / --r + ++k; //39.88235294117647
// console.log(problem_7)
// let problem_8 = ++q + w-- % --l + ++m; //51
// console.log(problem_8)
// let problem_9 = ++r / l++ - ++p % --w; //-2,17391304
// console.log(problem_9)
// let problem_10 = ++l + o-- * --cc + ++k; // 572
// console.log(problem_10)
// let problem_11 = ++w % cc++ + ++q - --t; //13
// console.log(problem_11)
// let problem_12 = ++l - o++ / ++m + ++w; // 35.94444444444444
// console.log(problem_12)
// let problem_13 = ++p * k-- + --j + ++p; //235
// console.log(problem_13)
// let problem_14 = ++n '/ cc++ - ++w % --l; // 12.4827586
// console.log(problem_1'4)
// let problem_15 = ++k + l-- % --w + ++q; // 38
// console.log(problem_15)
// let problem_16 = ++r * t-- / --o + ++p; //37.222222 
// console.log(problem_16)
// let problem_17 = ++o % l++ + ++q - --j; //31
// console.log(problem_17)
// let problem_18 = ++j - p++ / ++r + ++l; //35.3157895
// console.log(problem_18)
// let problem_19 = ++l * t-- + --k + ++p; // 556
// console.log(problem_19)
// let problem_20 = ++t % l++ - ++q / --o; // 1.16666667
// console.log(problem_20)

// 
// console.log(!(Math.ceil || / (7 / 3) > 5)  Math.sqrt || / (12)  != Math.min(7, Math.ceil ||  (7 / 2)) && Math.ceil|| / (29 % 7) <= 18 && Math.pow || (2, 3) % 2 == 2  Math.ceil ||  (12 / 4) >= 4); //true
// console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(18) != Math.min(7, Math.ceil(7 / 3))  Math.ceil(29 % 7) <= 6 && Math.pow(2, 3) % 2 == 2  Math.ceil(12 /  8  >= 4);//true
// console.log(!(Math.floor(4 / 5) > 5)  Math.sqrt(20) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 6) >= 4);//true
// console.log(!(Math.floor(6 / 5) > 5) && Math.sqrt(14) != Math.min(7, Math.ceil(7 / 3))  Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 4) >= 4);//true
// console.log(!(Math.round(4 / 5) > 5)  Math.sqrt(8) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 0  Math.round(12 / 4) >= 4);//true
// console.log(!(Math.floor(4 / 5) > 5)  Math.sqrt(16) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 4  Math.ceil(12 / 10) >= 4);//true
// console.log(!(Math.floor(4 / 5) > 5)  Math.sqrt(14) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 20) >= 4);//true
// console.log(!(Math.ceil(8 / 5) > 5)  Math.sqrt(10) != Math.min(7, Math.ceil(7 / 3)) && Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 4) >= 4);//true//true
// console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(12) != Math.min(7, Math.ceil(7 / 3))  Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 3  Math.ceil(12 / 4) >= 4);//true
// console.log(!(Math.ceil(7 / 5) > 5)  Math.sqrt(16) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 4) >= 4);//true
// console.log(!(Math.floor(4 / 5) > 5)  Math.sqrt(22) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 5  Math.ceil(12 / 4) >= 4);//true
// console.log(!(Math.floor(4 / 5) > 5)  Math.sqrt(24) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 14) >= 4);//true
// console.log(!(Math.floor(4 / 5) > 5)  Math.sqrt(18) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 4) >= 4);//true
// console.log(!(Math.round(10 / 5) > 5)  Math.sqrt(20) != Math.min(7, Math.ceil(7 / 3)) && Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 0) >= 4);//true
// console.log(!(Math.ceil(12 / 5) > 5)  Math.sqrt(12) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 4) >= 4);//true
// console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(14) != Math.min(7, Math.ceil(7 / 3))  Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2  Math.ceil(12 / 2) >= 2);//true

// ГЕТТАЙМ
// let date1 = new Date(2022, 0, 15);
// let date2 = new Date(2022, 6, 1);
// result = date2.getTime() - date1.getTime()
// day = Math.round(result / (1000 * 60 * 60 * 24))
// week = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = (result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${day}, weeks: ${week}, month: ${month}, years: ${years}`)



// date1 = new Date(2023, 2, 10);
// date2 = new Date(2023, 9, 20);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = result / (1000 * 60 * 60 * 24 * 365)
// console.log(days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years});

// date1 = new Date(2023, 2, 10);
// date2 = new Date(2023, 9, 20);
// let dif = Math.abs(date1 - date2)
// let day = Math.floor(dif / (1000 * 60 * 60 * 24))
// let weeks = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// console.log(`days:${day} weeks:${weeks} month:${month}`);


// date1 = new Date(2021, 8, 5);
// date2 = new Date(2022, 4, 18);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// console.log([date1, date2]);

// date1 = new Date(2023, 5, 12);
// // date2 = new Date(2023, 11, 25);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// console.log([date1, date2]);

// date1 = new Date(2022, 3, 8);
// date2 = new Date(2022, 11, 31);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// console.log([date1, date2]);

// date1 = new Date(2023, 1, 20);
// date2 = new Date(2023, 7, 10);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// // console.log([date1, date2]);

// date1 = new Date(2022, 6, 7);
// // date2 = new Date(2023, 2, 14);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// console.log([date1, date2]);

// date1 = new Date(2022, 11, 1);
// date2 = new Date(2023, 6, 22);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// console.log([date1, date2]);

// date1 = new Date(2021, 4, 3);
// date2 = new Date(2022, 10, 11);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// console.log([date1, date2]);

// date1 = new Date(2023, 8, 18);
// date2 = new Date(2023, 11, 5);
// let dif = Math.abs(date1 - date2)
// let day = Math.round(dif / (1000 * 60 * 60 * 24))
// let month = Math.round(dif / (1000 * 60 * 60 * 24 * 30))
// let week = Math.round(dif / (1000 * 60 * 60 * 24 * 7))
// console.log([date1, date2]);