function notify(message) {
    let divNotificationEl = document.getElementById('notification');
    divNotificationEl.textContent = message;
    divNotificationEl.style.display = 'block';
    divNotificationEl.addEventListener('click', (e) => e.target.style.display = 'none');
}