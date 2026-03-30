const nav = document.getElementById('navbar');
const counters = document.querySelectorAll('.counter');
const speed = 150; // Sayaç hızı (düşük sayı daha hızlı)
let started = false;

// Sayfa Kaydırma Dinleyicisi
window.addEventListener('scroll', () => {
    // 1. Navbar Efekti
    if (window.scrollY > 80) {
        nav.style.padding = '12px 8%';
        nav.style.background = 'rgba(17, 17, 17, 0.98)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = '#111111';
        nav.style.boxShadow = 'none';
    }

    // 2. Reveal (Kaydırınca Belirme) Fonksiyonu
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }

    // 3. Sayaç Başlatma (Hakkımızda göründüğünde)
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection && window.scrollY > aboutSection.offsetTop - 600 && !started) {
        startCounters();
        started = true;
    }
});

// Sayaç Fonksiyonu
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

// Sayfa ilk yüklendiğinde reveal kontrolü
window.onload = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("active");
        }
    });
};