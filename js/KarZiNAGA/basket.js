const cards = document.querySelector(".cards")
const clothes = JSON.parse(localStorage.getItem("cart")) || []







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
    button.textContent = "delete from cart"


    button.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //localstoragdaN KORZINSA ALU

        cart = cart.filter(c=>c.id != id)

        localStorage.setItem("cart", JSON.stringify(cart)) //jsongs ainaldURAMUZ
        card.remove()


    })


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

