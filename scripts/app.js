//carne = 400g por pessoa (+6hrs = 650g)
//cerveja = 1200ml por pessoa (+6hrs = 2000g)
//refri/agua = 1000ml por pessoa (+6hrs = 1500ml)
//crianças valem por 0,5

//DOM SELEC

const inputAdultos = document.querySelector("#adultos");
const inputCriancas = document.querySelector("#criancas");
const inputDuracao = document.querySelector("#duracao");
const resultado = document.querySelector("#resultado");

const botao = document.querySelector("#calc-button");

//EVENTS

botao.addEventListener("click", calcular);

//FUNCTIONS

function calcular() {
  let divisor = 1000;

  let totalCarne =
    carnePP(inputDuracao.value) * inputAdultos.value +
    (carnePP(inputDuracao.value) / 2) * inputCriancas.value;

  let totalCerveja = cervejaPP(inputDuracao.value) * inputAdultos.value;

  let totalBebidas =
    bebidasPP(inputDuracao.value) * inputAdultos.value +
    (bebidasPP(inputDuracao.value) / 2) * inputCriancas.value;

  totalCarne = totalCarne / divisor;
  totalCerveja = totalCerveja / divisor;
  totalBebidas = totalBebidas / divisor;

  resultado.innerHTML = `<p style="font-family = -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif">${totalCarne}Kg de carne</p>`;
  resultado.innerHTML += `<p>${totalCerveja}l de cerveja</p>`;
  resultado.innerHTML += `<p>${totalBebidas}l de bebidas</p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
