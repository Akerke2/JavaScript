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




const moda = [
    {
        id: 1,
        name: "108 800 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/E/A/EA002EMHKYN5_10152278_1_v2_2x.jpg",
        text_p: "EA7",
        text_s: "Костюм спортивный"
    },
    {
        id: 2,
        name: "49.900 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg",
        text_p: "Vivaldi",
        text_s: " Пальто"
    },
    {
        id: 3,
        name: "22.400 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM0VJZJ_22092919_1_v1_2x.jpeg",
        text_p: "Sela",
        text_s: "Рубашка джинсовая"
    },
    {
        id: 4,
        name: "141.070 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/M/P/MP002XM256FI_21521300_1_v1_2x.jpg",
        text_p: "Marc O'Polo",
        text_s: "Пуховик"
    },
    {
        id: 5,
        name: "16.690 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLACC480301_18395368_1_v1_2x.jpg",
        text_p: "UNIQLO",
        text_s: "Толстовка ультраэластичная DRY"
    },
    {
        id: 6,
        name: "55.70 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLADD722701_21823405_1_v1_2x.jpg",
        text_p: "Moaxsport",
        text_s: "Пуховик Igora light"
    },
    {
        id: 7,
        name: "24.990 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLADF619901_22105062_1_v1.jpg",
        text_p: "Mango Man",
        text_s: "Поло WINNY"
    },

    {
        id: 8,
        name: "90.300 ₸",
        imageUrl: "https://a.lmcdn.ru/img236x341/R/T/RTLACG284804_21808875_1_v1_2x.jpg",
        text_p: "Diesel",
        text_s: " Куртка джинсовая"
    }

]



function generateProductMenu(rest) {
    const containerDiv = document.createElement('div');
    const productMenuDiv = document.createElement('div');
    const productImgDiv = document.createElement('div');
    const productImg = document.createElement('img');
    const productTextDiv = document.createElement('div');
    const priceParagraph = document.createElement('p');
    const brandParagraph = document.createElement('p');
    const descriptionParagraph = document.createElement('p');

    containerDiv.appendChild(productMenuDiv);
    productMenuDiv.appendChild(productImgDiv);
    productImgDiv.appendChild(productImg);
    productMenuDiv.appendChild(productTextDiv);
    productTextDiv.appendChild(priceParagraph);
    productTextDiv.appendChild(brandParagraph);
    productTextDiv.appendChild(descriptionParagraph);

    containerDiv.classList.add('lamoda-product-menu');
    productMenuDiv.classList.add('lamoda-product-menu');
    productImgDiv.classList.add('lamoda-product-img');

    productImg.src = rest.imageUrl;
    productImg.alt = '';
    priceParagraph.innerHTML = `${rest.name}`;
    brandParagraph.textContent = `${rest.text_p}`;
    descriptionParagraph.textContent = `${rest.text_s}`;

    return containerDiv;
}


const con = document.querySelector(".lamoda-product-menu")
for (const rest of moda) {
    const card = generateProductMenu(rest)
    con.appendChild(card)
}