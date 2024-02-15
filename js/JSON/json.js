let product = [
    {
        id: 1,
        name: 'Бананы',
        img:'https://arbuz.kz/image/s3/arbuz-kz-products/19445-001-s.jpg?w=360&h=360&_c=1705328654',
        kg: 0.9,
        price: 1125,
    },
    {
        id: 2,
        img:'https://arbuz.kz/image/s3/arbuz-kz-products/220448-002-s.jpg?w=360&h=360&_c=1705327358',
        name: 'Сыр Ламбер',
        kg: 1,
        price: 4038,
    },
    {
        id: 3,
        name: 'Масло шедевр',
        img:'https://arbuz.kz/image/s3/arbuz-kz-products/19736-maslo_shedevr_podsolnechnoe_1_l_.jpg?w=360&h=360&_c=1707468608',
        kg: 1,
        price: 855,
    }
]

function createBananElement(i) {
    // Create the outer div element with the class "banan"
    const bananDiv = document.createElement("div");
    bananDiv.classList.add("banan");

    // Create the img element
    const img = document.createElement("img");
    img.src = i.img
    img.style.height = '110px'
    img.setAttribute("alt", "");

    // Create the div element with the class "banan-text"
    const bananTextDiv = document.createElement("div");
    bananTextDiv.classList.add("banan-text");

    // Create the div element with the class "banan-text-1"
    const bananText1Div = document.createElement("div");
    bananText1Div.classList.add("banan-text-1");

    // Create the first div inside "banan-text-1" for the text "Banana"
    const bananaDiv = document.createElement("div");
    bananaDiv.textContent = i.name;

    // Create the div element with the class "kg" for the weight section
    const kgDiv = document.createElement("div");
    kgDiv.classList.add("kg");

    // Create the trash icon
    const trashIcon = document.createElement("ion-icon");
    trashIcon.setAttribute("name", "trash-outline");

    // Create the paragraph element for the weight
    const weightParagraph = document.createElement("p");
    weightParagraph.classList.add("p");
    weightParagraph.textContent = `${i.kg}kg`;

    // Create the add icon
    const addIcon = document.createElement("ion-icon");
    addIcon.setAttribute("name", "add-outline");

    // Append the trash icon, weight paragraph, and add icon to the "kg" div
    kgDiv.appendChild(trashIcon);
    kgDiv.appendChild(weightParagraph);
    kgDiv.appendChild(addIcon);

    // Append the banana div and kg div to "banan-text-1" div
    bananText1Div.appendChild(bananaDiv);
    bananText1Div.appendChild(kgDiv);

    // Create the div element with the class "banan-text-2"
    const bananText2Div = document.createElement("div");
    bananText2Div.classList.add("banan-text-2");

    // Create the close icon
    const closeIcon = document.createElement("ion-icon");
    closeIcon.setAttribute("name", "close-outline");
    closeIcon.classList.add('icon')
    // Create the paragraph element for the price
    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = i.price;
    priceParagraph.classList.add('pp')

    // Append the close icon and price paragraph to "banan-text-2" div
    bananText2Div.appendChild(closeIcon);
    bananText2Div.appendChild(priceParagraph);

    // Append the img, "banan-text-1", and "banan-text-2" divs to the "banan" div
    bananDiv.appendChild(img);
    bananDiv.appendChild(bananTextDiv);
    bananTextDiv.appendChild(bananText1Div);
    bananTextDiv.appendChild(bananText2Div);

    // Return the constructed "banan" div
    return bananDiv;
}
let div = document.querySelector('.cart')
for(let i of product){
    let crd = createBananElement(i)
    div.appendChild(crd)
}