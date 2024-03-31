const inputs = document.querySelectorAll(".input-field"); // БАРЛЫҚ ЭЛЕМЕНТТІ АЛЫП БАЛАМЫЗ
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => { // ЮЗЕР ФОКУС ЕТКЕНДЕ
        inp.classList.add("active"); /// АВТОМАТТЫ АКТИВ ДЕГЕН КЛАСС БЕРЕМІЗ
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return; // КОГДА ЭЛЕММЕНТ ТЕРЯЕТ ФОКУС 
        inp.classList.remove("active"); // БАСҚА ФОРМАҒА БАСҚАН КЕЗДЕ ІШІНДЕ БІРДЕҢЕ БАР МА ТЕКСЕРЕДІ ЖОҚ БОЛСА АКТИВ КЛАСС УДАЛЯЕТСЯ
    });
});

toggle_btn.forEach((btn) => { // 
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode"); //  "sign-up-mode" БОЛСА УДАЛИТЬ ЕТЕДІ ЖОҚ БОЛСА ҚОСАДЫ
        
    });
});

function moveSlider() {
    let index = this.dataset.value; // ЗНАЧЕНИЕСІН АЛАМЫЗ 

    let currentImage = document.querySelector(`.img-${index}`); // ИНДЕКСІ АРҚЫЛЫ ФОТО ТАБАДЫ
    images.forEach((img) => img.classList.remove("show")); // ШОУ КЛАССЫН УДАЛЯЕТ СКРЫТЬ ЕТУ ҮШІН
    currentImage.classList.add("show"); // ШОУ ДЕГН КАЛСС ҚОСАДЫ ФОТО ОТОБРАЖАТЬСЯ ЕТУ ҮШІН

    const textSlider = document.querySelector(".text-group"); //ТЕКСТ СЛАЙД ТҰРАТЫН ЖЕР 
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`; // ТРАСНФОРМ ҚОСАМЫЗ

    bullets.forEach((bull) => bull.classList.remove("active")); // ТЕКУЩИЙ ВЫДЕЛЕНИЕНІ СБРОС ЖАСАУ ҮШІН АКТИВ ДЕГЕН КЛАССТЫ УДАЛЯЕМ
    this.classList.add("active"); // Добавляет класс "active" текущему элементу "bullet", чтобы выделить его и показать, что он выбран.
}

bullets.forEach((bullet) => { // Булеттің
    bullet.addEventListener("click", moveSlider); // ІРБІР ЭЛЕСЕНТІ КЛИК БОЛҒАНДА МУВСЛАЙДЕР ДЕГЕН ФАНКШНДЫ ШАҚЫРАДЫ
});




// 2


// const forms = document.querySelector(".forms");
// const container = document.querySelector(".container");
// const pwShowHide = document.querySelectorAll(".eye-icon");
// const links = document.querySelectorAll(".link");
// const signInNumberInput = document.querySelector(".number-signin");
// const signInPasswordInput = document.querySelector(".password-signin");
// const signInButton = document.getElementById("sign-in");
// const signOutButton = document.getElementById("sign-out");
// const accountSection = document.getElementById("account");
// const errorBox = document.querySelector(".auth-error");

// let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// if (currentUser) {
//     container.classList.add("hidden");
//     accountSection.classList.remove("hidden");
// } else {
//     container.classList.remove("hidden");
//     accountSection.classList.add("hidden");
// }

// pwShowHide.forEach((eyeIcon) => {
//     eyeIcon.addEventListener("click", () => {
//         let pwFields =
//             eyeIcon.parentElement.parentElement.querySelectorAll(".password");

//         pwFields.forEach((password) => {
//             if (password.type === "password") {
//                 password.type = "text";
//                 eyeIcon.classList.replace("bx-hide", "bx-show");
//                 return;
//             }
//             password.type = "password";
//             eyeIcon.classList.replace("bx-show", "bx-hide");
//         });
//     });
// });

// links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         forms.classList.toggle("show-signup");
//     });
// });

// signInButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     signIn();
// });

// signOutButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     signOut();
// });

// function signIn() {
//     signInButton.disabled = true;
//     signInButton.classList.add("inactive");
//     const number = signInNumberInput.value;
//     const password = signInPasswordInput.value;

//     try {
//         if (number.length < 11) {
//             throw new Error("Invalid number.");
//         }
//         if (password.length < 8) {
//             throw new Error("Password must be at least 8 characters.");
//         }
//     } catch (error) {
//         errorBox.classList.remove("hidden");
//         errorBox.firstElementChild.textContent = error.message;
//         signInButton.disabled = false;
//         signInButton.classList.remove("inactive");
//         return;
//     }

//     const user = { number: number, password: password };
//     authenticateUser(user);
// }

// async function authenticateUser(user) {
//     const url = new URL(
//         "https://65d6c4e3f6967ba8e3be85e9.mockapi.io/url"
//     );
//     url.searchParams.append("number", user.number);

//     try {
//         const usersResponse = await fetch(url, {
//             method: "GET",
//             headers: { "content-type": "application/json" },
//         });
//         console.log(usersResponse.ok)
//         if (!usersResponse.ok) throw new Error(usersResponse.statusText);
//         const users = await usersResponse.json();
//         let currentUser = users[0];
//         if (currentUser.password === user.password) {
//             localStorage.setItem("currentUser", JSON.stringify(currentUser));
//             localStorage.setItem("cart", JSON.stringify(currentUser.cart));
//             window.location = "index.html";
//         } else {
//             throw new Error("Invalid password.");
//         }
//     } catch (error) {
//         errorBox.classList.remove("hidden");
//         errorBox.firstElementChild.textContent = error.message;
//         signInButton.disabled = false;
//         signInButton.classList.remove("inactive");
//     }
// }

// function signOut() {
//     localStorage.removeItem("currentUser");
//     localStorage.removeItem("cart");
//     window.location = "index.html";
// }