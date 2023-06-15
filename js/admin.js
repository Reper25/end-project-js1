let result = document.querySelector("#tableRow");
let suits = JSON.parse(localStorage.getItem("products"));
displayProducts();
function displayProducts() {
  Object.keys(suits).forEach((suit) => {
    let data = suits[suit];
    let p = document.querySelector("#tableRow");
    p.innerHTML += `
      <div class="table-responsive">
      <tbody id="admin">
        <tr>
          <th scope="row">${data.id}</th>
          <td>${data.title}</td>
          <td><img src="${data.image}" alt="logo" loading="lazy"></td>
          <td>${data.price}</td>


          <!-- Button trigger modal -->
          <td> 
        <!-- Modal -->
        <button type="button" class="btn" data-bs-toggle="modal" id="edit" data-bs-target='#editModal${
          data.id
        }'>
          Edit
        </button>
        <!-- Modal -->
        <div class="modal fade" id='editModal${
          data.id
        }' tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editModalLabel">Edit your product</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">ID:</label>
                <input type="ID" class="form-control" id="ID${
                  data.id
                }" aria-describedby="emailHelp" value="${data.id}">
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Product name:</label>
                <input type="Product" class="form-control" id="Name${
                  data.id
                }" aria-describedby="emailHelp" value="${data.title}">
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Image URL:</label>
                <input type="text" class="form-control" id="image${
                  data.id
                }" aria-describedby="emailHelp" value="${data.image}">
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Price:</label>
                <input type="Price" class="form-control" id="price${
                  data.id
                }" aria-describedby="emailHelp" value="${data.price}">
              </div>
            </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" id="sc" class="btn btn-primary" onclick='new Editsuits(${JSON.stringify(
                  data
                )})'>Save changes</button>
              </div>
            </div>
          </div>
        </div></td>
        <td><button id="del" onclick="deleteButtons()">Delete</button></td>
        </tr>
      </tbody>
      </div>
      `;
    });
deleteButtons()
  }

function addItems() {
  console.log("kkk");
  let id = document.querySelector("#exampleInputID");
  let title = document.querySelector("#exampleInputName");
  let image = document.querySelector("#exampleInputImage");
  let price = document.querySelector("#exampleInputPrice");
  let newPartOfArray = {
    id: id.value,
    title: title.value,
    image: image.value,
    price: price.value,
  };
  suits.push(newPartOfArray);
  let p = document.querySelector("#tableRow");
  p.innerHTML = "";
  displayProducts();
  localStorage.setItem("products", JSON.stringify(suits));
}
function Editsuits(data) {
  let begin = suits.findIndex((p) => {
    location.reload();
    return p.id == data.id;
  });
  this.id = document.querySelector(`#ID${data.id}`).value;
  this.title = document.querySelector(`#Name${data.id}`).value;
  this.image = document.querySelector(`#image${data.id}`).value;
  this.price = document.querySelector(`#price${data.id}`).value;
  suits[begin] = Object.assign({}, this);
  localStorage.setItem("products", JSON.stringify(suits));
  displayProducts();
}
function deleteButtons(){
  dButton = [...document.querySelectorAll('#del')];
  dButton.forEach((item)=>{
      item.addEventListener('click', deleteProduct)
      localStorage.setItem("products", JSON.stringify(suits));
})
}
function deleteProduct(event){
  result.innerHTML= ""
  let start = dButton.indexOf(event.target);
  suits.splice(start, 1);
  localStorage.setItem("products", JSON.stringify(suits));
  displayProducts()
}

// Sort button
let asc = true;
function sortProduct(){
  
if(asc === true){
  asc = false;
  suits= suits.sort((a, b) => {
    if (parseInt(a.price.split(' ')[1]) < parseInt(b.price.split(' ')[1])) {
        return -1;
    } else if (parseInt(a.price.split(' ')[1]) > parseInt(b.price.split(' ')[1])) {
        return 1;
    } else {
      return 0;
    }
});
} else {
  asc = true
suits= suits.sort((a, b) => {
      if (parseInt(a.price.split(' ')[1]) < parseInt(b.price.split(' ')[1])) {
          return 1;
      } else if (parseInt(a.price.split(' ')[1]) > parseInt(b.price.split(' ')[1])) {
          return -1;
      } else {
        return 0;
      }
  });
}
result.innerHTML = '';
displayProducts();
}
