document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            images.forEach(innerImg => {
                innerImg.classList.remove('active'); // Remove 'active' class from all images
            });
            img.classList.add('active'); // Add 'active' class to clicked image
        });
    });
});
