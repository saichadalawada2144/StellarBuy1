document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status-text');
    const progress = document.getElementById('progress');
    const truck = document.querySelector('.truck');
    const cargo = document.querySelector('.cargo');
    const giftBox = document.querySelector('.gift-box');
    const homeButton = document.getElementById('home-button');
    const tooltipText = document.getElementById('tooltip-text');
    
    let daysLeft = 5; // Start from 5 days
    const interval = 1000; // 1 second for each day

    // Start the truck movement as soon as the page loads
    truck.classList.add('truck-moving');

    const updateStatus = () => {
        if (daysLeft > 0) {
            statusText.textContent = `Your order will be delivered in ${daysLeft} days...`;
            tooltipText.textContent = `Stage: Day ${5 - daysLeft + 1}`;
            progress.style.width = `${(5 - daysLeft + 1) * 20}%`; // Update progress bar width
            daysLeft--;
        } else {
            statusText.textContent = 'Your order has been delivered!';
            progress.style.width = '100%'; // Ensure progress bar is full
            truck.classList.add('blast-effect'); // Add blast effect class
            giftBox.classList.add('gift-fall'); // Start gift fall animation

            // Show the home button
            homeButton.style.display = 'block';

            // Delay the truck removal until after the blast effect
            setTimeout(() => {
                truck.style.display = 'none'; // Remove truck from view
                clearInterval(timer); // Stop the interval
            }, 1000); // Delay to match the blast effect duration
        }
    };

    // Start the countdown
    const timer = setInterval(updateStatus, interval);
});

// Function to redirect to home page
function goHome() {
    window.location.href = 'home.html';
}
