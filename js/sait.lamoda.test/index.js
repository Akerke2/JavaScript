const clothes = [
    {
        id: 1,
        brand: "Reebok",
        imgUrl: "https://a.lmcdn.ru/product/R/T/RTLACN769003_22188898_1_v1_2x.jpg",
        price: 16100,
        category: "Футболка спортивная",
    },
    {
        id: 2,
        brand: "Mango Man",
        imgUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADF619601_22105044_1_v1.jpg",
        price: 19990,
        category: "Свитшот NOLA",
    },
    {
        id: 3,
        brand: "Befree",
        imgUrl:
            "https://a.lmcdn.ru/img600x866/M/P/MP002XW127K0_21862929_1_v1_2x.jpg",
        price: 18660,
        category: "Платье",
    },
    {
        id: 4,
        brand: "Snow Airwolf",
        imgUrl:
            "https://a.lmcdn.ru/img600x866/R/T/RTLADC667701_21629813_1_v1_2x.jpg",
        price: 34100,
        category: "Куртка утепленная",
    },
];


function createCard(product) {
    const { id, imgUrl, price, brand, category } = product;

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "";

    const priceHeading = document.createElement("h3");
    priceHeading.textContent = price + " ₸";

    const brandPara = document.createElement("p");
    brandPara.textContent = brand;

    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = category;

    const button = document.createElement("button");
    button.textContent = "add to cart"


    button.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //localstoragdaN KORZINSA ALU
        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart)) //jsongs ainaldURAMUZ
    })


    // if (isAddedToCart(product)) {
    //     button.textContent = "Added to cart"
    //     button.enabled = false;

    // } else {
    //     button.textContent = "Add to cart";
    //     button.addEventListener("click", () => {
    //         addToCart(product);
    //     });
    // }

    card.appendChild(img);
    card.appendChild(priceHeading);
    card.appendChild(brandPara);
    card.appendChild(descriptionPara);
    card.appendChild(button);

    return card;
}

const container = document.querySelector(".cards")
for (let i of clothes) {
    let car = createCard(i)
    container.appendChild(car)
}


// HW

// function addToCart (event) {
//     let cart = json.parse(localStorage.getItem("cart")) || []

//     let itemName = event.target.getAttribute('data-name')
//     let itemPrice = parseFloat(event.target.getAttribute('data-price'))

//     cart.push({name: itemName, price: itemPrice})

//     localStorage.setItem("cart", JSON.stringify(cart))

//     showCartItems()


// }

// let addButton = document.querySelectorAll('.header-actions')
// addButton.forEach(button => {
//     button.addEventListener('click', addToCart)
// })



// let make = JSON.parse.getItem("make") || []







// const cart = ["banana", " apple", " orange"]
// localStorage.setItem("cart", JSON.stringify(cart)) // setitem - SAKTAU

// let storedCart = localStorage.getItem("cart") // getitem = AlaMUZ
// storedCart = JSON.parse(storedCart) || [];
// console.log(storedCart);


// storedCart.push("kiwi")
// localStorage.setItem("cart", JSON.stringify(storedCart))



// подготовка к ТЕСТУ

// const local = [{
//     name: "Akerke",
//     age: 16,
//     country: "kazakhstan"
// }];

// localStorage.setItem("local", JSON.stringify(local));

// let get = localStorage.getItem("local");
// let parse = JSON.parse(get) || [];

// // Проверяем, удалось ли распарсить строку JSON
// if (parse instanceof Array) {
//     console.log(parse);
// } else {
//     console.log("Ошибка при парсинге строки JSON из localStorage");
//     // Здесь можно выполнить дополнительные действия по обработке ошибки, если необходимо
// }




// ДОПОЛНИТЕЛЬНЫЕ УРОКИ


