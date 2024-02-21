// CARDS 1 
const cards = [
    {
        id: 1,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8119faecaa62d9be/65cab252670d7e5357280f8b/2020_key_art_Banner.jpg?quality=90&crop=1%3A1&width=240",
        name: "Новости об игре",
        text: "Изменения обновления 14.3",
        text2: 'Встречайте обновление 14.3 и Лунный пир 2024!',
    },
    {
        id: 2,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07cc3a4f8c68a4f4/65c2d813d6cf044d1a152212/020624_LNY24_music-theme_no_text_1920x1080_RK.jpg?quality=90&crop=1%3A1&width=240",
        name: "Медиа",
        text: "Музыкальная тема события 'Лунный пир 2024'",
        text2: 'Слушайте музыкальную тему Лунного пира 2024 и взмывайте в небо с духом дракона.',
    },
    {
        id: 3,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt84a53cac88bcdf1d/65971771b6f924d7dcbe284e/Smolder-Header.jpg?quality=90&crop=1%3A1&width=480",
        name: "Уголок разработчиков",
        text: "ИСТОРИЯ СОЗДАНИЯ ЧЕМПИОНА: СМОЛДЕР",
        text2: 'Убийственная огнедышащая милота.',
    },

]

function createCardContainer(i) {
    // Create elements
    const cardContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = i.imgUrl;

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

for (let i of cards) {
    let card = createCardContainer(i)
    container.appendChild(card)
}





// CARDS 2 AND 3
const cards2 = [
    {
        id: 1,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07cc3a4f8c68a4f4/65c2d813d6cf044d1a152212/020624_LNY24_music-theme_no_text_1920x1080_RK.jpg",
        title: 'Медиа',
        name: "Музыкальная тема события 'Лунный пир 2024'",
        text: "Слушайте музыкальную тему Лунного пира 2024 и взмывайте в небо с духом дракона.",
        text2: '2 недели назад',
    },
    {
        id: 2,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3e91ad321e1ff500/65bd805d17f6094a625b39e2/020224_HS_hub-thumb_cinematic-no-text_1920x1080_RK.jpg",
        title: 'Медиа',
        name: "Желание принца | Видеоролик Лунного пира 2024",
        text: "Когда драконы и смертные празднуют вместе, случаются настоящие чудеса.",
        text2: '2 недели назад',
    },
    {
        id: 3,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltda714cd548c6688b/65ca9487918f5d111dde304d/RG_REMIX-RUMBLE_GAMEPLAY-OVERVIEW-ARTICLE_BANNER-IMAGE_1920X1080.jpg",
        title: 'Медиа',
        name: "/dev: TFT – чему нас научили 'Разрывные ремиксы'",
        text: "Рассказываем, чему нас научили 'Разрывные ремиксы' и как этот опыт повлияет на следующие наборы.",
        text2: '16 часов назад',
    }
]

function createMediaCard(i) {
    // Create the outer div element with class "section-media-card"
    var sectionMediaCard = document.createElement("div");
    sectionMediaCard.classList.add("section-media-card");

    sectionMediaCard.addEventListener('mouseenter', () => {
        innerImgDiv.style.transform = "scale(1.0)";
        innerImgDiv.style.transition = "transform 0.5s ease";
        backgroundDiv.style.borderRadius = '0px 0px 0px 0px'
        backgroundDiv.style.transition = 'border-radius 0.5s ease'
    })

    sectionMediaCard.addEventListener('mouseleave', () => {
        innerImgDiv.style.transform = "scale(1.1)";
        innerImgDiv.style.transition = "transform 0.5s ease";
        backgroundDiv.style.borderRadius = '0px 20px 0px 0px'
        backgroundDiv.style.transition = 'border-radius 0.5s ease'
    })
    // Create the div element with class "section-media-card-bacground"
    var backgroundDiv = document.createElement("div");
    backgroundDiv.classList.add("section-media-card-bacground");

    // Create the div element with class "section-media-card-img"
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("section-media-card-img");

    // Create the inner div element with class "img"
    var innerImgDiv = document.createElement("div");
    innerImgDiv.classList.add("img");
    innerImgDiv.style.backgroundImage = `url(${i.imgUrl})`;

    // Append the innerImgDiv to imgDiv
    imgDiv.appendChild(innerImgDiv);

    // Append imgDiv to backgroundDiv
    backgroundDiv.appendChild(imgDiv);

    // Append backgroundDiv to sectionMediaCard
    sectionMediaCard.appendChild(backgroundDiv);

    // Create the div element with class "section-media-card-texts"
    var textsDiv = document.createElement("div");
    textsDiv.classList.add("section-media-card-texts");

    // Create the p element with class "section-media-card-texts-p"
    var pElement = document.createElement("p");
    pElement.classList.add("section-media-card-texts-p");
    pElement.textContent = i.title; // Text content for the p element

    // Create the h1 element
    var h1Element = document.createElement("h1");
    h1Element.textContent = i.name; // Text content for the h1 element

    // Create the first paragraph element
    var firstParagraph = document.createElement("p");
    firstParagraph.textContent = i.text; // Text content for the first paragraph element

    // Create the second paragraph element
    var secondParagraph = document.createElement("p");
    secondParagraph.textContent = i.text2; // Text content for the second paragraph element

    // Append the elements to textsDiv
    textsDiv.appendChild(pElement);
    textsDiv.appendChild(h1Element);
    textsDiv.appendChild(firstParagraph);
    textsDiv.appendChild(secondParagraph);

    // Append textsDiv to sectionMediaCard
    sectionMediaCard.appendChild(textsDiv);

    // Return the created sectionMediaCard
    return sectionMediaCard;
}

let div = document.querySelector('.section-media-cards');
for (let i of cards2) {
    div.appendChild(createMediaCard(i));
}



const cards3 = [
    {
        id: 1,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbde6ab65a78493c4/6369a91c15157538267b0105/game-updates-card.jpg",
        name: "Новости об игре"
    },
    {
        id: 2,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt424706aae017bff0/651b6ebc3ce1e8351affe597/esports_v2.jpg",
        name: "Киберспорт"

    },
    {
        id: 3,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd0a5881a8c4225be/5dec5856aecae938595556c3/lore.jpg",
        name: "Вселенная"

    },
    {
        id: 4,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt28bf9582b1866f7b/6369a937acc7e051595d5602/media-card.jpg",
        name: "Медиа"

    },
    {
        id: 5,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfeb3960c3f495eec/5dec58795885d57e9b84722a/riotgames.jpg",
        name: "Riot Games"

    },
    {
        id: 6,
        imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta788c7cfe994fc39/65711d799a47df00545b3f81/news-community-update.jpg",
        name: "Сообщество"

    },

]


function createSectionMediaCategoryCard(i) {
    // Create elements
    const divContainer = document.createElement("div");
    divContainer.classList.add("section-media-category-cards");

    divContainer.addEventListener('mouseenter', () => {
        divImg.style.transform = "scale(1.0)";
        divImg.style.transition = "transform 0.5s ease";
        h1.style.marginLeft = '40px'
        h1.style.transition = 'margin-left 0.5s ease'
    });
    divContainer.addEventListener('mouseleave', () => {
        divImg.style.transform = "scale(1.1)";
        divImg.style.transition = "transform 0.5s ease";
        h1.style.marginLeft = '20px'
        h1.style.transition = 'margin-left 0.5s ease'
    });
    const divImg = document.createElement("div");
    divImg.classList.add("section-media-category-cards-img");
    divImg.style.backgroundImage = `url(${i.imgUrl})`;

    const h1 = document.createElement("h1");
    h1.classList.add("section-media-category-cards-h1");
    h1.textContent = i.name;

    // Append elements
    divContainer.appendChild(divImg);
    divContainer.appendChild(h1);

    // Return the container element
    return divContainer;
}

let section_media_category = document.querySelector('.section-media-category');

for (let i of cards3) {
    section_media_category.appendChild(createSectionMediaCategoryCard(i));
}