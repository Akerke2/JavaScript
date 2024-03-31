const products = [{
    imageUrls: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt55c1845efec5c7d8/65cc2b31a3ff757f0d506072/02212024_LoL_Patch_14_4_Notes_Banner.jpg",
    blu_text: "Новости об игре",
    name: "Изменения обновления 14.4",
    just_t: "Riot-Rioaro - 9 дней назад"
}, {
    imageUrls: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8119faecaa62d9be/65cab252670d7e5357280f8b/2020_key_art_Banner.jpg",
    blu_text: "Новости об игре",
    name: "Изменения обновления 14.3",
    just_t: "Riot-Rioaro - 3 недели назад"
}, {
    imageUrls: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte7b1ef63107c8358/65a8a49c49a17daeb6cff3b2/2024_Key_Art.jpg",
    blu_text: "Новости об игре",
    name: "Изменения обновления 14.22",
    just_t: "Riot-Rioaro - в прошлом месяце"
}, {
    imageUrls: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8f3858fdcff6d99a/65961c8da8ee43ea36199e21/10924_LoL_Patch_14_1_Notes_Banner.jpg",
    blu_text: "Новости об игре",
    name: "Изменения обновления 13.1",
    just_t: "Riot-Rioaro - 2 месяца назад"
}, {
    imageUrls: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf6e1234810ef7df4/64c0765c75211b32bff34422/072823_Arena_FAQ_Banner.jpg",
    blu_text: "Новости об игре",
    name: "Изменения обновления 14.15",
    just_t: "Riot-Rioaro - 3 месяца назад"
}, {
    imageUrls: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt366e461a3acc1e4a/65544864cf92374c841b9e2d/112023_Patch_13_23_Notes_Banner.jpg",
    blu_text: "Новости об игре",
    name: "Изменения обновления 13.29",
    just_t: "Riot-Rioaro - 3 недели назад"
}]

function createProductContainer(i) {  // СТИЛЬДАРДЫ БІРДЕН ОСЫ ЖСТАН ҚОСЫП ЖІБЕРДІМ
    // Create main container div
    var container = document.createElement("div");
    container.classList.add("container_products");
    container.style.display = "flex" ;
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "";
    container.style.flexDirection = "row";



    // Create image div and add image
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("container_products_img");
    var img = document.createElement("img");
    img.src = i.imageUrls;
    img.width = "300";
    img.alt = "";
    imgDiv.appendChild(img);

    // Create text container and add content
    var textDiv = document.createElement("div");
    textDiv.classList.add("container_products_text");
    var authorParagraph = document.createElement("p");
    authorParagraph.textContent = i.blu_text;
    authorParagraph.style.color = "aqua"
    var titleParagraph = document.createElement("h2");
    titleParagraph.textContent = i.name;
    var subTitleParagraph = document.createElement("p");
    subTitleParagraph.textContent = i.just_t;

    textDiv.appendChild(authorParagraph);
    textDiv.appendChild(titleParagraph);
    textDiv.appendChild(subTitleParagraph);

    // Append image and text containers to main container
    container.appendChild(imgDiv);
    container.appendChild(textDiv);

    return container;
}

// Usage
// var container = createProductContainer();

// // Append the created container to some parent element in the document
// document.body.appendChild(container);

const lips = document.querySelector(".container_products")

for (let i of products) {
    let card = createProductContainer(i)
    lips.appendChild(card)
}

// КАРТА ҚҰРУ 