const u = document.querySelector("#clear-cart")
u.addEventListener("click", () =>{
    localStorage.removeItem('cart')
    window.location.reload()
})




const products = JSON.parse(localStorage.getItem('cart')) || [] // БЕРЕДІ ИЛИ ПУСТОЙ МАССИВ ҚАЙТАРАДЫ
const crt = document.querySelector(".cart-items") // АЛУ
products.forEach(i => { // ӘРБІР ЭЛЕМЕНТ
    let card = createProductCard(i) 
    crt.appendChild(card)
})



let count = products.length // ҚАНША ШТУК ЕКЕНІ ОТОБРАЖАТЬСЯ ЕТУ ҮШІН ЛЕНЗ ҚОСТЫМ
function createProductCard(product) { // ФАНКШН
    // Create elements
    const cardDiv = document.createElement('div'); 
    cardDiv.setAttribute('id', product.id);
    cardDiv.classList.add('card');

    const boxCardDiv = document.createElement('div');
    boxCardDiv.classList.add('box-card');
    boxCardDiv.style.display = "flex"

    const cardImgDiv = document.createElement('div');
    cardImgDiv.classList.add('card-img');


    const img = document.createElement('img');
    img.setAttribute('src', product.img);
    img.setAttribute('alt', '');

    const pricePara = document.createElement('p');
    pricePara.classList.add('card_price');
    // pricePara.textContent = product.Sub_text;

    const padPanelDiv = document.createElement('div');
    padPanelDiv.classList.add('pad_panel');

    const addToCartBtn = document.createElement('button');
    // addToCartBtn.classList.add('add_btn');
    // addToCartBtn.textContent = 'ADD TO CART';

    const textCardDiv = document.createElement('div');
    textCardDiv.classList.add('text-card');

    const titleHeading = document.createElement('h2');
    titleHeading.classList.add('card_text_one');
    titleHeading.textContent = product.title;

    const textPara = document.createElement('p');
    textPara.classList.add('card_text');
    textPara.textContent = product.text;

    const price = document.createElement('h3')
    price.classList.add("price_s")
    price.textContent = product.price + " ₸";

    const closeButton = document.createElement("button");
    closeButton.innerHTML = 'x';
    closeButton.classList.add("remove-btn")

    // Construct the structure
    padPanelDiv.appendChild(addToCartBtn);
    cardImgDiv.appendChild(img);
    cardImgDiv.appendChild(pricePara);
    cardImgDiv.appendChild(padPanelDiv);

    textCardDiv.appendChild(titleHeading);
    textCardDiv.appendChild(textPara);
    textCardDiv.appendChild(price)

    boxCardDiv.appendChild(cardImgDiv);
    boxCardDiv.appendChild(textCardDiv);

    cardDiv.appendChild(boxCardDiv);
    cardDiv.appendChild(closeButton);

    closeButton.onclick = () => { // ОНКЛИК БОЛҒАНДА
        let local = JSON.parse(localStorage.getItem('cart')) || [] // ключ арқылы алу кей валу
        local = local.filter(p => p.id != product.id); // ФИЛЬТРДАН ӨТКІЗЕМІЗ 
        localStorage.setItem("cart", JSON.stringify(local)) // ЖСОНҒА АЙНАЛДЫРАМЫЗ
        closeButton.parentElement.remove() // СЫРТЫНДАҒЫ ЭЛЕМЕНТЫ УДАЛЯЕМ
        document.querySelector("#cart-size").textContent = --count // пре ИНКРЕМЕНТ АРҚЫЛЫ БІРДЕН ЕСЕПТЕП ҚАНША ШТУК ЕКЕНІН ШЫҒАРЫП ТҰР
        updatePrice()
    }


    return cardDiv;
}
 

// 

document.querySelector("#cart-size").textContent = count // ТЕСТ ҚОЙЫП ЖАТЫРҚ ЛЕНЗ 


// ПРАЙС ЕСЕПТЕП ТҰР

function updatePrice() {
    const products =  JSON.parse(localStorage.getItem('cart')) || []; // 
    let totalPrice = 0; // ДЕП АЛАМЫЗ
    products.forEach(p => totalPrice += p.price) // ӘРБІР ЭЛЕМЕНТ ҚОСАМЫЗ ТОТАЛПРАЙС ШЫҒУ ҮШІН
    document.querySelector(".cart-price p").textContent = totalPrice;// ПРОСТО ТОТАЛПРАЙС ҚОЙЫП 
}

updatePrice()