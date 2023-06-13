
let featureGroup = document.querySelector(".products_container");

let products = [
  {
    id: 1,
    image: "https://i.postimg.cc/Bbkcg8Gv/best-3-piece-suits-for-women.webp",
    title: "suit",
    price: 6000,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/XvjF9Ky8/kaysha-OJvh3njq-TTQ-unsplash.jpg",
    title: "suit",
    price: 20000,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/Y0hzY6ZV/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-beige.jpg",
    title: "suit",
    price: 15000,
  },
  {
    id: 4,
    image: "https://i.postimg.cc/9MXpF5pc/portrait-handsome-fashion-stylish-hipster-businessman-model-dressed-elegant-black-suit-158538-11517.jpg",
    title: "",
    price: 20000,
  },
  {
    id: 5,
    image: "https://i.postimg.cc/qMN13rdR/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background.jpg",
    title: "suit",
    price: 30000,
  },
  {
    id: 6,
    image:
      "https://i.postimg.cc/zfr76RHb/WOMENS-ORANGE-EDITED-830x1230-crop-center.webp",
    title: "suit",
    price: 4000,
  },
  {
    id: 7,
    image:
      "https://i.postimg.cc/wBQ2pTDW/WOMENS-WHITE-TUX-EDITED-2000x2000-crop-center-jpg.webp",
    title: "suit",
    price: 50000,
  },
];

function appear(event){}
featureGroup.innerHTML = ""
products.forEach((data) => {
  featureGroup.innerHTML += `
    <div class="col-lg-4 col-md-4 col-12">
     <div class="card p-1 mx-auto px-3 mb-3 text-center" style="width:295px; height="400px">
        <img class="card-img-top" src="${data.image}" alt="Card image"  >
        <div class="card-body text-centre">
        <h4 class="card-title">${data.title}</h4>
        <h4 class="card-title">${data.price}</h4>
        <a href="" class="btn btn-primary" style="width: 110px">Add to Cart</a>
        </div>
    </div>`;
});


let display = document.querySelector('')
let cart = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
updateCart();