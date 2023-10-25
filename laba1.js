// Додайте слухача подій, щоб показувати / приховувати кнопку
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Додайте слухача подій для прокрутки до верху при натисканні кнопки
document.getElementById('scrollToTopButton').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
