const lamoda = [{
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
    img.src = "https://a.lmcdn.ru/bs2/0/81/566x448_new_clothes.jpg";
    img.width = "300px";
    img.height = "300px";

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


const container = document.querySelector(".lamoda-banner");

for (const rest of lamoda) {
    const card = createLamodaCard(rest);
    container.appendChild(card);
}
