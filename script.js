document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const container = document.querySelector('.container');
    
    // Function to move the No button to a random position
    function moveNoButton() {
        // Get container dimensions
        const containerRect = container.getBoundingClientRect();
        
        // Calculate max positions (button shouldn't go outside container)
        const maxX = containerRect.width - noButton.offsetWidth - 80; // Adding padding
        const maxY = containerRect.height - noButton.offsetHeight - 80;
        
        // Generate random position within container boundaries
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        // Set the new position
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
    
    // Move the button when hovering over it
    noButton.addEventListener('mouseover', moveNoButton);
    
    // Move the button when mouse gets within 100px of it
    document.addEventListener('mousemove', function(e) {
        const buttonRect = noButton.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const distance = Math.sqrt(
            Math.pow(mouseX - buttonX, 2) + 
            Math.pow(mouseY - buttonY, 2)
        );
        
        if (distance < 100) {
            moveNoButton();
        }
    });
    
    // Handle Yes button click
    yesButton.addEventListener('click', function() {
        alert('ok sifit hna 0706849237 ');
    });
    
    // Initial position for the No button
    setTimeout(moveNoButton, 500);
});
