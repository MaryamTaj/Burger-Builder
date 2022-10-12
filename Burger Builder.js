// Access the section with the order class
const orderDiv = document.querySelector(".order");
// Access the toppings in the navigation bar
const menuItems = document.querySelectorAll("#nav .topping")
// If you click on any menu item, it adds the topping to the burger, and adds 'data-added=1' to it
menuItems.forEach((menuItem) => {
   menuItem.addEventListener("click", (e) => {  
  orderDiv.innerHTML += `<div class="topping ${menuItem.dataset.ingredient}" data-ingredient=${menuItem.dataset.ingredient} data-price=${menuItem.dataset.price} data-added=1>${menuItem.dataset.ingredient}</div>`;
   });
});

   
// Access the checkout button
const cartButton = document.querySelector("#cart");
// Access the section with the id = totalAmount 
const totalAmountDiv = document.querySelector("#totalAmount");
// Create an empty list that stores each order's price
orderPrice = [];


cartButton.addEventListener("click", (e) => {
  // Access all the toppings in the body
  const toppings = document.querySelectorAll(".order .topping");
  
  let totalAmount = 0;
  
  // Use the price of each topping to calculate the total price
  for (let i = 0; i < toppings.length; i++){
    totalAmount += Number(toppings[i].dataset.price)
  };
  // Returns the burger's total price
  totalAmountDiv.innerHTML = `This burger costs ${totalAmount}`

  // Adds the burger's price to the empty list
  orderPrice.push(totalAmount);

  // Adds up all the burger's prices
  let currentAmount = 0;
  for (let i = 0; i < orderPrice.length; i++){
    currentAmount += orderPrice[i];
  };
  console.log(orderPrice);
  console.log(currentAmount);

  // Removes all toppings added using the navigation bar
  for (let i = 0; i < toppings.length; i++){
    if (toppings[i].dataset.added === "1"){
      toppings[i].remove();
    }
  };

// When you press the checkout button, it tallies the order total
const checkoutButton = document.querySelector("#checkout");
checkoutButton.addEventListener("click", (e) => {
  totalAmountDiv.innerHTML = `Your order total is ${currentAmount}`
});
});
