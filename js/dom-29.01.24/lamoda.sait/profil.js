// const url = window.location.href
// console.log(url);

// const id = url.split("id=")[1]
// console.log(id);


// const product = [{
//     id: 1,
//     name: "EA7",
//     clotype: "Костюм спортивный",
//     price: "108.800₸",
//     imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADG578501_22455565_1_v1_2x.jpg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/E/A/EA002EMHKYN5_10152279_2_v2_2x.jpg"
// },
// {
//     id: 2,
//     name: "Hopenlife",
//     clotype: "Куртка утепленная",
//     price: "52.800₸",
//     imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADG578501_22455565_1_v1_2x.jpg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADG578501_22455566_2_v1_2x.jpg"
// }, {
//     id: 3,
//     name: "Mavi",
//     clotype: "Sweater",
//     price: "31.340₸",
//     imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JF_22454866_1_v1_2x.jpg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JF_22454867_2_v1_2x.jpg"
// }, {
//     id: 4,
//     name: "SweaterShirt",
//     clotype: "Mavi",
//     price: "25.740",
//     imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JL_22454870_1_v1_2x.jpg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JL_22454871_2_v1_2x.jpg"
// }, {
//     id: 5,
//     name: "Mango Man",
//     clotype: "Polo",
//     price: "24.990",
//     imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADF619901_22105062_1_v1.jpg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADF619901_22105063_2_v1.jpg"
// }, {
//     id: 6,
//     name: "Fin-Flare",
//     clotype: "Bruki",
//     price: "16.500",
//     imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0T0VF_20277911_1_v1.jpeg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/E/A/EA002EMHKYN5_10152279_2_v2_2x.jpg"
// }, {
//     id: 7,
//     name: "Marc'O Polo",
//     clotype: "Puhovic",
//     price: "141.700",
//     imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521301_2_v1_2x.jpg"
// }, {
//     id: 8,
//     name: "Befree",
//     clotype: "Tolstovka",
//     price: "24.380",
//     imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0VBRI_21609504_1_v1.jpeg",
//     // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0VBRI_21609507_2_v1.jpeg"
// },

// ];

// const brendsp = product.find(r => r.id == id)
// console.log(brendsp);

// const namess = document.querySelectorAll(".text")
// namess.forEach(n => n.textContent = brendsp.name)
// console.log(namess);

// const img = document.querySelectorAll(".profil_photo")
// img.forEach(src => src.src = `${brendsp.imageUrl}`)
// console.log(img);

// const clotype = document.querySelectorAll("#profil_photo_text_a")
// clotype.forEach(m => m.textContent = `${brendsp.clotype}`)
// console.log(clotype);

// const price = document.querySelectorAll("#profil_photo_text_h3")
// price.src = brendsp.price
// console.log(price);








let url = window.location.href
console.log(url)

let id = url.split('id=')[1]

// let product = [
//     {
//         id: 1,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MVIH_12351054_1_v1_2x.jpg',
//         price: '160 850 ₸',
//         text_one: 'Winterra',
//         text: 'Куртка утепленная',
//     },
//     {
//         id: 2,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0MYUB_19878812_1_v1.jpeg',
//         price: '14 250 ₸',
//         text_one: 'Finn Flare',
//         text: 'Олимпийка',
//     },
//     {
//         id: 3,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg',
//         price: '141 070 ₸',
//         text_one: "Marc O'Pol",
//         text: 'Пуховик',
//     },
//     {
//         id: 4,
//         img: 'https://a.lmcdn.ru/img600x866/R/T/RTLACX556101_21521814_1_v1_2x.jpg',
//         price: '62 900 ₸',
//         text_one: "adidas",
//         text: 'Костюм спортивный',
//     },
//     {
//         id: 5,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0V7IF_20626479_1_v1_2x.jpg',
//         price: '49 900 ₸',
//         text_one: "Vivaldi",
//         text: 'Пальто',
//     },
//     {
//         id: 6,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW171K8_20402833_1_v1.jpeg',
//         price: '8 950 ₸',
//         text_one: "Colin's",
//         text: 'Брюки',
//     },
//     {
//         id: 7,
//         img: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM0SB6D_21287631_1_v1.jpeg',
//         price: '34 875 ₸',
//         text_one: "Finn Flare",
//         text: 'Пуховик',
//     },
//     {
//         id: 8,
//         img: 'https://a.lmcdn.ru/img600x866/R/T/RTLADD722701_21823405_1_v1_2x.jpg',
//         price: '55 700 ₸',
//         text_one: "Moaxsport",
//         text: 'Пуховик Igora light',
//     },
// ]




const product = [
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

// let ids = product.find(moda => moda.id == id)
// console.log(ids);

// let img = document.querySelectorAll(".profil_photo_select")
// forEach.img(imgs => imgs.src = ids.img)

// let price = document.querySelector(".section-div2-price")
// price.textContent = ids.brand

// let oldPrice = document.querySelector(".section-div2-text2")
// oldPrice.textContent = ids.oldPrice









let main = product.find(moda => moda.id == id)
console.log(main)

let img = document.querySelectorAll('.section-img')
img.forEach(images => images.src = main.img)

let text_s = document.querySelector('.section-div2-text1')
text_s.textContent = main.brand

let prices = document.querySelector('.section-div2-text2')
prices.textContent = main.category

let price = document.querySelector('.section-div2-price')
price.textContent = main.price




