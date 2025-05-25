// Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Carousel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const images = carousel.querySelectorAll('img');
        let currentImage = 0;

        // Show first image
        if (images.length > 0) {
            images[0].classList.add('active');
        }

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        function nextImage() {
            currentImage = (currentImage + 1) % images.length;
            showImage(currentImage);
        }

        function prevImage() {
            currentImage = (currentImage - 1 + images.length) % images.length;
            showImage(currentImage);
        }

        // Auto-advance carousel
        setInterval(nextImage, 5000);

        // Add click handlers for carousel controls
        const prevButton = carousel.querySelector('button:first-child');
        const nextButton = carousel.querySelector('button:last-child');

        if (prevButton) prevButton.addEventListener('click', prevImage);
        if (nextButton) nextButton.addEventListener('click', nextImage);
    }

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert(getTranslation('form-validation-required'));
                return;
            }
            
            if (!isValidEmail(email)) {
                alert(getTranslation('form-validation-email'));
                return;
            }

            // Show form data in alert
            const currentLang = document.documentElement.lang;
            const langText = currentLang === 'pt' ? 'Português' : 'English';
            
            alert(`${getTranslation('form-submitted')}\n\n${getTranslation('name-label')}: ${name}\n${getTranslation('email-label')}: ${email}\n${getTranslation('message-label')}: ${message}\n\n${getTranslation('language')}: ${langText}`);
            
            // Clear form
            contactForm.reset();
        });
    }

    // Animations
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
});

// Language Switcher
function getCurrentLanguage() {
    const languageSelect = document.getElementById('language-select');
    return languageSelect ? languageSelect.value : 'pt';
}

const languageSelect = document.getElementById('language-select');
if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        const language = this.value;
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    });
}

// Social Share Functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const text = encodeURIComponent(translations[getCurrentLanguage()]['share-text']);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareOnWhatsApp() {
    const text = encodeURIComponent(translations[getCurrentLanguage()]['share-text']);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
} 