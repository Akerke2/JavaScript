

function createCartItem(cartItemData) {
    const {id, imgUrl, brand, category, price, quantity } = cartItemData;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const cartItemLeft = document.createElement("div");
    cartItemLeft.classList.add("cart-item-left");

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "";

    const cartItemLeftActions = document.createElement("div");
    cartItemLeftActions.classList.add("cart-item-left-actions");

    const itemNameLink = document.createElement("a");
    itemNameLink.href = "#";
    itemNameLink.textContent = brand + " - " + category;

    const cartItemAmount = document.createElement("div");
    cartItemAmount.classList.add("cart-item-amount");

    const trashButton = document.createElement("button");
    trashButton.innerHTML =
        cartItemData.quantity > 1
            ? '<ion-icon name="remove"></ion-icon>'
            : '<ion-icon name="trash-outline"></ion-icon>';
    // trashButton.addEventListener("click", () => {
    //     decreaseQuantity(cartItemData);
    // });



    const amountText = document.createElement("p");
    amountText.textContent = quantity;

    const addButton = document.createElement("button");
    addButton.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
    // addButton.addEventListener("click", () => increaseQuantity(cartItemData));

    cartItemAmount.appendChild(trashButton);
    cartItemAmount.appendChild(amountText);
    cartItemAmount.appendChild(addButton);

    cartItemLeftActions.appendChild(itemNameLink);
    cartItemLeftActions.appendChild(cartItemAmount);

    cartItemLeft.appendChild(img);
    cartItemLeft.appendChild(cartItemLeftActions);

    const cartItemRight = document.createElement("div");
    cartItemRight.classList.add("cart-item-right");

    const closeButton = document.createElement("button");
    closeButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    // closeButton.addEventListener("click", () => removeProduct(cartItemData));

    const priceText = document.createElement("p");
    priceText.textContent = price + " ₸";

    cartItemRight.appendChild(closeButton);
    cartItemRight.appendChild(priceText);

    cartItem.appendChild(cartItemLeft);
    cartItem.appendChild(cartItemRight);

    
    closeButton.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //localstoragdaN KORZINSA ALU

        cart = cart.filter(c=>c.id != id)

        localStorage.setItem("cart", JSON.stringify(cart)) //jsongs ainaldURAMUZ
        cartItem.remove()


    })

    return cartItem;
}


const clothes = JSON.parse(localStorage.getItem("cart")) || []


const cartscontainers = document.querySelector(".cart-items")

clothes.forEach(card=>{

    cartscontainers.appendChild(createCartItem(card))
})