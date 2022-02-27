let index = 0;
let currentText = "";
let content = ["<Coders\u00A0Club/>", "Inscreva-se!"];
let deleting = false;
let wait = true;
let contentIndex = 0;
let timeLeft = document.getElementById("time-left");

let futureDate = new Date("2022 03 11 23:59").getTime();

function type() {
  let textElement = document.querySelector("#central-h1");

  setTimeout(() => {
    if (deleting) {
      if (wait) {
        setTimeout(() => {
          wait = false;
        }, 3000);
      } else {
        if (index > -1) {
          textElement.textContent = textElement.textContent.substring(
            0,
            textElement.textContent.length - 1
          );
          index--;
        } else {
          contentIndex = contentIndex ? 0 : 1;
          charDelete = 1;
          wait = true;
          deleting = false;
        }
      }
      type();
    } else {
      if (index < content[contentIndex].length) {
        textElement.innerHTML += content[contentIndex].charAt(index++);
      } else {
        deleting = true;
      }
      type();
    }
  }, 250);
}

// Tava travando, então comentei o código, mas tá aí se quiser :)

// function time() {
//   let dias, horas, minutos, segundos;
//   setInterval(() => {
//     let now = new Date().getTime();

//     segundos = parseInt((futureDate - now) / 1000);

//     dias = parseInt(segundos / 86400);
//     segundos = segundos % 86400;

//     horas = parseInt(segundos / 3600);
//     segundos = segundos % 3600;

//     minutos = parseInt(segundos / 60);
//     segundos = segundos % 60;

//     timeLeft.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
//   }, 1000);
// }

document.addEventListener("DOMContentLoaded", type);
