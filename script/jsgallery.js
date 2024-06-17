let overlay = document.getElementById('overlay');
let overlayImage = document.getElementById('overlay-image');
let galleryImages = document.querySelectorAll('.gallery-image');
let currentImageIndex;

// Відкриття оверлею при кліці на зображення в галереї
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        openOverlay(index);
    });
});

// Функція для відкриття оверлею з конкретним зображенням
function openOverlay(index) {
    currentImageIndex = index;
    overlay.style.display = 'flex';
    overlayImage.src = galleryImages[index].src;
    overlayImage.style.maxWidth = '80%'; 
    overlayImage.style.maxHeight = '80%'; 
}

// Закриття оверлею при кліці на підложку (пусте місце)
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeOverlay();
    }
});

// Закриття оверлею при кліці на кнопку "Закрити"
document.querySelector('.close').addEventListener('click', () => {
    closeOverlay();
});

// Функція для закриття оверлею
function closeOverlay() {
    overlay.style.display = 'none';
    overlayImage.src = '';
}

// Функції для перемикання зображень у оверлеї
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    overlayImage.src = galleryImages[currentImageIndex].src;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    overlayImage.src = galleryImages[currentImageIndex].src;
}

// Обробка клавішних подій для перемикання зображень у оверлеї
document.addEventListener('keydown', function(e) {
    if (overlay.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'Escape') {
            closeOverlay();
        }
    }
});


