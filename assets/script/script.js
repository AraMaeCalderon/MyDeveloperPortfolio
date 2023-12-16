document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const textsToType = ["Developer", "Information Technology Student", "Photographer","Musician"];
    const typingSpeed = 150; // Adjust speed (milliseconds per character)
    const delayBetweenTexts = 1000; // Adjust delay between texts (milliseconds)
  
    function typeText(index) {
      if (index < textsToType.length) {
        const currentText = textsToType[index];
  
        for (let i = 0; i < currentText.length; i++) {
          setTimeout(function () {
            textElement.textContent += currentText[i];
          }, i * typingSpeed);
        }
  
        setTimeout(function () {
          // Clear the text and move to the next one
          textElement.textContent = "";
          typeText(index + 1);
        }, currentText.length * typingSpeed + delayBetweenTexts);
      }
    }
  
    typeText(0);
  });

  