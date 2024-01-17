// cm = +prompt("в сантиметрах")
// console.log(`${cm} / 100 = ${cm / 100}   B сантиметрах содержится ${cm / 100} полных метров`)

// // 2
// kg = +prompt("масса в килограммах")
// console.log(`${kg} / 100 = ${kg / 100} B килограммах содержится  ${kg / 100} полных центнеров`)

// // 3
// kg = +prompt("масса в килограммах")
// console.log(`${kg} / 1000 = ${kg / 1000} B килограммах содержится ${kg / 1000} полных тонн`)

// 4
// kl = +prompt("масса в килоmetrax")
// console.log(`${kg} / 1000 = ${kg / 1000} B килоmetrax содержится ${kg / 1000} полных kl`)

// 5
// m = +prompt("?")
// console.log(`${m} / 7 = ${m / 7}`)

// // 6
// m = +prompt("?")
// console.log(`${m} / 3600 = ${m / 3600}`)

// m = +prompt("?")
// console.log(`(${m} % 3600) / 60 = ${(m % 3600) / 60}`)

// m = +prompt("?")
// console.log(`${m} % 3600 = ${m % 3600}`)

// 7
console.log(130 / 130)

// 8 B

// 9

//11.1

// let numbers=Array()
// numbers.push(37)
// numbers.push(0)
// numbers.push(50)
// numbers.push(46)
// numbers.push(34)
// numbers.push(46)
// numbers.push(0)
// numbers.push(13)
// console.log(numbers)


// //11.2

// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5])
// console.log(numbers[6])
// console.log(numbers[7])
// console.log(numbers[8])


// //2/1
// function findMeters(distanceInCentimeters) {
//     return distanceInCentimeters / 100;
// }

// // Пример использования
// let distanceInCentimeters = 250;
// let meters = findMeters(distanceInCentimeters);
// console.log("Число полных метров:", meters);

// //2/2
// function findCentners(massInKilograms) {
//     return massInKilograms / 100;
// }

// // Пример использования
// let massInKilograms = 350;
// let centners = findCentners(massInKilograms);
// console.log("Число полных центнеров:", centners);

// //2/3
// function findTons(massInKilograms) {
//     return massInKilograms / 1000;
// }

// // Пример использования
// let massInKilogram = 1200;
// let tons = findTons(massInKilograms);
// console.log("Число полных тонн:", tons);

// //2/4
// function findKilometers(distanceInMeters) {
//     return distanceInMeters / 1000;
// }

// // Пример использования
// let distanceInMeters = 5000;
// let kilometers = findKilometers(distanceInMeters);
// console.log("Число полных километров:", kilometers);


// //2/1
// function findMeters(distanceInCentimeters) {
//     return distanceInCentimeters / 100;
// }

// // Пример использования
// let distanceInCentimeters = 250;
// let meters = findMeters(distanceInCentimeters);
// console.log("Число полных метров:", meters);

// //2/2
// function findCentners(massInKilograms) {
//     return massInKilograms / 100;
// }

// // Пример использования
// let massInKilograms = 350;
// let centners = findCentners(massInKilograms);
// console.log("Число полных центнеров:", centners);

// //2/3
// function findTons(massInKilograms) {
//     return massInKilograms / 1000;
// }

// // Пример использования
// let massInKilogram = 1200;
// let tons = findTons(massInKilograms);
// console.log("Число полных тонн:", tons);

// //2/4
// function findKilometers(distanceInMeters) {
//     return distanceInMeters / 1000;
// }

// // Пример использования
// let distanceInMeters = 5000;
// let kilometers = findKilometers(distanceInMeters);
// console.log("Число полных километров:", kilometers);

// //2/5
// function findWeeks(days) {
//     return days / 7;
// }

// // Пример использования
// let days = 234;
// let weeks = findWeeks(days);
// console.log("Полных недель за 234 дня:", weeks);


// //2/6

// function calculateTime(seconds) {
//     let hours = Math.floor(seconds / 3600);
//     let minutes = Math.floor((seconds % 3600) / 60);
//     let remainingSeconds = seconds % 60;

//     return {
//         hours: hours,
//         minutes: minutes,
//         seconds: remainingSeconds
//     };
// }

// // Пример использования
// let totalSeconds = 98765;
// let time = calculateTime(totalSeconds);
// console.log("Полных часов:", time.hours);
// console.log("Полных минут:", time.minutes);
// console.log("Полных секунд:", time.seconds);


// // 2/7

// function countSquaresInRectangle(length, width, squareSide) {
//     let horizontalSquares = Math.floor(length / squareSide);
//     let verticalSquares = Math.floor(width / squareSide);
//     let totalSquares = horizontalSquares * verticalSquares;

//     return totalSquares;
// }

// // Пример использования
// let rectangleLength = 543;
// let rectangleWidth = 130;
// let squareSide = 130;
// let totalSquares = countSquaresInRectangle(rectangleLength, rectangleWidth, squareSide);
// console.log("Количество квадратов:", totalSquares);

// //2/8

// function assignDayOfWeek(k, startDayOfWeek) {
//     let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     let dayIndex = (k + startDayOfWeek - 2) % 7 + 1; // -2, чтобы 1 января соответствовало индексу 1

//     return dayIndex === 0 ? 7 : dayIndex; // Приводим воскресенье к индексу 7
// }

// // Пример использования
// let k = 150; // Номер дня в году
// let startDayOfWeek = 1; // 1 - Понедельник, 2 - Вторник, ..., 7 - Воскресенье
// let dayOfWeek = assignDayOfWeek(k, startDayOfWeek);
// console.log("День недели:", daysOfWeek[dayOfWeek]);


// // 2/9

// function findMonthAndDay(nMonths, nDays) {
//     // Общее количество месяцев и дней с начала 1990 года
//     let totalMonths = nMonths;
//     let totalDays = nDays + 2; // Добавляем 2 дня

//     // Определяем месяц
//     let currentMonth = 1; // Первый месяц (январь)

//     while (totalMonths > 0) {
//         let daysInCurrentMonth = getDaysInMonth(currentMonth);

//         if (totalDays <= daysInCurrentMonth) {
//             break;
//         }

//         totalDays -= daysInCurrentMonth;
//         currentMonth++;

//         if (currentMonth > 12) {
//             currentMonth = 1;
//         }

//         totalMonths--;
//     }

//     return currentMonth;
// }

// function getDaysInMonth(month) {
//     // Функция, возвращающая количество дней в месяце
//     let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth[month - 1];
// }

// // Пример использования
// let nMonths = 3;
// let nDays = 2;
// let month = findMonthAndDay(nMonths, nDays);
// console.log("Месяц:", month);


// // 2/10
// function analyzeTwoDigitNumber(number) {
//     // Переводим число в строку для удобства работы с цифрами
//     let numberStr = number.toString();

//     // а) число десятков в нем
//     let tens = parseInt(numberStr[0]);
// }
//     // б) число единиц в нем