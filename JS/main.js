document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var playButton = document.querySelector(".play-music");
  
    playButton.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "Остановить музыку";
      } else {
        audio.pause();
        audio.currentTime = 0;
        playButton.textContent = "Воспроизвести музыку";
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.animation = "fadeIn 0.5s ease-in-out forwards";
      }, index * 200); // Задержка между анимацией каждой карточки
    });
  });