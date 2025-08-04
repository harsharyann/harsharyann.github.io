/* --- Global Setup & Variables --- */
:root {
    --bg-color: #0a0a0a;
    --text-color: #e0e0e0;
    --accent-color: #ffffff;
    --border-color: #333333;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: var(--font-body);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* --- Main Layout Container --- */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* --- Header --- */
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-color);
}

.logo {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--accent-color);
}

.main-nav a {
    color: var(--text-color);
    text-decoration: none;
    margin-left: 2rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.main-nav a:hover {
    color: var(--accent-color);
}

/* --- Hero Section --- */
.hero {
    padding: 8rem 0;
    text-align: center;
}

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(3rem, 10vw, 6rem);
    color: var(--accent-color);
    line-height: 1.1;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-top: 1rem;
    color: #a0a0a0;
}

.hero-tagline {
    max-width: 500px;
    margin: 1rem auto 0;
    font-size: 1.1rem;
}

.hero-links {
    margin-top: 2.5rem;
}

.hero-links a {
    color: var(--text-color);
    text-decoration: none;
    margin: 0 1rem;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--border-color);
    transition: color 0.3s, border-color 0.3s;
}

.hero-links a:hover {
    color: var(--accent-color);
    border-color: var(--accent-color);
}

/* --- General Content Sections --- */
.content-section {
    padding: 6rem 0;
    border-bottom: 1px solid var(--border-color);
}

.section-heading {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--accent-color);
}

/* --- About Section --- */
.about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text p {
    margin-bottom: 1.5rem;
    max-width: 60ch;
}

.about-text strong {
    color: var(--accent-color);
    font-weight: 500;
}

.about-image-container {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
}

.about-image {
    width: 100%;
    height: auto;
    filter: grayscale(100%);
    transition: filter 0.4s ease;
}

.about-image:hover {
    filter: grayscale(0%);
}

/* --- Skills Section --- */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.skill-item {
    border: 1px solid var(--border-color);
    padding: 2rem;
    transition: background-color 0.3s ease;
}

.skill-item:hover {
    background-color: #1a1a1a;
}

.skill-title {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--accent-color);
}

.skill-desc {
    font-size: 1rem;
    color: #a0a0a0;
    margin-top: 0.5rem;
}

/* --- Footer --- */
.main-footer {
    padding: 4rem 0;
    text-align: center;
}

.main-footer p {
    font-size: 1.5rem;
    font-family: var(--font-heading);
}

.contact-button {
    display: inline-block;
    color: var(--accent-color);
    font-size: 1.2rem;
    text-decoration: none;
    margin: 1rem 0 3rem;
    border-bottom: 2px solid var(--accent-color);
    padding-bottom: 5px;
    transition: transform 0.3s ease;
}

.contact-button:hover {
    transform: scale(1.05);
}

.footer-bottom {
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #a0a0a0;
}

/* --- Animations --- */
.animate-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Delay animations for a staggered effect */
.hero-title { animation-delay: 0.2s; }
.hero-subtitle { animation-delay: 0.4s; }
.hero-tagline { animation-delay: 0.6s; }
.hero-links { animation-delay: 0.8s; }
.content-section .animate-in { animation-delay: 0.2s; }

/* --- Responsive Design --- */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    .main-header {
        flex-direction: column;
        gap: 1rem;
    }

    .hero {
        padding: 4rem 0;
    }

    .section-heading {
        font-size: 2rem;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .about-image-container {
        order: -1; /* Move image to the top on mobile */
    }

    .footer-bottom {
        flex-direction: column;
        gap: 0.5rem;
    }
}
