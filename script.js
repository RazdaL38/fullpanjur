// Sayfa yüklendiği anda animasyonları başlatır (scroll beklemez)
document.addEventListener("DOMContentLoaded", () => {
    // 1. Reveal Efekti (Sayfa açıldığında direkt gelsin)
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        // Hafif bir gecikme ile daha şık gelir
        setTimeout(() => {
            el.classList.add("active");
        }, 150);
    });

    // 2. Sayaçlar (Sadece Hakkımızda sayfasında çalışır)
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 100; // Hız ayarı
            
            const updateCount = () => {
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else { 
                    counter.innerText = target; 
                }
            };
            // Animasyonla beraber başlaması için kısa bir gecikme
            setTimeout(updateCount, 500);
        });
    }
});
