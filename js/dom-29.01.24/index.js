// СТРАНИУАДА НЕШЕ ССЫЛКА БАР ЕКЕНІІН БІЛУ ҮШІН 

// const links = document.getElementsByTagName("a")
// console.log(links);
// console.log(links.length);

// const images = document.getElementsByTagName("img")
// console.log(images);
// console.log(images.length);
// console.log(images[0].src);
// for(let i of images) {
//     console.log(images[i].src); //әрбір элемнентін алу
// }

// const buttons = document.getElementsByTagName("button")
// console.log(buttons);
// console.log(button.length);


// const id = document.getElementById("id-button")
// console.log(id);

// let locationDiv = document.getElementsByClassName("location")
// console.log(locationDiv);

// let categoryl = document.getElementsByClassName("category")
// for (let i of categoryl){
//     console.log(i);
// }


// getElementsByClassName масСИВ ҚАЙТАРАДЫ ЭЛЕМЕНТТЕР БОЛАДЫ 

// getElementsByTagName тоже МАССИВ НО ХТМЛ ТЭГ БОЙЫНША

// КУЭРИ СЕЛЕКТР ТЕЕК 1 ҒАНА ҚАЙТАРАДЫ ГЕР БІР НЕШЕ СУРЕТ БОЛСА 1 ШІСІН ҚАЙТАРАДЫ 

// КУЭРИ СЕЛЕКТР АЛЛ ҚАНШАУ СОНША ШТ ҚАЙТАРАДЫ


// syntax



// function sayHello() {
//     console.log('Hello')
// }
// setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.


// 5 secund console hello world
// 5 СЕКУНДТТАН КЕЙІН 
// ТЕК 1 РЕТ ШЫҒАРАДЫ
// function world() {
//     console.log("Hello world")
// }
// setTimeout(world, 5000)


// черЕЗ КАКОЕ ТО ВРЕМЯ БІР НӘРСЕ ҚАЙТАЛАНЫМ ШЫҒЫП ТҰРАДЫ
// setInterval(() => {
//     console.log("Hello")
// }, 2000)



// ЧЕЗЕЗ ДЖС ҚОСАМЫЗ 

// const searchin = document.querySelector("input")
// searchin.id = "search-bar"
// searchin.className = "search-input" //НЕМЕСЕ БӨЛЕК БӨЛЕК АЙДИ, КЛАСС ДЕЙМІЗ
// searchin.setAttribute("class", "search-input") // setatribut арҚЫЛЫ ДА ҚОЮҒА БОЛАДЫ  АТРИБУТТЫҢ АТЫ И ЗНАЧЕНИЕСІ

// const headerButton = document.querySelector("#header-but");
// headerButton.classList.add("green")
// headerButton.classList.remove("mainbutton")

// // ЭЛЕМЕНТТІҢ БІР НЕШЕ КЛАСЫ БОЛСА СОНЫ УДАЛИТЬ ЕТУ С ПОИОЩЬЮ РЕМУВ ИЛИ ДОБАВИТЬ С ПОМОЩЬЮ КЛАССЛИСТ

// const street = document.getElementById("name")
// street.textContent = "tole bi"  //aIDI ARKULU TEXT OZGERTK
// // id 


// setTimeout(() => {
//     street.textContent = "Tole bi"
// })

// let s = document.getElementById("id-button")
// setTimeout(() =>{
//     s.textContent = "Bastau"
// }, 3000)


// const food = document.querySelector("#food-cards") // эЛЕМЕНТ  АЛЫП ТАСТАП 
//     food.innerHTML = ` <h2>Menu</h2>  
//      <ul class = "food-list">
// <li>burger</li>
// <li>Pasta</li>
// <li>Sushi</li>
// <li>Pizza</li>
// </ul>`

// let Menuoo = document.createElement("h2")  //
// Menuoo.textContent = "Menu"
// food.appendChild(Menuoo)

// let foodlist = document.createElement("ul")
// foodlist.classList.add("food-list")
// food.appendChild(foodlist)

// const foodspl = ["buger", "Pasta", "susi", "Pizza"]
// for (let i = 0; i < foodspl.length; i++) {
//     let li = document.createElement("li")
//     li.textContent = foodspl[i]
//     foodlist.appendChild[li]
// }




// const foods = document.querySelector(".food-list")
// foods.style.listStyleType = "none"
// foods.style.padding = 0

// const foodstyle = document.querySelectorAll("li")
// for ( let li of foodstyle) {
//     li.style.color = "green"
// }
// // text content tEK TEXT OZGERTEDU KOSA ALMAIDU


// for (let i = 0; i < foodstyle.length; i++) { //or ternars OPERATRS
//     if (i % 2 == 0) {
//          foodstyle[i].style.color = "blue"
//     } else{
//         foodstyle[i].style.color = "green"
//     }
// }



// let title = document.createElement('h1')  // new element
// title.className = 'title'
// title.style.fontSize = '24px'
// title.textContent = 'GLOVO'

// document.body.appendChild(title) // en SONUNA KOSADU

// let doner = document.createElement("li")
// doner.textContent = "Doner"
// foods.appendChild(doner)


// appenshild еҢ СОҢЫНА ҚОСУ ОБЬЗЯТЕЛЬНО КЕРКЕ КОД ХТМЛ ФАЙЛҒА ШЫҒА АЛМАЙДЫ

// КРЕАД ЭЛЕМЕНТ АРҚЫЛЫ НОВЫЙ ҚҰРАМЫЗ ОНЫ ҚОСУ ҮШІН АПЕНЧАЙЛД ПЕН 

// тексконтент 

// КЛАССНЭЙМ И КЛАСЛИСТ КЛАС АЛУ ҮШІН 

// ИННЕР ХТМЛ КӨП ҚОЛДАНЫП КЕРЕК 

// ПРИМЕР ҚАРАУ 

// ДИВ ҚҰРУ 
// БАДТҒА ЖАСАЙМЫЗ
// ФОР АРҚЫЛЫ АППЕНД ЖАСАУ
// 


// let dives = document.querySelectorAll(".div-container");

// for (let i = 0; i < dives.length; i++) {
//     if (i % 2 === 0) {
//         dives[i].style.background = "green";
//     } else {
//         dives[i].style.background = "yellow";
//     }
// }

// var container = document.getElementById('container');



// Generate numbers and append to the container
for (let i = 1; i <= 100; i++) {
    let dives = document.createElement('div');
    dives.textContent = i;
    dives.classList.add('number');


    if (i % 2 === 0) {
        dives[i].style.backgraund == "green";
    } else {
        dives[i].style.backgraund == "yellow";
    }

    // Append the number div to the container
    container.appendChild(dives);
}