// // СТРАНИУАДА НЕШЕ ССЫЛКА БАР ЕКЕНІІН БІЛУ ҮШІН 

// // const links = document.getElementsByTagName("a")
// // console.log(links);
// // console.log(links.length);

// // const images = document.getElementsByTagName("img")
// // console.log(images);
// // console.log(images.length);
// // console.log(images[0].src);
// // for(let i of images) {
// //     console.log(images[i].src); //әрбір элемнентін алу
// // }

// // const buttons = document.getElementsByTagName("button")
// // console.log(buttons);
// // console.log(button.length);


// // const id = document.getElementById("id-button")
// // console.log(id);

// // let locationDiv = document.getElementsByClassName("location")
// // console.log(locationDiv);

// // let categoryl = document.getElementsByClassName("category")
// // for (let i of categoryl){
// //     console.log(i);
// // }


// // getElementsByClassName масСИВ ҚАЙТАРАДЫ ЭЛЕМЕНТТЕР БОЛАДЫ 

// // getElementsByTagName тоже МАССИВ НО ХТМЛ ТЭГ БОЙЫНША

// // КУЭРИ СЕЛЕКТР ТЕЕК 1 ҒАНА ҚАЙТАРАДЫ ГЕР БІР НЕШЕ СУРЕТ БОЛСА 1 ШІСІН ҚАЙТАРАДЫ 

// // КУЭРИ СЕЛЕКТР АЛЛ ҚАНШАУ СОНША ШТ ҚАЙТАРАДЫ


// // syntax



// // function sayHello() {
// //     console.log('Hello')
// // }
// // setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.


// // 5 secund console hello world
// // 5 СЕКУНДТТАН КЕЙІН 
// // ТЕК 1 РЕТ ШЫҒАРАДЫ
// // function world() {
// //     console.log("Hello world")
// // }
// // setTimeout(world, 5000)


// // черЕЗ КАКОЕ ТО ВРЕМЯ БІР НӘРСЕ ҚАЙТАЛАНЫМ ШЫҒЫП ТҰРАДЫ
// // setInterval(() => {
// //     console.log("Hello")
// // }, 2000)



// // ЧЕЗЕЗ ДЖС ҚОСАМЫЗ 

// // const searchin = document.querySelector("input")
// // searchin.id = "search-bar"
// // searchin.className = "search-input" //НЕМЕСЕ БӨЛЕК БӨЛЕК АЙДИ, КЛАСС ДЕЙМІЗ
// // searchin.setAttribute("class", "search-input") // setatribut арҚЫЛЫ ДА ҚОЮҒА БОЛАДЫ  АТРИБУТТЫҢ АТЫ И ЗНАЧЕНИЕСІ

// // const headerButton = document.querySelector("#header-but");
// // headerButton.classList.add("green")
// // headerButton.classList.remove("mainbutton")

// // // ЭЛЕМЕНТТІҢ БІР НЕШЕ КЛАСЫ БОЛСА СОНЫ УДАЛИТЬ ЕТУ С ПОИОЩЬЮ РЕМУВ ИЛИ ДОБАВИТЬ С ПОМОЩЬЮ КЛАССЛИСТ

// // const street = document.getElementById("name")
// // street.textContent = "tole bi"  //aIDI ARKULU TEXT OZGERTK
// // // id 


// // setTimeout(() => {
// //     street.textContent = "Tole bi"
// // })

// // let s = document.getElementById("id-button")
// // setTimeout(() =>{
// //     s.textContent = "Bastau"
// // }, 3000)


// // const food = document.querySelector("#food-cards") // эЛЕМЕНТ  АЛЫП ТАСТАП 
// //     food.innerHTML = ` <h2>Menu</h2>  
// //      <ul class = "food-list">
// // <li>burger</li>
// // <li>Pasta</li>
// // <li>Sushi</li>
// // <li>Pizza</li>
// // </ul>`

// // let Menuoo = document.createElement("h2")  //
// // Menuoo.textContent = "Menu"
// // food.appendChild(Menuoo)

// // let foodlist = document.createElement("ul")
// // foodlist.classList.add("food-list")
// // food.appendChild(foodlist)

// // const foodspl = ["buger", "Pasta", "susi", "Pizza"]
// // for (let i = 0; i < foodspl.length; i++) {
// //     let li = document.createElement("li")
// //     li.textContent = foodspl[i]
// //     foodlist.appendChild[li]
// // }




// // const foods = document.querySelector(".food-list")
// // foods.style.listStyleType = "none"
// // foods.style.padding = 0

// // const foodstyle = document.querySelectorAll("li")
// // for ( let li of foodstyle) {
// //     li.style.color = "green"
// // }
// // // text content tEK TEXT OZGERTEDU KOSA ALMAIDU


// // for (let i = 0; i < foodstyle.length; i++) { //or ternars OPERATRS
// //     if (i % 2 == 0) {
// //          foodstyle[i].style.color = "blue"
// //     } else{
// //         foodstyle[i].style.color = "green"
// //     }
// // }



// // let title = document.createElement('h1')  // new element
// // title.className = 'title'
// // title.style.fontSize = '24px'
// // title.textContent = 'GLOVO'

// // document.body.appendChild(title) // en SONUNA KOSADU

// // let doner = document.createElement("li")
// // doner.textContent = "Doner"
// // foods.appendChild(doner)


// // appenshild еҢ СОҢЫНА ҚОСУ ОБЬЗЯТЕЛЬНО КЕРКЕ КОД ХТМЛ ФАЙЛҒА ШЫҒА АЛМАЙДЫ

// // КРЕАД ЭЛЕМЕНТ АРҚЫЛЫ НОВЫЙ ҚҰРАМЫЗ ОНЫ ҚОСУ ҮШІН АПЕНЧАЙЛД ПЕН 

// // тексконтент 

// // КЛАССНЭЙМ И КЛАСЛИСТ КЛАС АЛУ ҮШІН 

// // ИННЕР ХТМЛ КӨП ҚОЛДАНЫП КЕРЕК 

// // ПРИМЕР ҚАРАУ 

// // ДИВ ҚҰРУ 
// // БАДТҒА ЖАСАЙМЫЗ
// // ФОР АРҚЫЛЫ АППЕНД ЖАСАУ
// // 


// // let dives = document.querySelectorAll(".div-container");

// // for (let i = 0; i < dives.length; i++) {
// //     if (i % 2 === 0) {
// //         dives[i].style.background = "green";
// //     } else {
// //         dives[i].style.background = "yellow";
// //     }
// // }

// // var container = document.getElementById('container');



// // Generate numbers and append to the container
// // for (let i = 1; i <= 100; i++) {
// //     let dives = document.createElement('div');
// //     dives.textContent = i;
// //     dives.classList.add('number');


// //     if (i % 2 === 0) {
// //         dives[i].style.backgraund == "green";
// //     } else {
// //         dives[i].style.backgraund == "yellow";
// //     }

// //     // Append the number div to the container
// //     container.appendChild(dives);
// // }



// // 05,02,24
// // const headerButton = document.querySelector(`#id-button`)

// // headerButton.addEventListener("clik", () => {  // ИВЕНТ ОРЫНДАЛДҒАНДА ФУНКЦИЯ ШЫҒАРАДЫ
// //     console.log("button cliked") // МЫНА ЖЕРГЕ НЕ ЖАЗАМЫЗ СОНЫ ШЫҒАРАДЫ ӨЗГЕРТЕДІ КЛИК АПАРҒАНДА
// // })

// // // клик деген басқан кезде ӨЗГЕРЕДІ 




// // headerButton.addEventListener("mouseenter", () => {
// //   headerButton.style.color = "Yellow"

// // })
// // // МЫШКА БАРҒАН КЕЗДЕ ӨЗГЕРЕДІ

// // // ОСЫ ЕКІ ТАПСЫРМА БІР-БІРІНЕ БАЙЛАНЫСТЫ

// // headerButton.addEventListener("mouseleave", () => {
// //     headerButton.style.color = "white"
// // })   //МЫШКА КЕТКЕН  КЕЗДЕ ӨЗГЕРЕДІ ТҮС БЕРСЕК БОЛАДЫ 


// // КУЭРИ СЕЛЕКТР ИЕН АЛАМЫЗ ЭЛЕМЕНТ
// // ИВЕНТЛИСТНЕР АЛАМЫЗ АТЫН ҚОЯМЫЗ
// // ФУНКЦИЯ ЖАЗАМЫЗ
// // ИЗМЕНИНЯ КОСАМЫЗ 

// // const card = document.querySelectorAll(".category")
// // for (const img of card) {
// //     img.addEventListener("mouseenter", () => {
// //         img.style.transform = "scale(1.1)"
// //         img.style.borderBottom = "2px solid black"
// //     })

// //     img.addEventListener("mouseleave", () => {
// //         img.style.transform = "scale(1)"
// //         img.style.borderBottom = "none"
// //     })

// // }


// // const bootom = document.querySelector("#id-button")
// // bootom.addEventListener("mouseenter", () => { // МОУСИНТЕР  БОЛҒАНДА НЕ БОЛАДЫ СОНЫ ЖАЗАМЫЗ
// //     bootom.style.backgroundColor = "darkcyan"
// // })


// // bootom.addEventListener("mouseleave", () => {  //МОУСЛИВ БОЛСА НЕ БОЛАДЫ СОНЫ ЖАЗАМЫЗ
// //     bootom.style.backgroundColor = "rgb(0, 183, 183)"
// // })


// // const cafeCards = document.querySelectorAll(".section-two_card")
// // console.log(cafeCards);
// // for (const card of cafeCards) {
// //     card.addEventListener("mouseenter", () => {
// //         const imagediv = document.querySelector(".section-two_card div")
// //         imagediv.style.transform = "scale(1.1)"
// //     })

// //     card.addEventListener("mouseleave", () => {
// //         const imagediv = document.querySelector(".section-two_card div")
// //         imagediv.style.transform = "scale(1)"
// //     })


// // }


// // SAITTUN STYLE

// // const hover = document.querySelector("#id")
// // for (const o of hover) {
// //     o.addEventListener("mouseenter", () => {
// //         // const menus = document.querySelector(".menu-main a")
// //         hover.style.backgroundColor = "#FFC244FF"
// //     })

// //     o.addEventListener("mouseleave", () => {
// //         // const menus = document.querySelector(".menu-main a")
// //         hover.style.backgroundColor = "white"
// //     })
// // }





// // 06.02.24








const storeData = [
    {
        id: 1,
        name: "Salam Bro",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/565d9076196a96580be3ed764aa85ea3b5937e5276357bbc9dd030a41f8c285b?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 94,
        reviews: 500
    },
    {
        id: 2,
        name: "Bahandi",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/1b83179e9b3d0e87b2bcd473e8b42f617f8607ef5f12e2a7a044d506e70aa076?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 94,
        reviews: 450
    }, {
        id: 3,
        name: "I'm feel-good restaurants",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/13f9c3a9d078f55ec50eef46067dfc8c2fdc75a6b9ee3cf9cc385d8ee21a32ca?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 94,
        reviews: 500
    }, {
        id: 4,
        name: "KFC",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/d4648d512c4a987f61349dc7f086328f332ef6a719b63bde68f83512ad923aef?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 90,
        reviews: 500
    }, {
        id: 5,
        name: "Salam Bro",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/267157c8141ecebc7316ae9b146c2e4c01d055bd7202fcc058630beda6972da5?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 94,
        reviews: 500
    }, {
        id: 6,
        name: "Gippo",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/ab06a44ae442c05ff2ed59e2b1b9bbe492c5499a826e8787a8535971eadac6b2?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 92,
        reviews: 500
    }, {
        id: 7,
        name: "Zheka's Doner",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/47eb6734c18126b6fa411a63c2701bb165d9dca4b08dfd5a13b9891a8baa766c?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 88,
        reviews: 500
    }, {
        id: 8,
        name: "Burger King",
        imageUrl: "https://images.deliveryhero.io/image/stores-glovo/stores/50b0efb192619699c322276512203f519d994877da764c1053f691a8ffd407a3?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7Im1vZGUiOiJmaWxsIiwid2lkdGgiOjQ1MCwiaGVpZ2h0IjoyNTB9fV0=",
        rating: 93,
        reviews: 500
    },
];



function createSectionTwoCard(rest) {
    // Create elements
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("section-two_card");

    var imgDiv = document.createElement("div");
    imgDiv.classList.add("section-two_card_img"); 
    imgDiv.style.backgroundImage = `url(${rest.imageUrl})`


    var textsDiv = document.createElement("div");
    textsDiv.classList.add("section-two_card_texts");

    var heading = document.createElement("h1"); 
    heading.textContent = rest.name;

    var paragraph = document.createElement("p");
    var strongText = document.createElement("strong");
    strongText.textContent = `${rest.rating}`;
    var spanText = document.createElement("span");
    spanText.style.color = "gray";
    spanText.textContent = rest.reviews;

    // Construct the structure
    paragraph.appendChild(strongText);
    paragraph.appendChild(spanText);

    textsDiv.appendChild(heading);
    textsDiv.appendChild(paragraph);

    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(textsDiv);

    return cardDiv;
}


const container = document.querySelector(".section-two_cards")

for (const rest of storeData) {
    const card = createSectionTwoCard(rest)
    container.appendChild(card)
}


// function createSectionTwoCard(rest) {
//     // Create elements
//     var cardDiv = document.createElement("div");
//     cardDiv.classList.add("section-two_card");

//     var imgDiv = document.createElement("div");
//     imgDiv.classList.add("section-two_card_img");
//     imgDiv.style.backgroundImage = `url(${rest.imageUrl})`


//     var textsDiv = document.createElement("div");
//     textsDiv.classList.add("section-two_card_texts");

//     var heading = document.createElement("h1");
//     heading.textContent = rest.name;

//     var paragraph = document.createElement("p");
//     var strongText = document.createElement("strong");
//     strongText.textContent = `${rest.rating}`;
//     var spanText = document.createElement("span");
//     spanText.style.color = "gray";
//     spanText.textContent = rest.reviews;

//     // Construct the structure
//     paragraph.appendChild(strongText);
//     paragraph.appendChild(spanText);

//     textsDiv.appendChild(heading);
//     textsDiv.appendChild(paragraph);

//     cardDiv.appendChild(imgDiv);
//     cardDiv.appendChild(textsDiv);

//     cardDiv.addEventListener("click", () => {
//         window.location.href = `restaurant.html/salam.html?id=${rest.id}`
//     })


//     return cardDiv;
// }


// const container = document.querySelector(".section-two_cards")

// for (const rest of storeData) {
//     const card = createSectionTwoCard(rest)
//     container.appendChild(card)
// }


//08.02.24
// js тан ЭЛЕМЕНТ УДАЛИТЬ ЕТУ 

// container.removeChild(container.firstElementChild)  // ФИРСТЭЛЕМЕНЧАЙЛД АРҚЫЛЫ 1 ШІ ЭЛЕМЕНТ УДАЛИТЬ ЕТЕМІЗ
// container.removeChild(container.lastChild)    //ЛАСТЧАЙЛД ПОСЛЕДНИЙ ЭЛЕМЕНТ УДАЛИТЬ ЕТЕДІ

// container.lastElementChild.style.borderBottom = "1px solid black"  // style tozhe auusturuga boladu
// container.firstElementChild.style.borderBottom = "1px solid black"  // style tozhe auusturuga boladu



// container.children[2].style.borderBottom = "1px solid black"
// container.children[3].style.borderBottom = "1px solid black"





// // ӘРБІР ЭЛЕМЕНТКЕ БОРДЕРБОТТОМ ҚОСУ ҮШІН ФОР МЕН АЛАМЫЗ

// for (let i = 0; i < container.clientHeight; i++) {
//     container.children[i].style.borderBottom = "1px solid black"
// }
// ӘРБІР ЭЛЕМЕНТКЕ БОРДЕРБОТТОМ ҚОСУ ҮШІН ФОР МЕН АЛАМЫЗ
// БӘРӘНШІ КОНТАЙНЕР 
// 2 ШІ ЧИЛДРЕННІҢ ӘРБІР ЭЛЕМЕНТІ
// 3 ШІ СТАЙЛ
// 4 ШІ ҚАНДАЙ СТАЙЛ БЕРЕМІЗ СОНЫҢ АТЫ 
// СОЛ СТАЙЛДЫҢ НАСТРОЙКАЛАРЫ



// function createSectionTwoCard(i) {
//     // Create main div element with class 'section-two_card'
//     var cardDiv = document.createElement("div");
//     cardDiv.classList.add("section-two_card");

//     // Create div for image with classes 'section-two_card_img' and 'section-two_img'
//     var imgDiv = document.createElement("div");
//     imgDiv.classList.add("section-two_card_img", "section-two_img");

//     cardDiv.style.position = 'relative'

//     // Create image element with src attribute and class 'section-two_ioimg'
//     var img = document.createElement("img");
//     img.src = i.imageUrl;
//     img.alt = "";
//     img.style.transition = 'transform 0.5s ease'
//     img.addEventListener('mouseenter', () => {
//         img.style.transform = 'scale(1.1)'
//     })
//     img.addEventListener('mouseleave', () => {
//         img.style.transform = 'scale(1.0)'
//     })
//     img.classList.add("section-two_ioimg");


//     // Append image to anchor element, anchor element to image div

//     imgDiv.appendChild(img);

//     // Create div for texts with class 'section-two_card_texts'
//     var textDiv = document.createElement("div");
//     textDiv.classList.add("section-two_card_texts");

//     // Create heading element
//     var heading = document.createElement("h1");
//     heading.textContent = i.name;

//     // Create div for text content with class 'section-two_card_texts-text'
//     var textContentDiv = document.createElement("div");
//     textContentDiv.classList.add("section-two_card_texts-text");

//     // Create image element for rating
//     var ratingImg = document.createElement("img");
//     ratingImg.src = "https://images.deliveryhero.io/image/customer-assets-glovo/store_ratings/rating_excellent.png?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19XQ==";
//     ratingImg.alt = "";
//     ratingImg.style.height = "20px";

//     // Create paragraph element for rating text
//     var ratingText = document.createElement("p");
//     ratingText.innerHTML = `<strong>${i.rating}% </strong><span style='color: gray;'>(${i.reviews}+)</span>`;

//     // Append rating elements to text content div
//     textContentDiv.appendChild(ratingImg);
//     textContentDiv.appendChild(ratingText);

//     if (i.free) {
//         let freee = document.createElement('p')
//         freee.style.display = 'flex'
//         freee.style.alignItems = 'center'
//         freee.style.backgroundColor = '#FFB928FF'
//         freee.style.padding = '0 20px 0px 10px'
//         freee.style.borderRadius = '5px'
//         let freeespan = document.createElement('span')
//         let freeeimg = document.createElement('img')
//         freeeimg.src = 'https://images.deliveryhero.io/image/customer-assets-glovo/filters/sorting/delivery_fee_light.svg?t=W3sicmVzaXplIjp7IndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19LHsic3ZnIjp7InEiOiJsb3cifX1d'
//         freeeimg.style.height = '20px'
//         freeeimg.style.marginRight = '5px'
//         freeespan.textContent = 'Free'

//         freee.appendChild(freeeimg)
//         freee.appendChild(freeespan)
//         textContentDiv.appendChild(freee)
//     }
//     // Append heading and text content div to text div
//     textDiv.appendChild(heading);
//     textDiv.appendChild(textContentDiv);

//     // Append image div and text div to main card div
//     cardDiv.appendChild(imgDiv);
//     cardDiv.appendChild(textDiv);

//     if (i.skidka) {
//         let divsk = document.createElement('div')
//         divsk.textContent = `${ i.skidka }%`
//             divsk.classList.add('div-sk')

//         cardDiv.appendChild(divsk)
//     }

//     cardDiv.addEventListener('click', () => {
//         window.location.href = `salam.html?id =${ i.id}`
//     })
//     // Return the main card div
//     return cardDiv;
// }
// let c = document.querySelector('.section-two_cards')

// for (let rest of storeData) {
//     let card = createSectionTwoCard(rest)
//     c.appendChild(card)
// }




// var ratingImg = document.createElement("img");
// ratingImg.src = "https://images.deliveryhero.io/image/customer-assets-glovo/store_ratings/rating_excellent.png?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7IndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19XQ==";
// ratingImg.alt = "";
// ratingImg.style.height = "20px";

// // Create paragraph element for rating text
// var ratingText = document.createElement("p");
// ratingText.innerHTML = `<strong>${i.rating}% </strong><span style='color: gray;'>(${i.reviews}+)</span>`;

// // Append rating elements to text content div
// textContentDiv.appendChild(ratingImg);
// textContentDiv.appendChild(ratingText);

// if (i.free) {
//     let freee = document.createElement('p')
//     freee.style.display = 'flex'
//     freee.style.alignItems = 'center'
//     freee.style.backgroundColor = '#FFB928FF'
//     freee.style.padding = '0 20px 0px 10px'
//     freee.style.borderRadius = '5px'
//     let freeespan = document.createElement('span')
//     let freeeimg = document.createElement('img')
//     freeeimg.src = 'https://images.deliveryhero.io/image/customer-assets-glovo/filters/sorting/delivery_fee_light.svg?t=W3sicmVzaXplIjp7IndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19LHsic3ZnIjp7InEiOiJsb3cifX1d'
//     freeeimg.style.height = '20px'
//     freeeimg.style.marginRight = '5px'
//     freeespan.textContent = 'Free'

//     freee.appendChild(freeeimg)
//     freee.appendChild(freeespan)
//     textContentDiv.appendChild(freee)
// }
// // Append heading and text content div to text div
// textDiv.appendChild(heading);
// textDiv.appendChild(textContentDiv);

// // Append image div and text div to main card div
// cardDiv.appendChild(imgDiv);
// cardDiv.appendChild(textDiv);

// if (i.skidka) {
//     let divsk = document.createElement('div')
//     divsk.textContent = `${ i.skidka }%`
//         divsk.classList.add('div-sk')

//     cardDiv.appendChild(divsk)
// }

// cardDiv.addEventListener('click', () => {
//     window.location.href = `salam.html ? id = ${ i.id }`
// })
// // Return the main card div
// return cardDiv;
