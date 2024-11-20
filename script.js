// Add interactivity or animations if needed in the future.
// Placeholder for now.
console.log("Welcome to Banyar's portfolio!");
// Slideshow Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) slide.classList.add('active');
    });

    slideIndex = (slideIndex + 1) % slides.length; // Loop through slides
}

// Change slide every 3 seconds
setInterval(showSlides, 3000);
// Modal Functionality
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery-img');

// Open modal when an image is clicked
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
        document.body.classList.add('modal-active'); // Add blur effect
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-active'); // Remove blur effect
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target !== modalImage) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-active'); // Remove blur effect
    }
});
