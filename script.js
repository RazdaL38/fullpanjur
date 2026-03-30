const nav = document.getElementById('navbar');
const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
    // 1. Scroll olunca Navbar koyulaşsın ve küçülsün
    if (window.scrollY > 50) {
        nav.style.padding = '12px 8%';
        nav.style.background = '#111111'; // Tam siyah olur
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        nav.style.padding = '25px 8%';
        nav.style.background = 'rgba(17, 17, 17, 0.8)'; // Üstteyken şeffaf
        nav.style.boxShadow = 'none';
    }

    // 2. Reveal Animasyonları
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });

    // 3. Sayaçlar
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection && window.scrollY > aboutSection.offsetTop - 600 && !started) {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + (target / 100));
                    setTimeout(updateCount, 20);
                } else { counter.innerText = target; }
            };
            updateCount();
        });
        started = true;
    }
});
