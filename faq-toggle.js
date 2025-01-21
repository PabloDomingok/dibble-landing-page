const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const faqText = item.querySelector('.faq-item-text');
    const answer = item.querySelector('.faq-answer');

    faqText.addEventListener('click', () => {
        const icon = faqText.querySelector('i');
        answer.classList.toggle('visible');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-left');
    });
});

