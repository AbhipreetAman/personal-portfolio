document.addEventListener("DOMContentLoaded", () => {
    // Add visible class to body for fade-in effect
    setTimeout(() => {
        document.body.classList.add("visible");
    }, 100);

    // Subtle hover effect on job entries to highlight them
    const jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
        job.addEventListener('mouseenter', () => {
            job.style.transform = 'translateX(5px)';
            job.style.transition = 'transform 0.3s ease';
        });
        job.addEventListener('mouseleave', () => {
            job.style.transform = 'translateX(0)';
        });
    });
});
