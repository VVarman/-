document.addEventListener("DOMContentLoaded", function() {
    // Ініціалізація EmailJS
    emailjs.init("f4W-UjKYjDZumVwCJ"); // Замініть YOUR_USER_ID на ваш EmailJS User ID

    const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("closePopup");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        emailSend();
        popup.style.display = "flex"; // Показати вспливаюче вікно
        form.reset(); // Скинути форму після відправки
    });

    closePopupButton.addEventListener("click", function() {
        popup.style.display = "none"; // Сховати вспливаюче вікно при кліку на кнопку "Закрити"
    });

    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

function emailSend() {
    const userName = document.getElementById('name').value;
    const userSirname = document.getElementById('sirname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const templateParams = {
        name: userName,
        sirname: userSirname,
        phone: phone,
        email: email
    };

    emailjs.send("service_s33ilaa", "template_kjqo3de", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}

