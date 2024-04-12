let audio = new Audio("sounds/tom-1.mp3");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});