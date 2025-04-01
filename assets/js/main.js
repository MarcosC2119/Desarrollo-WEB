// Form de registro
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('.registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Basic password validation
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            // If validation passes, show success message and redirect
            alert('¡Registro exitoso!');
            registrationForm.reset();
            window.location.href = 'index.html';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (if needed in the future)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        const menuButton = document.createElement('button');
        menuButton.classList.add('mobile-menu-btn');
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        
        if (!document.querySelector('.mobile-menu-btn')) {
            navbar.insertBefore(menuButton, navLinks);
        }
        
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
};

// Call mobile menu function on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu); 