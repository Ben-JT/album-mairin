//agregado para audio

document.addEventListener('click', () => {
    const audio = document.getElementById('myAudio');
    if (audio.muted) {
      audio.muted = false; // Desactiva el silencio
    audio.play();
    }
});
