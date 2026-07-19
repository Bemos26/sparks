/**
 * Main Javascript File
 * Handles frontend interactivity such as mobile menu toggle and dynamic dates
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Set current year in the footer dynamically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle functionality
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide the menu
            navLinks.classList.toggle('active');
            
            // Optional: Animate the hamburger icon to a cross
            mobileToggle.classList.toggle('open');
            // Add custom css class styles in styles.css to handle .open state if desired
        });
    }

    // 3. Close mobile menu when a link is clicked (unless it's the dropdown toggle)
    const links = document.querySelectorAll('.nav-links a:not(.dropbtn)');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('open');
            }
        });
    });

    // 4. Simple Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Mobile Dropdown Toggle
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropBtn && dropdownContent) {
        dropBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
});
