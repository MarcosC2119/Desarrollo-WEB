export const initHeader = () => {
    const createMobileMenu = () => {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= CONFIG.MOBILE_BREAKPOINT) {
            if (!document.querySelector('.mobile-menu-btn')) {
                const menuButton = createMenuButton(navLinks);
                navbar.insertBefore(menuButton, navLinks);
            }
        } else {
            cleanupMobileMenu(navLinks);
        }
    };
    
    // Inicialización
    document.addEventListener('DOMContentLoaded', createMobileMenu);
    window.addEventListener('resize', createMobileMenu);
};

const createMenuButton = (navLinks) => {
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-btn');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
    
    return menuButton;
};

const cleanupMobileMenu = (navLinks) => {
    const existingButton = document.querySelector('.mobile-menu-btn');
    if (existingButton) {
        existingButton.remove();
    }
    navLinks?.classList.remove('show');
}; 