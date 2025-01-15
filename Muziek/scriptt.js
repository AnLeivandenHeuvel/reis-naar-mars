// Functies voor de knoppen
document.getElementById('replay').addEventListener('click', () => {
    alert('Replay-knop geklikt!');
});

document.getElementById('pause').addEventListener('click', () => {
    const pauseButton = document.getElementById('pause');
    if (pauseButton.innerText === 'Pause') {
        pauseButton.innerText = 'Play';
        alert('Pauze-knop geklikt!');
    } else {
        pauseButton.innerText = 'Pause';
        alert('Play-knop geklikt!');
    }
});

document.getElementById('skip').addEventListener('click', () => {
    alert('Skip-knop geklikt!');
});
