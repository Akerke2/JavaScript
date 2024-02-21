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





// function createCard(product) {
//     const { id, imgUrl, price, brand, category } = product;

//     const card = document.createElement("div");
//     card.classList.add("card");

//     const img = document.createElement("img");
//     img.src = imgUrl;
//     img.alt = "";

//     const priceHeading = document.createElement("h3");
//     priceHeading.textContent = price + " ₸";

//     const brandPara = document.createElement("p");
//     brandPara.textContent = brand;

//     const descriptionPara = document.createElement("p");
//     descriptionPara.textContent = category;

//     const button = document.createElement("button");
//     button.textContent = "add to cart"


//     button.addEventListener("click", () => {
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         //localstoragdaN KORZINSA ALU
//         cart.push(product);

//         localStorage.setItem("cart", JSON.stringify(cart)) //jsongs ainaldURAMUZ
//     })


//     // if (isAddedToCart(product)) {
//     //     button.textContent = "Added to cart"
//     //     button.enabled = false;

//     // } else {
//     //     button.textContent = "Add to cart";
//     //     button.addEventListener("click", () => {
//     //         addToCart(product);
//     //     });
//     // }

//     card.appendChild(img);
//     card.appendChild(priceHeading);
//     card.appendChild(brandPara);
//     card.appendChild(descriptionPara);
//     card.appendChild(button);

//     return card;
// }

// const container = document.querySelector(".cards")

// for (let i of clothes) {
//     let car = createCard(i)
//     container.appendChild(car)
// }  




const cards = document.querySelector(".cards")

function cardsInner() {
    cards.innerHTML = clothes.map(c => {
        return `
        <div class = "card" id= "${c.id}">
            <img src = "${c.imgUrl}" />
            <p class = "price">${c.price}t</p>
            <button class = "add">add to card</button>



        </div>
        `
    })
    addBasked()

}

function addBasked() {
    const addbtn = document.querySelectorAll(".add")
    addbtn.forEach(btn => {
        btn.onclick = () => {
            let id = btn.parentElement.id;
            let cart = JSON.parse(localStorage.getItem("cart")) || []
            let cartFind = cart.find(c => c.id == id)
            if (!cartFind) {

                let newCart = clothes.find(c => c.id == id)
                cart.push(newCart)
                localStorage.setItem("cart", JSON.stringify(cart))
            }

        }


    })
}

cardsInner()