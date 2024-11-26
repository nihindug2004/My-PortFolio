document.addEventListener('DOMContentLoaded', () => {
    // Typed Text Effect
    const typedTextElement = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    const phrases = ['Web Developer', 'Designer', 'Creative Thinker'];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function type() {
        if (phraseIndex === phrases.length) phraseIndex = 0;
        
        const currentText = phrases[phraseIndex];
        
        if (!isDeleting && letterIndex <= currentText.length) {
            currentPhrase.push(currentText[letterIndex]);
            typedTextElement.textContent = currentPhrase.join('');
            letterIndex++;
            cursor.classList.add('typing');
        }
        
        if (isDeleting && letterIndex >= 0) {
            currentPhrase.pop();
            typedTextElement.textContent = currentPhrase.join('');
            letterIndex--;
            cursor.classList.remove('typing');
        }
        
        if (letterIndex === currentText.length) {
            cursor.classList.remove('typing');
            isDeleting = true;
            setTimeout(() => {
                isDeleting = false;
                phraseIndex++;
            }, 2000);
        }
        
        setTimeout(type, isDeleting ? 50 : 150);
    }

    type();

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinksContainer = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Form Submission (Note: Requires backend integration)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (Note: Actual submission requires backend setup)');
        contactForm.reset();
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});