document.addEventListener('DOMContentLoaded', function() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let cartTotalPrice = document.getElementById('cart-total-price');
    let total = 0;

    cartItems.forEach((item, index) => {
        // Create cart item elements
        let cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        let itemImage = document.createElement('img');
        itemImage.src = item.image;

        let itemDetails = document.createElement('div');
        itemDetails.classList.add('cart-item-details');

        let itemName = document.createElement('p');
        itemName.classList.add('cart-item-name');
        itemName.textContent = item.name;

        let itemPrice = document.createElement('p');
        itemPrice.classList.add('cart-item-price');
        itemPrice.textContent = item.price;

        let quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity-container');

        let decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.onclick = function() {
            changeQuantity(index, -1);
        };

        let quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = item.quantity;
        quantityDisplay.classList.add('quantity-display');

        let incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.onclick = function() {
            changeQuantity(index, 1);
        };

        let removeButton = document.createElement('button');
        removeButton.classList.add('cart-item-remove');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeCartItem(index);
        };

        let buyNowButton = document.createElement('button');
        buyNowButton.classList.add('cart-item-buy-now');
        buyNowButton.textContent = 'Buy Now';
        buyNowButton.onclick = function() {
            buyNow(item);
        };

        quantityContainer.appendChild(decrementButton);
        quantityContainer.appendChild(quantityDisplay);
        quantityContainer.appendChild(incrementButton);

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(quantityContainer);

        cartItemElement.appendChild(itemImage);
        cartItemElement.appendChild(itemDetails);
        cartItemElement.appendChild(buyNowButton);
        cartItemElement.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemElement);

        // Calculate total price
        total += parseFloat(item.price.replace('/-', '')) * item.quantity;
    });

    cartTotalPrice.textContent = total;
});

// Function to change the quantity of an item
function changeQuantity(index, change) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems[index].quantity += change;
    if (cartItems[index].quantity < 1) {
        cartItems[index].quantity = 1;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    location.reload(); // Reload the page to update the cart
}

// Remove cart item function
function removeCartItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    location.reload(); // Reload the page to update the cart
}

// Function to handle "Buy Now" action
// Function to handle "Buy Now" action
function buyNow(item) {
    // Optionally, you can pass the item details via URL parameters or store them in localStorage for use on the payment page
    localStorage.setItem('selectedItem', JSON.stringify(item));
    window.location.href = 'payment.html';
}
