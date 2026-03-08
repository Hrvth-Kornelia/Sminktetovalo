
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".fade-Up, .fade-left").forEach((el) => {
    observer.observe(el);
});