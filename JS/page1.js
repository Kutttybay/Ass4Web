// Объект, представляющий информацию о человеке
var personData = {
    firstName: "Иван",
    lastName: "Иванов",
    phoneNumber: "1234567890",
    city: "Almaty"
  };
  
  // Функция для заполнения формы данными из объекта
  function fillFormWithData(data) {
    document.getElementById("firstName").value = data.firstName;
    document.getElementById("lastName").value = data.lastName;
    document.getElementById("phoneNumber").value = data.phoneNumber;
    document.getElementById("city").value = data.city;
  }
  
  // Функция для воспроизведения звука
  function playSound() {
    var audio = new Audio("звук.mp3"); // Укажите путь к вашему аудиофайлу
    audio.play();
  }
  
  // Обработчик нажатия на кнопку "Заполнить форму и воспроизвести звук"
  document.getElementById("fillFormAndPlaySound").addEventListener("click", function() {
    fillFormWithData(personData);
    playSound();
  });

  // Наведение на кнопку - изменение цвета фона
document.getElementById("fillFormAndPlaySound").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red"; // Измените цвет на желаемый
  });
  
  // Убрать курсор с кнопки - возврат к исходному цвету
  document.getElementById("fillFormAndPlaySound").addEventListener("mouseout", function() {
    this.style.backgroundColor = ""; // Сброс цвета
  });
  
  // Анимация появления формы
  function fadeIn(element, duration) {
    element.style.display = "block";
    element.style.opacity = 0;
    var startTime = null;
  
    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      var progress = (currentTime - startTime) / duration;
      if (progress > 1) progress = 1;
  
      element.style.opacity = progress;
  
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
  
    requestAnimationFrame(animate);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var formContainer = document.querySelector(".form-container");
    fadeIn(formContainer, 1000); // 1000 миллисекунд (1 секунда) для анимации
  });


  document.addEventListener("DOMContentLoaded", function() {
    const reviewText = document.getElementById("reviewText");
    const submitButton = document.getElementById("submitButton");
  
    submitButton.addEventListener("click", function() {
      // Добавьте здесь код для обработки отправки отзыва
      alert("Отзыв отправлен: " + reviewText.value);
    });
  
    submitButton.addEventListener("mouseover", function() {
      // Функция для наведения курсора на кнопку
      this.style.backgroundColor = "blue"; // Измените цвет на желаемый
    });
  
    submitButton.addEventListener("mouseout", function() {
      // Функция для убирания курсора с кнопки
      this.style.backgroundColor = ""; // Сброс цвета
    });
  });

  