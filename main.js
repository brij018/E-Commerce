const storeItems = [
  {
    pid: 1,
    title: "Wireless Bluetooth Headphones",
    img: "https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?auto=compress&cs=tinysrgb&w=600",
    cost: 80,
  },
  {
    pid: 2,
    title: "Smart Fitness Watch",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    cost: 130,
  },
  {
    pid: 3,
    title: "Gaming Mouse RGB",
    img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
    cost: 40,
  },
  {
    pid: 4,
    title: "Mechanical Keyboard",
    img: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600",
    cost: 90,
  },
  {
    pid: 5,
    title: "4K Ultra HD Monitor",
    img: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600",
    cost: 350,
  },
];

const container = document.querySelector("#itemsContainer");

function createProductCard(item) {
  return `
    <div class="col-sm-6 col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body d-flex flex-column text-center">
          <h5 class="card-title">${item.title}</h5>
          <p class="fw-semibold">₹ ${item.cost}</p>
          <button class="btn btn-primary mt-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function loadProducts() {
  container.innerHTML = storeItems.map(createProductCard).join("");
}

loadProducts();
