const counters = document.querySelectorAll('.counter');
const speed = 150;
let started = false;

window.addEventListener('scroll', () => {
    // 1. Reveal (Kaydırınca Belirme)
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            el.classList.add("active");
        }
    });

    // 2. Sayaç Başlatma
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection && window.scrollY > aboutSection.offsetTop - 600 && !started) {
        startCounters();
        started = true;
    }
});

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Sayfa ilk yüklendiğinde görünümleri kontrol et
window.onload = () => {
    window.dispatchEvent(new Event('scroll'));
};
