document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.getElementsByClassName('introButton');
    const audio = document.getElementById("background-music");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            document.getElementById('slideshowOverlay').style.display = 'block';
            document.querySelector('.slideshow-container').style.display = 'block';
            slideIndex = 0; // Reset de slideIndex naar 0
            audio.play();
            showSlides();
        });
    }
});

let slideIndex = 0;
let slideTimeouts = [3000, 1000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000,
                    3000, 6000]; // Array om de timeouts bij te houden

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        document.getElementById('slideshowOverlay').style.display = 'none'; // Verberg de overlay na het laatste dia
        document.querySelector('.slideshow-container').style.display = 'none'; // Verberg de slideshow-container na het laatste dia
        slideIndex = 0; // Reset de slideIndex naar 0
    }
    slides[slideIndex - 1].style.display = "block";
    const slideTimeout = slideTimeouts[slideIndex - 1]; 
    setTimeout(showSlides, slideTimeout);
}

// Functie om de timeout te annuleren als dat nodig is
function stopSlideshow() {
    clearTimeout(slideshowTimeouts);
}

