document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const messageElement = document.getElementById('message');

    // Simple validation
    if (!name || !cardNumber || !expiryDate || !cvv) {
        messageElement.textContent = 'All fields are required.';
        return;
    }

    if (cardNumber.length !== 16) {
        messageElement.textContent = 'Card number must be 16 digits.';
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        messageElement.textContent = 'Expiry date must be in MM/YY format.';
        return;
    }

    if (cvv.length !== 3) {
        messageElement.textContent = 'CVV must be 3 digits.';
        return;
    }

    // Success message (in real applications, you would process the payment here)
    messageElement.textContent = 'Payment details submitted successfully!';
});
