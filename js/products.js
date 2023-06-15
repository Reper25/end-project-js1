let suits = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem(
      "products",
      JSON.stringify([
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
        ]));

        try{
          Object.keys(suits).forEach((suit) => {
            let data = suits[suit];
            let p = document.querySelector("#blessed");
            console.log(data[suit]);
            p.innerHTML += `
            <div class="container" style="display: flex">
              <div class="card" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top img-fluid" loading="lazy" alt="product">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text" id="price">R${data.price}</p>
              <a href="" class="btn btn-primary" style="width: 110px">Add to Cart</a>
            </div>
          </div>
          </div>
              `;
          });
      }catch(e) {
          // location.reload()
      }

      // function addToCart(id) {
      //   // check if there is an existing product in the cart
      //   if (cart.some((item) => item.id === id)) {
      //     changeNumberOfUnits("plus", id);
      //   } else {
      //     const product = products.find((product) => product.id === id);
      //     cart.push({
      //       ...product,
      //       numberOfUnits: 1,
      //     });
      //   }
      //   updateCart();
      // }
      // // remove from cart functionality
      
      // function removeFromCart(id) {
      //   cart = cart.filter((item) => item.id !== id);
      //   updateCart();
      // }
      
      // // updating our cart
      
      // function updateCart() {
      //   renderCartTotal();
      //   renderCartProducts();
      //   localStorage.setItem("cartItems", JSON.stringify(cart));
      // }
      // updateCart();
      
      // // change amount
      
      // function changeNumberOfUnits(action, id) {
      //   cart = cart.map((item) => {
      //     let numberOfUnits = item.numberOfUnits;
      
      //     if (item.id === id) {
      //       if (action === "minus" && numberOfUnits > 1) {
      //         numberOfUnits--;
      //       } else if (action === "plus" && numberOfUnits < item.instock) {
      //         numberOfUnits++;
      //       }
      //     }
      
      //     return {
      //       ...item,
      //       numberOfUnits,
      //     };
      //   });
      
      //   updateCart();
      // }
      // changeNumberOfUnits();
      
      // // cart total price
      
      // function renderCartTotal() {
      //   let totalCartPrice = 0;
      //   totalCartAmount = 0;
      
      //   cart.forEach((item) => {
      //     totalCartPrice += item.price * item.numberOfUnits;
      //   });
      
      //   totalPriceEl.innerHTML = `Total Price: R${totalCartPrice.toFixed(2)}`;
      // }
      
      // // clear cart
      
      // btnClear.addEventListener("click", () => {
      //   clearCart();
      // });
      // function clearCart() {
      //   if (cart.length >= 1) {
      //     if (confirm("Do you want to clear the cart")) {
      //       cart = [];
      //       localStorage.setItem("cartItems", JSON.stringify(cart));
      //       updateCart();
      //     }
      //   }
      // }
      