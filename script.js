function checkAnswer() {
    const answer = document.getElementById('answer').value.trim();
    const result = document.getElementById('result');
    const rickrollGif = document.getElementById('rickrollGif');
    const rickrollAudio = document.getElementById('rickrollAudio');

    result.classList.remove('wrong');
    void result.offsetWidth;  // Trigger reflow
    result.classList.add('wrong');
    
    if (answer) {
        result.textContent = "Non, ce n'est pas la bonne réponse. Essayez encore !";
        result.className = 'wrong';
        rickrollGif.style.display = 'block';
        rickrollAudio.play();
    } else {
        result.textContent = "";
        rickrollGif.style.display = 'none';
        rickrollAudio.pause();
        rickrollAudio.currentTime = 0; // Reset the audio to the beginning
    }
}

function revealMessage() {
    const hiddenNumber = document.getElementById('hiddenNumber');
    hiddenNumber.textContent = "Vous avez trouvé le bon chiffre : 1";
    hiddenNumber.className = 'revealed';
}
