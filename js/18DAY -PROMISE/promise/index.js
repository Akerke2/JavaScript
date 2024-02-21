// const promise = new Promise(resal)


// PROMISE - ASIHRONOST BOLMAU USHIN 


// Promise
// const doPromise = new Promise((resolve, reject) => {
//     // resolve - NEXT
//     // reject - NOT NEXT
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something wrong has happened')
//         }
//     }, 2000)
// })



// doPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error))





// // 2 EX

// const doProm = new Promise((resolve, reject) => {
//     // resolve - NEXT
//     // reject - NOT NEXT
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something wrong has happened')
//         }
//     }, 2000)
// })


//     // .then(result => {
//     //     console.log(result) // RIGHT IN THEN
//     // })
//     .then((data) => {
//         return data.map(skil => skil.toLowerCase())
//     })
//     .then((data) => {
//         return data.map(sk => sk + "!")
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(error => console.log(error)) // MISTAKE IN CATCH


// 3 turu bar

// PENDING = OZHIDANIE
// FULFILD = UDACHNO ZAVERSHENIE
// REJEXTED = NE UDACHNO 


// THEN - FULFILD BOLGANDA KELEDI && posledvetlnost
//  CATCH - REJECTED BOLGANDA



// FETCH = PROMISE

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//         // getting the data
//         console.log(data)
//     })
//     .catch(error => console.error(error)) // handling error if something wrong happens

// response - JSONAN JS KE AINALDUDRU


// ССЫЛКАНЫҢ ЖАНЫНА ҚАНДАЙДА БІР САН ЖАЗСАҚ СОЛ САНДЫ АЙДИ ҚЫЛЫП АЛЫП ИМЕННО СОЛ ТОВАРДЫ ШЫҒАРЫП БЕРЕДІ КОНЕЧНО НЕ ТОЛЬКО ТОВАР НЕ ЖАЗСАҢ СОНЫ

function createCardElement(cardInfo) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', cardInfo.image);
    imgElement.setAttribute('width', '80px');
    imgElement.setAttribute('alt', '');

    const titleElement = document.createElement('p');
    titleElement.textContent = cardInfo.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = cardInfo.description;

    const categoryElement = document.createElement('p');
    categoryElement.textContent = cardInfo.category;

    const priceElement = document.createElement('p');
    priceElement.textContent = cardInfo.price;

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(titleElement);
    cardDiv.appendChild(descriptionElement);
    cardDiv.appendChild(categoryElement);
    cardDiv.appendChild(priceElement);

    return cardDiv;
}



const url = "https://fakestoreapi.com/products"
fetch(url)
    .then((response) => response.json())

    .then((data) => {
        const cards = document.querySelector(".cards")
        data.forEach((product) => {
            cards.appendChild(createCardElement(product))
        })
    })
    .catch((error) => {
        const cards = document.querySelector(".cards")
        cards.innerHTML = `<p>Eror occured. Error: ${error}`
    })




const url1 = "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy"
fetch(url1)
    .then((response) => response.json())
    .then((data) => data.results)

    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        const cards = document.querySelector(".cards")
        cards.innerHTML = `<p>Eror occured. Error: ${error}`
    })





