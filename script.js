document.getElementById("click-button").addEventListener("click", function () {
  window.location.href = "second.html";
});

const button = document.getElementById('click-button');
const sound = new Audio('button-click.mp3');

button.addEventListener('click', () => {
  sound.play();
});

