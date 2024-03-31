// function createPurchaseItem(purchaseItem) {
//     const { imgUrl, brand, category, price, quantity } = purchaseItem;

//     const cartItem = document.createElement("div");
//     cartItem.classList.add("cart-item");

//     const cartItemLeft = document.createElement("div");
//     cartItemLeft.classList.add("cart-item-left");

//     const img = document.createElement("img");
//     img.src = imgUrl;
//     img.alt = "";

//     const cartItemLeftActions = document.createElement("div");
//     cartItemLeftActions.classList.add("cart-item-left-actions");

//     const itemNameLink = document.createElement("a");
//     itemNameLink.href = "#";
//     itemNameLink.textContent = brand + " - " + category;

//     const cartItemAmount = document.createElement("div");
//     cartItemAmount.classList.add("cart-item-amount");

//     const amountText = document.createElement("p");
//     amountText.textContent = quantity + " шт.";


//     cartItemAmount.appendChild(amountText);

//     cartItemLeftActions.appendChild(itemNameLink);
//     cartItemLeftActions.appendChild(cartItemAmount);

//     cartItemLeft.appendChild(img);
//     cartItemLeft.appendChild(cartItemLeftActions);

//     const cartItemRight = document.createElement("div");
//     cartItemRight.classList.add("cart-item-right");

//     const priceText = document.createElement("p");
//     priceText.textContent = getPrice(price * quantity) + " ₸";

//     cartItemRight.appendChild(priceText);

//     cartItem.appendChild(cartItemLeft);
//     cartItem.appendChild(cartItemRight);

//     return cartItem;
// }

// function getPrice(price) {
//     let priceStr = String(price);
//     if (priceStr.length > 4) {
//         const priceSlices = [];
//         for (let i = priceStr.length - 3; i >= 0; i -= 3) {
//             priceSlices.unshift(priceStr.slice(i > 0 ? i : 0, i + 3));
//             priceStr = priceStr.slice(0, i);
//         }
//         priceSlices.unshift(priceStr);
//         priceStr = priceSlices.join(" ");
//     }
//     return priceStr;
// }

// const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// if (currentUser.purchases) {
//     const purchases = document.querySelector(".purchases");

    
//     currentUser.purchases.forEach((purchase) => {
//         const purchaseBox = document.createElement("div")
//         purchaseBox.className = "purchase";

//         const dateBox = document.createElement("h5");
//         const date = new Date(purchase.date);
//         dateBox.textContent = `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`;
//         purchaseBox.appendChild(dateBox);

//         purchase.items.forEach((item) => {
//             const purchaseItem = createPurchaseItem(item);
//             purchaseBox.appendChild(purchaseItem);
//         })
//         purchases.appendChild(purchaseBox);
//     });
