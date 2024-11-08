document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const butterflies = document.querySelectorAll(".butterfly");

    butterflies.forEach(butterfly => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        butterfly.style.left = `${randomX}px`;
        butterfly.style.top = `${randomY}px`;
    });
});
