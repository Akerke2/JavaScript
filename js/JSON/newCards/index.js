const products = [
    {

        id: 1,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
        oldPrice: 119900,
        price: 49900,
        brand: "Vivaldi",
        category: "Пальто"
    },
    {
        id: 2,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MYUB_19878812_1_v1.jpeg',
        price: 160850,
        brand: "Winterra",
        category: "Куртка утепленная"
    },
    {
        id: 3,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
        price: 54000,
        brand: "Tom Tailor",
        category: "Джинсы"
    },
    {
        id: 4,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
        oldPrice: 32490,
        price: 14250,
        brand: "Finn Flare",
        category: "Олимпийка"
    },
    {
        id: 5,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
        oldPrice: 282200,
        price: 141070,
        brand: "Marc O'Polo",
        category: "Пуховик"
    },
    {
        id: 6,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg',
        price: 62900,
        brand: "adidas",
        category: "Костюм спортивный"
    },
    {
        id: 7,
        img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
        oldPrice: 14950,
        price: 8950,
        brand: "Colin's",
        category: "Брюки"
    },
    {
        id: 8,
        img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg',
        oldPrice: 113990,
        price: 34875,
        brand: "Finn Flare",
        category: "Пуховик"
    }
];


const cards = document.querySelector(".cards")



function createCards(){
    cards.innerHTML=products.map(product =>{
        const cardDiv = `
        <div class="card" id="${product.id}">
            <img class="card_img" src="${product.img}" alt=""/>
            <h6>${product.price}<h6/>
            <h6>${product.brand}<h6/>
            <h6>${product.category}<h6/>
        <div/>
        `;
        return cardDiv
    })
    .join("");

    cardPage()
}

function cardPage() {
    const imgs = document.querySelectorAll(".card_img")
    
    imgs.forEach(img => {
        img.onclick=()=>{
            // let product = products.find(p=> p.id == img.parentElement.id);
            // console.log(product.id); // or =>

            window.location.href=`card.html?id=${img.parentElement.id}`  // kandai stranisada turnmuz sonun MESTOPOZHENIE

            
        };
        
    })
}




createCards()