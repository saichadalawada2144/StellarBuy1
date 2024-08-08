//for name
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("name")) {
        var userName = localStorage.getItem("name");
        document.getElementById('user-name').textContent = `Hello ${userName}`;
    }
});
//toggle button
function toggleMenu(){
    var ul=document.querySelector('ul');
    ul.classList.toggle('active');
}
//image slider
const slides=document.querySelectorAll(".slides img");
let slideindex=0;
let intervalId=null;
document.addEventListener("DOMContentLoaded",initialization);
function initialization(){
    if(slides.length>0){
    slides[slideindex].classList.add("displaySlide");
    intervalId=setInterval(nextslide,5000);
    }
}
function showSlide(index){
    if(index>=slides.length){
        slideindex=0;
    }
    else if(index<0){
        slideindex=slides.length-1;
    }
slides.forEach(slide =>{
    slide.classList.remove("displaySlide");
});
slides[slideindex].classList.add("displaySlide");
}
function prevslide(){
slideindex--;
showSlide(slideindex);
}
function nextslide(){
slideindex++;
showSlide(slideindex);
}
//unhide buy and cart
// Toggle button visibility based on clicked product
function showButtons(clickedElement) {
    let buyButton = clickedElement.parentNode.querySelector('.buy');
    let cartButton = clickedElement.parentNode.querySelector('.cart');
    if(buyButton.style.display==='none'){
        buyButton.style.display='block';
        cartButton.style.display='block';
    }
    else if(buyButton.style.display==='block'){
        buyButton.style.display='none';
        cartButton.style.display='none';
    }
}

//search
function performSearch() {
    // Get the search query
    var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    // Clear previous search results
    var sdiv = document.querySelector('.s-div');
    sdiv.innerHTML = '';

    // Search logic to find the named div and insert its contents
    var namedDivs = document.querySelectorAll('.products > div'); // Adjust selector as per your HTML structure
    if(searchQuery!='')
        {
            sdiv.style.display='block';
    namedDivs.forEach(div => {
        var productName = div.querySelector('.pname').textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            var cloneDiv = div.cloneNode(true); // Clone the entire div
            cloneDiv.classList.add('innersearch')
            sdiv.appendChild(cloneDiv);
        }
    });
}

    // Prevent form submission
    return false;
}
function cartnow(clickedElement) {
    let productElement = clickedElement.parentNode;

    let productName = productElement.querySelector('.pname').textContent;
    let productPrice = productElement.querySelector('.pcost')?.textContent ||
                       productElement.querySelector('.pcost1')?.textContent ||
                       productElement.querySelector('.pcost2')?.textContent;
    let productImage = productElement.querySelector('img').src;

    // Create a cart item object
    let cartItem = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    // Get existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the item already exists in the cart
    let existingItem = cartItems.find(item => item.name === cartItem.name);

    if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += 1;
    } else {
        // If the item is new, add it to the cart
        cartItems.push(cartItem);
    }

    // Save back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to cart page
    window.location.href = 'cart.html';
}
function buynow(item) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    window.location.href = 'payment.html';
}