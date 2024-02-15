const cards = [
    {
    id: 1,
    imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8119faecaa62d9be/65cab252670d7e5357280f8b/2020_key_art_Banner.jpg?quality=90&crop=1%3A1&width=480",
    name: "Новости об игре",
    text: "Изменения обновления 14.3",
    text2: 'Встречайте обновление 14.3 и Лунный пир 2024!',
}, 
{
    id: 2,
    imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt07cc3a4f8c68a4f4/65c2d813d6cf044d1a152212/020624_LNY24_music-theme_no_text_1920x1080_RK.jpg?quality=90&crop=1%3A1&width=480",
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
    cardContainer.addEventListener('mouseleave',() => {
        img.style.transform = 'scale(1.1)'
        cardContainer.style.borderRadius = '0px 30px 0px 0px'
    })
    // Set attributes
    cardContainer.id = 'cardContainer';   
    textContainer.classList.add('cardContainer_text');
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

for(let i of cards){
    let card = createCardContainer(i)
    container.appendChild(card)
}

