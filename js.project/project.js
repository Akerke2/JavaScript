const mr = document.querySelector("#server_sign_up")

mr.addEventListener("click", () => { // ЕСЛИ МРҒА ТОЕСТЬ СЕРВЕР СИГН АПӨА БАССА
    window.location.href = "./login/log.html" // СТРАНИЦАНЫҢ АДРЕС МЕТОПОЛОЖЕНИЯСЫН ҚЗГЕРТІП ТҰР
})

let bascket = document.querySelector('#my_basket')

bascket.addEventListener('click', () => {
    window.location.href = './karzina/index.html' // ТОЖЕ САМОЕ
})


// const cards = [
//     {
//         id: 1,
//         imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8119faecaa62d9be/65cab252670d7e5357280f8b/2020_key_art_Banner.jpg?quality=90&crop=1%3A1&width=240",
//         name: "Новости об игре",
//         text: "Изменения обновления 14.3",
//         text2: 'Встречайте обновление 14.3 и Лунный пир 2024!',
//     },
//     {
//         id: 2,
//         imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07cc3a4f8c68a4f4/65c2d813d6cf044d1a152212/020624_LNY24_music-theme_no_text_1920x1080_RK.jpg?quality=90&crop=1%3A1&width=240",
//         name: "Медиа",
//         text: "Музыкальная тема события 'Лунный пир 2024'",
//         text2: 'Слушайте музыкальную тему Лунного пира 2024 и взмывайте в небо с духом дракона.',
//     },
//     {
//         id: 3,
//         imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt84a53cac88bcdf1d/65971771b6f924d7dcbe284e/Smolder-Header.jpg?quality=90&crop=1%3A1&width=480",
//         name: "Уголок разработчиков",
//         text: "ИСТОРИЯ СОЗДАНИЯ ЧЕМПИОНА: СМОЛДЕР",
//         text2: 'Убийственная огнедышащая милота.',
//     },

// ]
// console.log(JSON.stringify(cards));

function createCardContainer(i) {
    // Create elements
    const cardContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = i.imgUrl;

    img.addEventListener("click", () => {
        window.location.href = `./list2.html`;
    })

    const textContainer = document.createElement('div');
    const h4 = document.createElement('h4');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    cardContainer.addEventListener('mouseenter', () => {

        img.style.transform = 'scale(1.0)'
        cardContainer.style.borderRadius = '0px 0px 0px 0px'
        img.style.transition = 'transform 1s ease'
        cardContainer.style.transition = 'border-radius 0.5s ease'
    })
    cardContainer.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1.1)'
        cardContainer.style.borderRadius = '0px 30px 0px 0px'
    })
    // Set attributes
    cardContainer.id = 'cardContainer';
    textContainer.classList.add('cardContainer_text');
    img.classList.add("cardContainer_img")
    h4.textContent = i.name;
    h3.textContent = i.text;
    p.textContent = i.text2;

    // Append elements
    imgContainer.appendChild(img);
    textContainer.appendChild(h4);
    textContainer.appendChild(h3);
    textContainer.appendChild(p);
    cardContainer.appendChild(imgContainer);
    cardContainer.appendChild(textContainer);

    // Return the card container element
    return cardContainer;
}

let container = document.querySelector('.section-cards')

const url = 'https://65d6c4e3f6967ba8e3be85e9.mockapi.io/f' // СТРИНГФАЙ ЖАСАП ЯҒНИ ЖСКЕ АЙНАЛДЫЫРЫП МОКАПИ ССЛЫКАСЫН АЛДЫҚ
fetch(url)
    .then(response => response.json()) //жске айналдырады 

    .then(data => { // ПРОМИС ОРЫНДАЛҒАН КЕЗДЕ ПОСЛЕДВИТЕЛЬНО ОРЫНДАЛАДЫ
        data.forEach((product) => {
            container.appendChild(createCardContainer(product))  // ЕҢ БІРІНШІ ФУНКЦИЯ ОРЫНДАЛАДЫ ӘРБІР ЭЛЕМЕНТТІ ПРАДАКТ ДЕП АЛЫП СОСЫН
            // КОТАЙНЕРГЕ АППЕДЧАЙЛД
        })
    })
    .catch(error => console.error(error)) //ошибка шыкса соны шығарады




// for (let i of cards) {
//     let card = createCardContainer(i)
//     container.appendChild(card)
// }




// ТОТ САМЫЙ

// МАССИВПЕН ЖҰМЫС
const btns = document.querySelectorAll('.style-button-list')
const imgAnimation = document.querySelector('.img-animation')
const championName = document.querySelector('.champion-name')
const championDescription = document.querySelector('.champion-description')
const circle = document.querySelectorAll('.circle-sec-3')

// ПРОСТА БӘРІН КУЭРИСЕЛЕКТРМЕН АЛЫП 

// const imageUrls = [
//     'https://www.leagueoflegends.com/static/assassin-a648ef647c30c9411666320760cf348b.png',
//     'https://www.leagueoflegends.com/static/fighter-a4437cd565f0ef83367b671e5d07fe5c.png',
//     'https://www.leagueoflegends.com/static/mage-3982e64e8ed1cd4dceec59ad308a161d.png',
//     'https://www.leagueoflegends.com/static/marksman-479be0ed78d734df0bbf0dee3d6a512b.png',
//     'https://www.leagueoflegends.com/static/support-67a9e712458a12bbb8282bda5333a0ba.png',
//     'https://www.leagueoflegends.com/static/tank-585e210d26783e11b97d62eafa248ff4.png',
// ]

const imageUrls = [
    './img-project_list3/js.project-1img.png',
    './img-project_list3/js.project-2img.png',
    './img-project_list3/js.project-3img.png',
    './img-project_list3/js.project-4img.png',
    './img-project_list3/js.project-5img.png',
    './img-project_list3/js.project-6img.png'

]


const championNames = ['АКАЛИ', 'ЯСУО', 'ЛЮКС', 'ДЖИНКС', 'ТРЕШ', 'ЛЕОНА']

const championDescriptions = [
    'Вольная убийца',
    'Непрощенный',
    'Леди сияния',
    'Безбашенная хулиганка',
    'Страж цепей',
    'Ослепительный рассвет',
]

// ИНДЕКС ПЕН ФОТОЛАРЫ СІЙКЕС КЕЛІП ТҰР МА СОНЫ БІЛІ ҮШІН 


btns.forEach((btn, index) => {
    btn.addEventListener('click', () => { // КЛИК БОЛҒАНДА НЕ БОЛУ КЕРЕК СОНЫ ЖАЗАМЫЗ ІШІНЕ
        circle.forEach((item, i) => {
            if (i === index) {// ЕКЕУІН САЛЫСТЫРАДЫ ТЕҢ БОЛСА СТИЛЬ ҚОЙАДЫ АЛ СТИЛЬДА ГОТОВЫЙ СТАЙЛ ТҰР 
                item.classList.add('circle-sec-3-active') // КЛАСС
            } else {
                item.classList.remove('circle-sec-3-active')  // ТЕҢ КЕЛМЕСЕ ПРОСТО УДАЛИТЬ
            }
        })
        imgAnimation.src = imageUrls[index]
        championName.textContent = championNames[index]
        championDescription.textContent = championDescriptions[index]
    })
})




// 2 SHTUK KARDS

// const shtuk2 = [{
//     img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07cc3a4f8c68a4f4/65c2d813d6cf044d1a152212/020624_LNY24_music-theme_no_text_1920x1080_RK.jpg?quality=90&width=460",
//     text: "Музыкальная тема события Лунный пир 2024"
// },
// {
//     img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&width=460",
//     text: "Ранее в `Звездных защитниках`",
// }]


// function createSection(i) {
//     // Create section element
//     var section = document.createElement("section");
//     section.className = "section_2_sht_cards";

//     // Create div with class "2_sht_cards"
//     var divCard = document.createElement("div");
//     divCard.className = "2_sht_cards";

//     // Create div with class "2_sht_cards_img" and img element
//     var divImg = document.createElement("div");
//     divImg.className = "2_sht_cards_img";
//     var img = document.createElement("img");
//     img.src = i.img;
//     img.alt = "";
//     divImg.appendChild(img);

//     // Create div with class "2_sht_cards_text" and h1 element
//     var divText = document.createElement("div");
//     divText.className = "2_sht_cards_text";
//     var h1 = document.createElement("h1");
//     h1.textContent = i.text;
//     divText.appendChild(h1);

//     // Append divImg and divText to divCard
//     divCard.appendChild(divImg);
//     divCard.appendChild(divText);

//     // Append divCard to section
//     section.appendChild(divCard);

//     // Return the created section
//     return section;
// }

// const divs = document.querySelector(".section_2_sht_cards")
// for (let i of shtuk2) {
//     divs.appendChild(createSection(i))
// }



// SECTION_PRODUCTS_CARDS

let products = [
    {
        id: "post-1",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0e3f847946232167/5db05fa889fb926b491ed7ff/RiotX_ChampionList_azir.jpg?quality=90&width=250",
        Sub_text: "ИМПЕРАТОР ПУСТЫНИ",
        title: "AZIR",
    },
    {
        id: "post-2",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3d24a1482453088a/5db05fa8df78486c826dcce8/RiotX_ChampionList_anivia.jpg?quality=90&width=250",
        Sub_text: "КРИОФЕНИКС",
        title: "ANIVIA",
    },
    {
        id: "post-3",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f687c95425f73f/5db05fbd2dc72966da746704/RiotX_ChampionList_ezreal.jpg?quality=90&width=250",
        Sub_text: "ВОЛЬНЫЙ ИССЛЕДОВАТЕЛЬ",
        title: "ESRIAL",
    }, {
        id: "post-4",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt5dd3569fc67d6664/5db05fa8bd24496c390ae4d8/RiotX_ChampionList_aurelionsol.jpg?quality=90&width=250",
        Sub_text: "СОЗДАТЕЛЬ ЗВЕЗД",
        title: "AURELION SOLO",
    }, {
        id: "post-5",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39ab5027f6fa1b81/5db0601589fb926b491ed82f/RiotX_ChampionList_vladimir.jpg?quality=90&width=250",
        Sub_text: "АЛЫЙ ЖНЕЦ",
        title: "VLADIMIR",
    }, {
        id: "post-6",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt014f4b6fc9bacd10/61b1eb901d158d4007de9685/RiotX_ChampionList_caitlyn_v2.jpg?quality=90&width=250",
        Sub_text: "ШЕРИФ ПИЛТОВЕРА",
        title: "KEYTLIN",
    }, {
        id: "post-7",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8d46ada03ea1da8c/5db05fdf347d1c6baa57be31/RiotX_ChampionList_leona.jpg?quality=90&width=250",
        Sub_text: "ОСЛЕПИТЕЛЬНЫЙ РАССВЕТ",
        title: "LEONA",
    }, {
        id: "post-8",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf5f2b8de93870aef/5db05fcea6470d6ab91ce59a/RiotX_ChampionList_irelia.jpg?quality=90&width=250",
        Sub_text: "ТАНЦУЮЩАЯ С КЛИНКАМИ",
        title: "IRELYA",
    }, {
        id: "post-9",
        img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0d029ccdb18a4299/5db0601ba6470d6ab91ce5be/RiotX_ChampionList_xayah.jpg?quality=90&width=250",
        Sub_text: "БУНТАРКА",
        title: "SHAIA",
    },
];


const cards = document.querySelector(".main-cards");
function cardInner() {
    cards.innerHTML = cards.innerHTML + products.map((p) => {
        // Функция map() позволяет пройти по каждому элементу массива и преобразовать его
        // в новое значение на основе определенной функции. Эта функция создает новый массив
        // с результатами преобразования, сохраняя исходный массив неизменным. 
        return `
              <div id = "${p.id}" class = "cards">
                  <img class = "card_img" src = "${p.img}">
                //   <p class = "card_price">${p.Sub_text}</p>
                //   <h2 class = "card_text_one">${p.title}</h2>
                //   <p class = "card_text">${p.text}</p>
              </div>  
          `; //тольықтай өзгертеді элементтерді 
    }).join("");  // эЛЕМЕНТТЕР ОЗГЕРМЕУ УШЫН ДЖОУН КОСТЫК
    cardPage()
}

cardInner()


function cardPage() {
    const cardImg = document.querySelectorAll(".card_img");

    cardImg.forEach((img) => {  // ӘРБІР ЭЛЕМЕНТТКЕ ОБХОДИТСЯ ЕТЫП ШЫҒЫП БЕРІЛГЕН ФУНКЦИЯНЫ ОРЫНДАЙДЫ
        // "forEach" - это метод массива в JavaScript, который выполняет указанную функцию один раз для каждого элемента в массиве.
        //  Этот метод не создает новый массив, а просто выполняет указанное действие для каждого элемента.
        img.addEventListener('click', () => {
            window.location.href = `card.html?id=${img.parentElement.id}`;  // ЖЕКЕ ЖЕКЕ КҚРСЕТЕТІН КАРД ХТМЛ ДЕГЕН СТРАНИЦАҒА НАПРАВЛЯЕМ
        });
    });
}
