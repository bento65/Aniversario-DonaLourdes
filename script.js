document.getElementById('celebrateButton').addEventListener('click', function() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    const balloonsContainer = document.getElementById('balloonsContainer');

    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloonsContainer.appendChild(balloon);

        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
    }
});