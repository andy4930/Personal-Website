document.addEventListener("DOMContentLoaded", () => {
    const text = "IT Analyst. Passionate about technology and cybersecurity.";
    let index = 0;
    let isDeleting = false;

    function typeText() {
        let typedTextElement = document.getElementById("typed-text");

        if (!isDeleting) {
            typedTextElement.innerHTML = text.substring(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeText, 1000);
                return;
            }
        } else {
            typedTextElement.innerHTML = text.substring(0, index);
            index--;
            if (index === 0) {
                isDeleting = false;
            }
        }
        setTimeout(typeText, isDeleting ? 50 : 50);
    }

    typeText();

    // Function for smooth scrolling to different sections
    window.scrollToSection = function (sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});
