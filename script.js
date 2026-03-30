const nav = document.getElementById('navbar');
const counters = document.querySelectorAll('.counter');
let started = false;

window.addEventListener('scroll', () => {
    // 1. Reveal Efekti
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });

    // 2. Sayaçlar
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection && window.scrollY > aboutSection.offsetTop - 600 && !started) {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + (target / 150));
                    setTimeout(updateCount, 15);
                } else { counter.innerText = target; }
            };
            updateCount();
        });
        started = true;
    }
});
