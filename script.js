document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    // Select all elements you want to animate
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach(el => observer.observe(el));

});

// We need to add a small bit of CSS for the script to work.
// Add this to your style.css file or create a new style tag in your html head.
const style = document.createElement('style');
style.innerHTML = `
    .animate-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .animate-in.in-view {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
