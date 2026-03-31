// 1. Sayfa Yükleme Efekti (Preloader)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('loader-hidden');
    }, 800); // 0.8 saniye bekleyip yumuşakça kapanır
});

// 2. Scroll Reveal ve Sayıcı Efekti
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll(".reveal");
    const counters = document.querySelectorAll('.counter');
    const triggerBottom = window.innerHeight / 5 * 4;

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < triggerBottom) {
            reveal.classList.add("active");
        }
    });

    const aboutSection = document.querySelector('.about-section');
    if (aboutSection && aboutSection.classList.contains('active')) {
        counters.forEach(counter => {
            if (counter.innerText === "0" || counter.innerText === "") {
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
