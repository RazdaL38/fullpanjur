window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll(".reveal");
    const counters = document.querySelectorAll('.counter');
    const triggerBottom = window.innerHeight / 5 * 4;

    // 1. Reveal Efekti
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < triggerBottom) {
            reveal.classList.add("active");
        }
    });

    // 2. Sayı Sayma Efekti
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection.classList.contains('active')) {
        counters.forEach(counter => {
            if (counter.innerText === "0") { // Eğer daha önce saymadıysa
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const speed = target / 100;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + speed);
                        setTimeout(updateCount, 25);
                    } else { counter.innerText = target; }
                };
                updateCount();
            }
        });
    }
});

// Sayfa yüklendiğinde Hero kısmını direkt göster
window.onload = () => {
    document.querySelector('.hero-overlay').classList.add('active');
};
