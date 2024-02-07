const product = [{
    id: 1,
    name: "EA7",
    clotype: "Костюм спортивный",
    price: "108.800₸",
    imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADG578501_22455565_1_v1_2x.jpg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/E/A/EA002EMHKYN5_10152279_2_v2_2x.jpg"
},
{
    id: 2,
    name: "Hopenlife",
    clotype: "Куртка утепленная",
    price: "52.800₸",
    imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADG578501_22455565_1_v1_2x.jpg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADG578501_22455566_2_v1_2x.jpg"
}, {
    id: 3,
    name: "Mavi",
    clotype: "Sweater",
    price: "31.340₸",
    imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JF_22454866_1_v1_2x.jpg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JF_22454867_2_v1_2x.jpg"
}, {
    id: 4,
    name: "SweaterShirt",
    clotype: "Mavi",
    price: "25.740",
    imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JL_22454870_1_v1_2x.jpg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM004JL_22454871_2_v1_2x.jpg"
}, {
    id: 5,
    name: "Mango Man",
    clotype: "Polo",
    price: "24.990",
    imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADF619901_22105062_1_v1.jpg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/R/T/RTLADF619901_22105063_2_v1.jpg"
}, {
    id: 6,
    name: "Fin-Flare",
    clotype: "Bruki",
    price: "16.500",
    imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0T0VF_20277911_1_v1.jpeg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/E/A/EA002EMHKYN5_10152279_2_v2_2x.jpg"
}, {
    id: 7,
    name: "Marc'O Polo",
    clotype: "Puhovic",
    price: "141.700",
    imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521300_1_v1_2x.jpg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM256FI_21521301_2_v1_2x.jpg"
}, {
    id: 8,
    name: "Befree",
    clotype: "Tolstovka",
    price: "24.380",
    imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0VBRI_21609504_1_v1.jpeg",
    // imageUrl: "https://a.lmcdn.ru/img600x866/M/P/MP002XM0VBRI_21609507_2_v1.jpeg"
},

];

const brendsp = product.find(r => r.id == id)
console.log(brendsp);

const namess = document.querySelectorAll(".text")
namess.forEach(n => n.textContent = brendsp.name)
console.log(namess);

const img = document.querySelectorAll(".profil_photo")
img.forEach(src => src.src = `${brendsp.imageUrl}`)
console.log(img);

const clotype = document.querySelectorAll("#profil_photo_text_a")
clotype.forEach(m => m.textContent = `${brendsp.clotype}`)
console.log(clotype);

const price = document.querySelectorAll("#profil_photo_text_h3")
price.src = brendsp.price
console.log(price);

