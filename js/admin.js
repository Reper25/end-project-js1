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
          <td> <button type="button" class="btn" id="btns1" data-bs-toggle="modal" data-bs-target="#editModal${data.id}">
          Edit
        </button>
        <!-- Modal -->
        <div class="modal fade" id="editModal${data.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editModalLabel">Edit your product here:</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">ID:</label>
                  <input type="ID" class="form-control" id="editInputID" aria-describedby="emailHelp" value="${data.id}">
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Product name:</label>
                  <input type="Product" class="form-control" id="editInputName" aria-describedby="emailHelp" value="${data.title }">
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Image URL:</label>
                  <input type="text" class="form-control" id="editInputImage" aria-describedby="emailHelp" value="${data.image}">
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Price:</label>
                  <input type="Price" class="form-control" id="editInputPrice" aria-describedby="emailHelp" value="${data.price}">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div></td>
          <td><button id="del">Delete</button></td>
        </tr>
      </tbody>
      </div>
      `;
  });
}
function deleteItems() {
  const deleteButtons = [...document.querySelectorAll("#del")];
  console.log(deleteButtons);
  deleteButtons.forEach((dele, i) => {
    dele.addEventListener("click", (e) => {
      const roww = e.target.parentElement.parentElement;
      roww.remove();
      suits.splice(e.target[i], 1);
      console.log(suits);
      localStorage.setItem("products", JSON.stringify(suits));
    });
  });
}
function addItems() {
  console.log("I WORK");
  let id = document.querySelector("#exampleInputID");
  let name = document.querySelector("#exampleInputName");
  let image = document.querySelector("#exampleInputImage");
  let price = document.querySelector("#exampleInputPrice");
  let newPartOfArray = {
    id: id.value,
    name: name.value,
    image: image.value,
    price: price.value,
  };
  suits.push(newPartOfArray);
  let p = document.querySelector("#tableRow");
  p.innerHTML = "";
  displayProducts();
}
deleteItems();