const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    image:
      "https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 80,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 130,
  },
  {
    id: 3,
    name: "Gaming Mouse RGB",
    image:
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 40,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    image:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 90,
  },
  {
    id: 5,
    name: "4K Ultra HD Monitor",
    image:
      "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 350,
  },
  {
    id: 6,
    name: "Noise Cancelling Earbuds",
    image:
      "https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 100,
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    image:
      "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 60,
  },
  {
    id: 8,
    name: "Laptop Backpack",
    image:
      "https://images.pexels.com/photos/1546005/pexels-photo-1546005.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 50,
  },
  {
    id: 9,
    name: "Smartphone Tripod Stand",
    image:
      "https://images.pexels.com/photos/6078129/pexels-photo-6078129.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 25,
  },
  {
    id: 10,
    name: "USB-C Fast Charger",
    image:
      "https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
  },
  {
    id: 11,
    name: "Wireless Charging Pad",
    image:
      "https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 30,
  },
  {
    id: 12,
    name: "Action Camera 4K",
    image: "https://images.pexels.com/photos/690806/pexels-photo-690806.jpeg",
    price: 200,
  },
  {
    id: 13,
    name: "Smart Home LED Bulb",
    image:
      "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 15,
  },
  {
    id: 14,
    name: "External SSD 1TB",
    image:
      "https://images.pexels.com/photos/17924342/pexels-photo-17924342.jpeg",
    price: 150,
  },
  {
    id: 15,
    name: "Ergonomic Office Chair",
    image:
      "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 230,
  },
];

const productList = document.getElementById("productList");

products.forEach((p) => {
  productList.innerHTML += `


    <div class="col-md-4" >
    <div class="card product-card m-3">
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body text-center">
    <h3 class="card-title">${p.name}</h3>
    <h5> ₹ ${p.price}</h5>
    <button class="btn btn-primary" onclick="addItem(${p.id})"  >
    add to cart</button>
   
  </div>
</div>
    
    </div>
    
    
    `;
});

let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

const addItem = (id) => {
  const item = cartItems.find((prod) => prod.id === id);

  if (item) {
    item.qty++;
  } else {
    const product = products.find((prod) => prod.id === id);

    cartItems.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cartData", JSON.stringify(cartItems));

  alert("product added");
};

console.log("cartItems", cartItems);

const showCart = () => {
  const productList = document.getElementById("product-list");

  const modal = new bootstrap.Modal(productList);

  modal.show();
  productData();
  total();
};

function productData() {
  const productData = document.getElementById("product-data");

  productData.innerHTML = "";

  cartItems.forEach((p) => {
    productData.innerHTML += `

    <tr>
    <td>${p.name}</td>
    <td>${p.price}</td>
    <td>
    <button class="btn btn-secondary btn-sm" onclick="decreaseQty(${
      p.id
    })" >-</button>
    <span class="mx-2">${p.qty}</span>
    <button class="btn btn-secondary btn-sm" onclick="increaseQty(${
      p.id
    })" >+</button>
    
    </td>
    <td> ₹ ${p.qty * p.price}</td>
    <td><button class="btn btn-sm btn-danger" onclick="removeItem(${
      p.id
    })" >Remove</button></td>
    </tr>
    `;
  });
}

const decreaseQty = (id) => {
  const item = cartItems.find((prod) => prod.id === id);

  if (item) {
    item.qty--;
  }

  if (item.qty === 0) {
    cartItems = cartItems.filter((prod) => prod.id !== id);
  }

  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem("cartData", JSON.stringify(cartItems));
  productData();
  total();
};

const increaseQty = (id) => {
  const item = cartItems.find((prod) => prod.id === id);

  if (item) {
    item.qty++;
  }

  updateLocalStorage();
};

const removeItem = (id) => {
  cartItems = cartItems.filter((prod) => prod.id !== id);

  updateLocalStorage();
};

const total = () => {
  const grandTotal = document.getElementById("grand-total");

  const totalAmount = cartItems.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  grandTotal.innerHTML = `
  
  <h5>Grand Total ₹${totalAmount}</h5>
  
  `;
};

const checkOut = () => {
  if (cartItems.length === 0) {
    alert("your cart is empty");
    return;
  } else {
    alert("order placed successfully");
    cartItems = [];
    updateLocalStorage();
  }
};