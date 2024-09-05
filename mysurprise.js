function checkAnswer() {
    const answer = document.getElementById('anniversaryInput').value;
    const correctAnswer = "2019-09-06"; // Update this with your actual anniversary date in YYYY-MM-DD format
    const formContainer = document.getElementById('form-container');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('surpriseVideo');

    if (answer === correctAnswer) {
        // Apply the fade-out effect to the form container
        formContainer.classList.add('fade-out');
        
        setTimeout(() => {
            // Hide the form and show the video container
            formContainer.classList.add('d-none');
            videoContainer.classList.remove('d-none');
            videoContainer.classList.add('active');
            video.play();
        }, 1000); // Delay matches with CSS transition duration
    } else {
        // Show the error modal
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
    }
}

// Function to generate random hearts
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random color
    heart.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = `${Math.random() * 100}vh`; // Start at random height
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.animationDuration = `${(Math.random() * 10) + 10}s`;

    heartContainer.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 15000); // Matches with animation duration
}

// Create a heart every 500ms
setInterval(createHeart, 500);
