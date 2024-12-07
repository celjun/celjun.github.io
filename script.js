// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault(); 
            window.scrollTo({
                top: targetElement.offsetTop - 100, 
                behavior: 'smooth'
            });
        }
    });
});

// Set Active Class for Current Page in Navigation
const setActiveNav = () => {
    const navLinks = document.querySelectorAll('.nav-list a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Call setActiveNav on page load to highlight current page
window.addEventListener('load', setActiveNav);

// Back to Top Button Functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Back to Top';
backToTopButton.classList.add('back-to-top-btn');
document.body.appendChild(backToTopButton);

// Style the back-to-top button
const styleBackToTopButton = () => {
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '30px';
    backToTopButton.style.right = '30px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#3498db';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.fontSize = '1rem';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.transition = 'background-color 0.3s ease';

    // Hover effect for back-to-top button
    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.style.backgroundColor = '#2980b9';
    });
    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.backgroundColor = '#3498db';
    });
};

// Show/Hide Back to Top Button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when back-to-top button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize back-to-top button style
styleBackToTopButton();
