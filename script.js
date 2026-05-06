const add_laptop = document.getElementById("add_laptop");
const add_mouse = document.getElementById("add_mouse");
const add_keyboard = document.getElementById("add_keyboard");
const cartItems = document.getElementById("cartItems");
const empty = document.querySelector(".empty");
const totalPrice = document.getElementById("totalPrice");
const product_list = document.querySelector(".product_list");

let summa = 0;

add_laptop.addEventListener("click", () => {
  add_laptop.textContent = "Qoshildi ✓";
  empty.textContent = "";
  const price = 8500000;
  summa += price;
  const p = `Noutbuk - ${price} so'm`;
  product_list.innerHTML += `<p>${p}</p>`;
  totalPrice.textContent = summa;
});

add_mouse.addEventListener("click", () => {
  add_mouse.textContent = "Qoshildi ✓";
  empty.textContent = "";
  const price = 180000;
  summa += price;
  const p = `Sichqoncha - ${price} so'm`;
  product_list.innerHTML += `<p>${p}</p>`;
  totalPrice.textContent = summa;
});

add_keyboard.addEventListener("click", () => {
  add_keyboard.textContent = "Qoshildi ✓";
  empty.textContent = "";
  const price = 350000;
  summa += price;
  const p = `Klaviatura - ${price} so'm`;
  product_list.innerHTML += `<p>${p}</p>`;
  totalPrice.textContent = summa;
});
