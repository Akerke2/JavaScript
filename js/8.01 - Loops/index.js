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
m = 0
y = 0
for (i = 0; i <= 100; i++) {
    if (i % 2 ==0) {
        m += i
    } else {
        y += i
    }
}
console.log(m)
console.log(y)