document.addEventListener('DOMContentLoaded', function () {
    const signUpNameInput = document.getElementById("sign-up-name");
    const signUpEmailInput = document.getElementById("sign-up-email");
    const signUpPasswordInput = document.getElementById("sign-up-password");
    const signUpButton = document.getElementById("sign-up-button");
    const errorBox = document.getElementById("sign-up-error");

    if (!signUpNameInput || !signUpEmailInput || !signUpPasswordInput || !signUpButton || !errorBox) { //БАРЛЫҒЫ БАР МА ТЕКСЕРЕМІЗ ! осыны қою арқылы БАРЛЫҒЫН 
        console.error("One or more form elements are missing."); // ОШИБКА БОЛСА СОНЫ ШЫҒАРУ ҮШІН
        return;
    }

    signUpButton.addEventListener("click", (e) => {
        e.preventDefault(); // КОНТРОЛЬ УСТАУ ҮШІН ПРИ ВЗОИМДЕЙСТВИЕ С ЮЗЕРОМ
        signUp();
    });

    function signUp() {
        signUpButton.disabled = true;
        signUpButton.classList.add("inactive");
        const username = signUpNameInput.value; // ВАЛУЛАРЫН АЛАМЫЗ
        const email = signUpEmailInput.value;
        const password = signUpPasswordInput.value;

        try {
            if (!email.includes("@")) { // ЕГЕР МЫНАУ БОЛМАСА
                throw new Error("Invalid email.");  // МОНАУ ШЫҒАДЫ
            }
            if (password.length < 8) { // ЛЕНЗЫ 8 БОЛУ КЕРЕК
                throw new Error("Password must be at least 8 characters."); 
            }
        } catch (error) { // ЕСЛИ ПРОМИС ДҰРЫС БОЛМАСА ОСЫ ДЕЙСТВАЛАР ОРЫНДАЛАДЫ
            errorBox.classList.remove("hidden");
            errorBox.firstElementChild.textContent = error.message;
            signUpButton.disabled = false;
            signUpButton.classList.remove("inactive");
            return;
        }

        const newUser = {
            username: username,
            email: email,
            password: password
        };

        // Проверьте, существует ли ключ пользователя в localStorage.
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Добавьте нового пользователя в массив users
        users.push(newUser);

        // Сохраните обновленный массив пользователей в localStorage.
        localStorage.setItem("users", JSON.stringify(users));

        // Разместите нового пользователя на сервере
        postUser(newUser);
    }

    function postUser(user) {
        fetch("https://65d6c4e3f6967ba8e3be85e9.mockapi.io/users", { // СЕРВЕРГЕ ЗАПРОС ТАСТАЙДЫ
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => { // ЗАПРОС ОРЫНДАЛҒАНДА ОРЫНДАЛАТЫН ЗАТТАР
                if (!res.ok) throw new Error("Failed to create user.");
                return res.json();
            })
            .then((user) => { // ЗАПРОС ОРЫНДАЛҒАНДА ОРЫНДАЛАТЫН ЗАТТАР
                localStorage.setItem("currentUser", JSON.stringify(user));  // ЖСКЕ АЙНАЛДЫЫРЫП 
                window.location = "../project.html";  // АДРЕС САЙТАНЫ АУСЫТЫРЫП ЮЗЕРДІ БАСҚА СТРАНИЦАҒА НАПРАВЛЯЕМ
            })
            .catch((error) => { // ПРОМИС ОРЫНДАЛМАҒАН ЖАҒДАЙДА КЕТЧТЫН АСТЫНДАҒЫЛАРДЫ ОРЫНДАЙМЫЗ
                errorBox.classList.remove("hidden");
                errorBox.firstElementChild.textContent = error.mess;
                signUpButton.disabled = false;
                signUpButton.classList.remove("inactive");
            });
    }
});

