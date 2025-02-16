document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').textContent.toLowerCase();
            window.location.href = `${category}.html`;
        });
    });
});
