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

        // Show sweet message modal after video ends
        video.addEventListener('ended', showSweetMessageModal);
    } else {
        // Show the error modal
        showErrorModal();
    }
}

function showErrorModal() {
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    const modalContent = document.querySelector('.modal-content');
    
    modalContent.classList.add('bounceIn');
    errorModal.show();
    
    // Remove animation class after animation ends
    modalContent.addEventListener('animationend', () => {
        modalContent.classList.remove('bounceIn');
    }, { once: true });
}

function showSweetMessageModal() {
    const sweetMessageModal = new bootstrap.Modal(document.getElementById('sweetMessageModal'));
    sweetMessageModal.show();
}

// Function to generate random hearts with random colors
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Random color
    heart.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 10 + 5}s`;
    heartContainer.appendChild(heart);
}

// Create multiple hearts
for (let i = 0; i < 30; i++) {
    createHeart();
}
