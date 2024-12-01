document.addEventListener('keydown', function (event) {
    const key = document.querySelector(`.key[data-key="${event.key}"]`);
    if (key) {
        key.classList.add('active');
    }
});

document.addEventListener('keyup', function (event) {
    const key = document.querySelector(`.key[data-key="${event.key}"]`);
    if (key) {
        key.classList.remove('active');
    }
});
