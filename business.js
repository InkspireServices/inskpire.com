// Get the current page URL
const currentPage = window.location.pathname.split('/').pop();

// Select all navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Loop through the links and add/remove the active class
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
document.querySelectorAll('.logo-text .letter').forEach((el, index) => {
    el.style.setProperty('--i', index);
});
document.addEventListener("DOMContentLoaded", () => {
    const aboutTexts = document.querySelectorAll('.about h3, .about .heading');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    aboutTexts.forEach(text => observer.observe(text));
});
document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.querySelector('.about-text-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textContainer.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(textContainer);
});
document.addEventListener("DOMContentLoaded", () => {
    const serviceHeader = document.querySelector('.services h2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviceHeader.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    observer.observe(serviceHeader);
});
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle 'active' class to enlarge the item
        this.classList.toggle('active');
    });
});