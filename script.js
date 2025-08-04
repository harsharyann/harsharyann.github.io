document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Set initial theme from localStorage or system preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    themeSwitcher.classList.add(currentTheme === 'dark' ? 'fa-sun' : 'fa-moon');
    themeSwitcher.classList.remove(currentTheme === 'dark' ? 'fa-moon' : 'fa-sun');


    themeSwitcher.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Toggle icon
        themeSwitcher.classList.toggle('fa-sun');
        themeSwitcher.classList.toggle('fa-moon');
    });

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

});