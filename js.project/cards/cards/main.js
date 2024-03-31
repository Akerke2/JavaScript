let products = [
  {
    id: "post-1",
    img: "https://www.porchdrinking.com/wp-content/uploads/2020/08/chicago.jpg",
    Sub_text: "4 days ago",
    title: "Post One",
    text: "Lorem Ipsum dolor Sit ame consectetur, Ducimus, repudiandae temporibus omnis illum max•me quod deserunt eligend dolor",
    panel_1: "4",
    panel_1_text: "READ",

    panel_2: "5123",
    panel_2_text: "VIEWS",

    panel_3: "32",
    panel_3_text: "COMMENTS",
  },
  {
    id: "post-2",
    img: "https://th.bing.com/th/id/OIP.3YQSVJ75FGOa8GipLT9-TwHaEK?rs=1&pid=ImgDetMain",
    Sub_text: "1 week ago",
    title: "Post TWO",
    text: "Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus omnis provident illum maxime quod. Lorem ipsum dolor",

    panel_1: "7",
    panel_1_text: "READ",

    panel_2: "7152",
    panel_2_text: "VIEWS",

    panel_3: "21",
    panel_3_text: "COMMENTS",
  },
  {
    id: "post-3",
    img: "https://insidesap.asia/wp-content/uploads/2021/10/Qualtrics-XM-Platform.png",
    Sub_text: "3 week ago",
    title: "Post Three",
    text: "Repudiandae corruptl amet temporibus omnis provident 'Ilum maxime. Ducimus, lorem ipsum dolor adipisicing elit",

    panel_1: "5",
    panel_1_text: "READ",

    panel_2: "3021",
    panel_2_text: "VIEWS",

    panel_3: "15",
    panel_3_text: "COMMENTS",
  },
];

const cards = document.querySelector(".main-cards");
function cardInner() {
  cards.innerHTML = products.map((p) => {
      return `
            <div id = "${p.id}" class = "cards">
                <img class = "card_img" src = "${p.img}"/>
                <p class = "card_price">${p.Sub_text}</p>
                <h2 class = "card_text_one">${p.title}</h2>
                <p class = "card_text">${p.text}</p>
                <div class="pad_panel">
                    <div>
                        <span>${p.panel_1}<sup>m</sup></span>
                        <span>${p.panel_1_text}</span>
                   </div>
                    <div>
                        <span>${p.panel_2}</span>
                        <span>${p.panel_2_text}</span>
                   </div>
                    <div>
                        <span>${p.panel_3}</span>
                        <span>${p.panel_3_text}</span>
                   </div>
               </div>
            </div>  
        `;
    }).join("");
    cardPage()
}

cardInner()


function cardPage() {
  const cardImg = document.querySelectorAll(".card_img");

  cardImg.forEach((img) => {
    img.addEventListener('click',() => {
      window.location.href = `card.html?id=${img.parentElement.id}`;
    });
  });
}
