document.addEventListener('DOMContentLoaded', function() {
    const weightFormContainer = document.getElementById('weight-form-container');
    const questionContainer = document.getElementById('question-container');
    const weightInput = document.getElementById('weight-input');
    const submitButton = document.getElementById('submit-weight');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    
    let elusiveButton; // This will store which button should be elusive
    let fixedButton;   // This will store which button should be fixed
    let userWeight;    // Store the user's weight to use in the alert
    
    // Function to move the elusive button to a random position
    function moveElusiveButton() {
        // Get container dimensions
        const containerRect = questionContainer.getBoundingClientRect();
        
        // Calculate max positions (button shouldn't go outside container)
        const maxX = containerRect.width - elusiveButton.offsetWidth - 80; // Adding padding
        const maxY = containerRect.height - elusiveButton.offsetHeight - 80;
        
        // Generate random position within container boundaries
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        // Set the new position
        elusiveButton.style.position = 'absolute';
        elusiveButton.style.left = `${randomX}px`;
        elusiveButton.style.top = `${randomY}px`;
    }
    
    // Handle weight submission
    submitButton.addEventListener('click', function() {
        const weight = parseFloat(weightInput.value);
        
        if (isNaN(weight) || weight <= 0) {
            alert('Please enter a valid weight');
            return;
        }
        
        // Store user weight for later use
        userWeight = weight;
        
        // Set which button should be elusive based on weight
        if (weight > 80) {
            elusiveButton = yesButton;
            fixedButton = noButton;
        } else {
            elusiveButton = noButton;
            fixedButton = yesButton;
        }
        
        // Show the question container and hide the weight form
        weightFormContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        
        // Set up event listeners for the elusive button
        elusiveButton.addEventListener('mouseover', moveElusiveButton);
        
        // Move the button when mouse gets within 100px of it
        document.addEventListener('mousemove', function(e) {
            const buttonRect = elusiveButton.getBoundingClientRect();
            const buttonX = buttonRect.left + buttonRect.width / 2;
            const buttonY = buttonRect.top + buttonRect.height / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - buttonX, 2) + 
                Math.pow(mouseY - buttonY, 2)
            );
            
            if (distance < 100) {
                moveElusiveButton();
            }
        });
        
        // Handle fixed button click - show different messages based on weight
        fixedButton.addEventListener('click', function() {
            if (userWeight > 80) {
                alert('ok siri t9wdi');
            } else {
                alert('ok sifti hna 0706849237');
            }
        });
        
        // Initial position for the elusive button
        setTimeout(moveElusiveButton, 500);
    });
    
    // Allow Enter key to submit the weight form
    weightInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });
});