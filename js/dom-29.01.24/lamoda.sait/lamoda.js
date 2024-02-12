const lamoda = [
    {
        id: 1,
        name: "Новинки одежды",
        imageUrl: "https://a.lmcdn.ru/bs2/0/81/566x448_new_clothes.jpg",
        rating: "Зимние колекций"

    },
    {
        id: 2,
        name: "Скидки до 80%",
        imageUrl: "https://a.lmcdn.ru/bs2/9/82/m_ba.jpg",
        rating: "На тысячей моделей"

    },
    {
        id: 3,
        name: "Premium",
        imageUrl: "https://a.lmcdn.ru/bs2/5/41/566x448_clothes_premium.jpg",
        rating: "Купите то что хотели давно"

    },
    {
        id: 4,
        name: "Спорт",
        imageUrl: "https://a.lmcdn.ru/bs2/9/20/566x448_clothes_sport.jpg",
        rating: "Все на тренеровок"

    }
]



function createLamodaCard(rest) {
    // Create main div element with class "lamoda-card"
    var lamodaCard = document.createElement("div");
    lamodaCard.className = "lamoda-card";

    // Create div element with class "lamoda-img"
    var lamodaImg = document.createElement("div");
    lamodaImg.className = "lamoda-img";

    // Create img element with src, width, and height attributes
    var img = document.createElement("img");
    img.src = rest.imageUrl;
    img.style.height = "250px";

    // Append img to lamodaImg
    lamodaImg.appendChild(img);

    // Create div element with class "lamoda-text"
    var lamodaText = document.createElement("div");
    lamodaText.className = "lamoda-text";

    // Create h3 element for heading
    var heading = document.createElement("h3");
    heading.textContent = rest.name;

    // Create p element for paragraph
    var paragraph = document.createElement("p");
    paragraph.textContent = `${rest.rating}`;

    // Append heading and paragraph to lamodaText
    lamodaText.appendChild(heading);
    lamodaText.appendChild(paragraph);

    // Append lamodaImg and lamodaText to lamodaCard
    lamodaCard.appendChild(lamodaImg);
    lamodaCard.appendChild(lamodaText);

    // Return the constructed card
    return lamodaCard;
}



const container = document.querySelector(".lamoda_banner");

for (const rest of lamoda) {
    const card = createLamodaCard(rest);
    container.appendChild(card);
}




// const moda = [
//     {
//         id: 1,
//         name: "108 800 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/E/A/EA002EMHKYN5_10152278_1_v2_2x.jpg",
//         text_p: "EA7",
//         text_s: "Костюм спортивный"
//     },
//     {
//         id: 2,
//         name: "49.900 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg",
//         text_p: "Vivaldi",
//         text_s: " Пальто"
//     },
//     {
//         id: 3,
//         name: "22.400 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM0VJZJ_22092919_1_v1_2x.jpeg",
//         text_p: "Sela",
//         text_s: "Рубашка джинсовая"
//     },
//     {
//         id: 4,
//         name: "141.070 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM256FI_21521300_1_v1_2x.jpg",
//         text_p: "Marc O'Polo",
//         text_s: "Пуховик"
//     },
//     {
//         id: 5,
//         name: "16.690 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLACC480301_18395368_1_v1_2x.jpg",
//         text_p: "UNIQLO",
//         text_s: "Толстовка ультраэластичная DRY"
//     },
//     {
//         id: 6,
//         name: "55.70 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLADD722701_21823405_1_v1_2x.jpg",
//         text_p: "Moaxsport",
//         text_s: "Пуховик Igora light"
//     },
//     {
//         id: 7,
//         name: "24.990 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLADF619901_22105062_1_v1.jpg",
//         text_p: "Mango Man",
//         text_s: "Поло WINNY"
//     },

//     {
//         id: 8,
//         name: "90.300 ₸",
//         imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLACG284804_21808875_1_v1_2x.jpg",
//         text_p: "Diesel",
//         text_s: " Куртка джинсовая"
//     }

// ]



// let cards = [
//     {
//         id: 1,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
//         price: '160 850 ₸',
//         text_one: 'Winterra',
//         text: 'Куртка утепленная',
//     },
//     {
//         id: 2,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MYUB_19878812_1_v1.jpeg',
//         price: '14 250 ₸',
//         text_one: 'Finn Flare',
//         text: 'Олимпийка',
//     },
//     {
//         id: 3,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
//         price: '141 070 ₸',
//         text_one: "Marc O'Pol",
//         text: 'Пуховик',
//     },
//     {
//         id: 4,
//         img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
//         price: '62 900 ₸',
//         text_one: "adidas",
//         text: 'Костюм спортивный',
//     },
//     {
//         id: 5,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
//         price: '49 900 ₸',
//         text_one: "Vivaldi",
//         text: 'Пальто',
//     },
//     {
//         id: 6,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg',
//         price: '8 950 ₸',
//         text_one: "Colin's",
//         text: 'Брюки',
//     },
//     {
//         id: 7,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
//         price: '34 875 ₸',
//         text_one: "Finn Flare",
//         text: 'Пуховик',
//     },
//     {
//         id: 8,
//         img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg',
//         price: '55 700 ₸',
//         text_one: "Moaxsport",
//         text: 'Пуховик Igora light',
//     },
// ]



const cards = [
    {

        id: 1,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
        oldPrice: 119900,
        price: 49900,
        brand: "Vivaldi",
        category: "Пальто"
    },
    {
        id: 2,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MYUB_19878812_1_v1.jpeg',
        price: 160850,
        brand: "Winterra",
        category: "Куртка утепленная"
    },
    {
        id: 3,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
        price: 54000,
        brand: "Tom Tailor",
        category: "Джинсы"
    },
    {
        id: 4,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
        oldPrice: 32490,
        price: 14250,
        brand: "Finn Flare",
        category: "Олимпийка"
    },
    {
        id: 5,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
        oldPrice: 282200,
        price: 141070,
        brand: "Marc O'Polo",
        category: "Пуховик"
    },
    {
        id: 6,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg',
        price: 62900,
        brand: "adidas",
        category: "Костюм спортивный"
    },
    {
        id: 7,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
        oldPrice: 14950,
        price: 8950,
        brand: "Colin's",
        category: "Брюки"
    },
    {
        id: 8,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg',
        oldPrice: 113990,
        price: 34875,
        brand: "Finn Flare",
        category: "Пуховик"
    }
];









function createCard(i) {
    // Create div with class "card"
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    // Create image element with src, alt, and height attributes
    let img = document.createElement('img');
    img.src = i.img;
    img.style.height = '300px';
    cardDiv.appendChild(img);
    // Create div with class "card-text"
    var textDiv = document.createElement('div');
    textDiv.className = 'card-text';

    // Create heading element (h3) with text content
    var heading = document.createElement('h3');
    heading.textContent = i.price;

    // Create paragraph elements (p) with text content
    var paragraph1 = document.createElement('p');
    paragraph1.textContent = i.brand;

    var paragraph2 = document.createElement('p');
    paragraph2.textContent = i.category;

    // Append heading and paragraphs to textDiv
    textDiv.appendChild(heading);
    textDiv.appendChild(paragraph1);
    textDiv.appendChild(paragraph2);
    // textDiv.appendChild((item) => {
    //     `<li>${item.brand}: <del>${item.oldPrice}</del> ${item.price}</li>`
    //     paragraph1.item.style.textDecoration = "line-through"
    // })

    // Append image and textDiv to cardDiv

    cardDiv.appendChild(textDiv);
    cardDiv.addEventListener("click", () => {
        window.location.href = `profil.html?id=${i.id}`
    })
     

    return cardDiv; 
}

let con = document.querySelector(".card-card")
for (let i of cards) {
    let card = createCard(i)
    con.appendChild(card)
} 




// function createLamodaBanner(i) {
//     // Create the main div with class "lamoda_banner"
//     var lamodaBannerDiv = document.createElement("div");
//     lamodaBannerDiv.classList.add("lamoda_banner");

//     // Create the inner div with class "lamoda-card"
//     var lamodaCardDiv = document.createElement("div");
//     lamodaCardDiv.classList.add("lamoda-card");

//     // Create the div for the image with class "lamoda-img"
//     var lamodaImgDiv = document.createElement("div");
//     lamodaImgDiv.classList.add("lamoda-img");

//     // Create the image element
//     var img = document.createElement("img");
//     img.src = i.img;
//     img.width = "350";
//     img.height = "350";

//     // Append the image to the "lamoda-img" div
//     lamodaImgDiv.appendChild(img);

//     // Create the div for text with class "lamoda-text"
//     var lamodaTextDiv = document.createElement("div");
//     lamodaTextDiv.classList.add(i.price);

//     // Create the heading element
//     var heading = document.createElement("h3");
//     heading.textContent = i.brand; // Text content in Russian

//     // Create the paragraph element
//     var paragraph = document.createElement("p");
//     paragraph.textContent = i.category; // Text content in Russian

//     // Append the heading and paragraph to the "lamoda-text" div
//     lamodaTextDiv.appendChild(heading);
//     lamodaTextDiv.appendChild(paragraph);

//     // Append the "lamoda-img" div and "lamoda-text" div to the "lamoda-card" div
//     lamodaCardDiv.appendChild(lamodaImgDiv);
//     lamodaCardDiv.appendChild(lamodaTextDiv);

//     // Append the "lamoda-card" div to the "lamoda_banner" div
//     lamodaBannerDiv.appendChild(lamodaCardDiv);
//     window.location.href = `profil.html/?id==${i.id}`

//     // Return the created structure
//     return lamodaBannerDiv;
// }

// // Example usage: Append the created structure to the body of the document
// document.body.appendChild(createLamodaBanner());


// let consantrition = document.querySelector(".card-card")

// for (const opa of cards) {
//     let j = createLamodaBanner[i]
//     consantrition.appendChild(j)
// }










// // Создаем массив объектов с информацией о товарах и их старых и новых ценах
// const oldPriceList = [
//     { img: "https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg", productName: "Ноутбук", oldPrice: 500, newPrice: 450 },
//     { productName: "Смартфон", oldPrice: 300, newPrice: 280 },
//     { productName: "Планшет", oldPrice: 200, newPrice: 180 }
// ];


// // Функция для генерации HTML разметки списка цен
// function generatePriceListHTML(priceList) {
//     let html = '<ul>';
//     priceList.forEach(item => {
//         html += `<li>${item.productName}: <del>${item.oldPrice}</del> ${item.newPrice}</li>`;
    
//     });
//     html += '</ul>';
//     return html;
// }

// // Генерируем HTML разметку
// const priceListHTML = generatePriceListHTML(oldPriceList);

// // Выводим HTML разметку в консоль
// console.log(priceListHTML);

