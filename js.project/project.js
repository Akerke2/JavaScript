const cards = [{
    id: 1,
    imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt047326b54b9b244d/65bc3bac7d4ae72c4a981dbf/TFT_Patch_Notes_14-3_Banner.jpg?quality=90&crop=1%3A1&width=240",
    name: "Teamfight Tactics: изменения обновления",
    text: "Начинается последний цикл Лунного Фестиваля - а значит, у вас осталась пара недель, чтобы приобрести косметические товары события. В этом обновлении мы стандартизируем добычу на ранних этапах матча, а также корректируем игровой баланс.",


}, {
    id: 2,
    imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt047326b54b9b244d/65bc3bac7d4ae72c4a981dbf/TFT_Patch_Notes_14-3_Banner.jpg?quality=90&crop=1%3A1&width=240",
    name: "Teamfight Tactics: изменения обновления",
    text: "Начинается последний цикл Лунного Фестиваля - а значит, у вас осталась пара недель, чтобы приобрести косметические товары события. В этом обновлении мы стандартизируем добычу на ранних этапах матча, а также корректируем игровой баланс.",


}, {
    id: 3,
    imgUrl: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt047326b54b9b244d/65bc3bac7d4ae72c4a981dbf/TFT_Patch_Notes_14-3_Banner.jpg?quality=90&crop=1%3A1&width=240",
    name: "Teamfight Tactics: изменения обновления",
    text: "Начинается последний цикл Лунного Фестиваля - а значит, у вас осталась пара недель, чтобы приобрести косметические товары события. В этом обновлении мы стандартизируем добычу на ранних этапах матча, а также корректируем игровой баланс.",


},

]

// function createCard(title, imageUrl, description) {
//     // Create main container element
//     var cardContainer = document.createElement("div");
//     cardContainer.id = "cardContainer";

//     // Create image container element
//     var imgContainer = document.createElement("div");
//     imgContainer.classList.add("cardContainer_img");

//     // Create image element
//     var img = document.createElement("img");
//     img.src = imageUrl;
//     img.alt = "";

//     // Append image to image container
//     imgContainer.appendChild(img);

//     // Create text container element
//     var textContainer = document.createElement("div");
//     textContainer.classList.add("cardContainer_text");

//     // Create title element
//     var titleElement = document.createElement("h3");
//     titleElement.textContent = title.name;

//     // Create description element
//     var descriptionElement = document.createElement("p");
//     descriptionElement.textContent = description;

//     // Append title and description to text container
//     textContainer.appendChild(titleElement);
//     textContainer.appendChild(descriptionElement);

//     // Append image container and text container to main container
//     cardContainer.appendChild(imgContainer);
//     cardContainer.appendChild(textContainer);

//     // Return the created card container
//     return cardContainer;
// }



function createLamodaCard(rest) {
    // Create main div element with class "lamoda-card"
    var lamodaCard = document.createElement("div");
    lamodaCard.className = "lamoda-card";

    // Create div element with class "lamoda-img"
    var lamodaImg = document.createElement("div");
    lamodaImg.className = "lamoda-img";

    // Create img element with src, width, and height attributes
    var img = document.createElement("img");
    img.src = rest.imgUrl;
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
    paragraph.textContent = `${rest.text}`;

    // Append heading and paragraph to lamodaText
    lamodaText.appendChild(heading);
    lamodaText.appendChild(paragraph);

    // Append lamodaImg and lamodaText to lamodaCard
    lamodaCard.appendChild(lamodaImg);
    lamodaCard.appendChild(lamodaText);

    // Return the constructed card
    return lamodaCard;
}




const r = document.querySelector("#cardContainer")

for (let i of cards) {
    let container = createLamodaCard(i)
    r.appendChild(container)
}

// Append the created card to some existing container in your HTML document
