window.addEventListener("load", function () {
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";

    content = document.getElementById("content");
    const preloaderText = document.getElementById("preloader-text");
    preloaderText.style.display = "none";

    content.style.display = "flex";
  }, 3000);
});

let buttonOn = false;
let botaoElemento = document.getElementById("meuBotao");
let buttons = document.getElementsByTagName("button");

function iniciarContagemRegressiva() {
  let firstOption = document.getElementById("first-option");
  let secondOption = document.getElementById("second-option");
  let thirdOption = document.getElementById("third-option");

  let intervalo = setInterval(function () {
    if (
      firstOption.classList.contains("selected") ||
      secondOption.classList.contains("selected") ||
      thirdOption.classList.contains("selected")
    ) {
      buttonOn = true;
      botaoElemento.classList.remove("disabled");
    }
  }, 1000);
}

function selectOption(optionId) {
  let optionElement = document.getElementById(optionId);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  optionElement.classList.add("selected");

  if (buttonOn) {
    botaoElemento.classList.remove("disabled");
  }
}
