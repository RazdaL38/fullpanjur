const counters = document.querySelectorAll('.counter');
const reveals = document.querySelectorAll(".reveal");
const aboutSection = document.querySelector('.about-section');
let started = false;

window.addEventListener('scroll', () => {
    // 1. Reveal Efekti
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });

    // 2. Sayaçlar
    if (aboutSection && window.scrollY > aboutSection.offsetTop - 600 && !started) {
        started = true; // Sadece bir kere çalışmasını garantiliyoruz
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 100; // Sayma hızı ayarı
            
            const updateCount = () => {
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else { 
                    counter.innerText = target; 
                }
            };
            updateCount();
        });
    }
});
