document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Нормалізуємо шляхи для коректної перевірки
        const normalizedLinkPath = linkPath.replace(/^\//, '').replace(/\/$/, '');
        const normalizedCurrentPath = currentPath.replace(/^\//, '').replace(/\/$/, '');

        // Перевірка чи URL посилання відповідає поточному шляху
        if (normalizedCurrentPath.includes(normalizedLinkPath)) {
            link.classList.add('active');
        }
    });
});
