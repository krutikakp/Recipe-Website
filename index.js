console.log('wroks!');
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');
            if (target) {
                navigateTo(target);
            }
        });
    });
});

function navigateTo(page) {
    window.location.href = recipe + ".html";
}
