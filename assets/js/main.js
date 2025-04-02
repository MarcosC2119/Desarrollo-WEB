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

// Mobile menu toggle
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Solo crear el botón si no existe y estamos en móvil
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
        const menuButton = document.createElement('button');
        menuButton.classList.add('mobile-menu-btn');
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Insertar el botón antes de los enlaces de navegación
        navbar.insertBefore(menuButton, navLinks);
        
        // Agregar el event listener al botón
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    } else if (window.innerWidth > 768) {
        // Remover el botón si existe y estamos en desktop
        const existingButton = document.querySelector('.mobile-menu-btn');
        if (existingButton) {
            existingButton.remove();
        }
        // Asegurarse de que los enlaces sean visibles en desktop
        if (navLinks) {
            navLinks.classList.remove('show');
        }
    }
};

// Llamada del menú móvil
document.addEventListener('DOMContentLoaded', createMobileMenu);
window.addEventListener('resize', createMobileMenu); 