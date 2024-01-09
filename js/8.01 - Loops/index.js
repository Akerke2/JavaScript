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
  