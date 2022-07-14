let jogadorEscolha = 0;
let jogadorPontos = 0;
let pcPontos = 0;
let pcEscolha = 0;
let ganhador = -1;

const msg = document.querySelector("#msg");

function jogar(escolha) {
  jogadorEscolha = escolha;

  pcEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if (jogadorEscolha == 1 && pcEscolha == 1) {
    ganhador = 0;
  } else if (jogadorEscolha == 1 && pcEscolha == 2) {
    ganhador = 2;
  } else if (jogadorEscolha == 1 && pcEscolha == 3) {
    ganhador = 1;
  }
  if (jogadorEscolha == 2 && pcEscolha == 1) {
    ganhador = 1;
  } else if (jogadorEscolha == 2 && pcEscolha == 2) {
    ganhador = 0;
  } else if (jogadorEscolha == 2 && pcEscolha == 3) {
    ganhador = 2;
  }
  if (jogadorEscolha == 3 && pcEscolha == 1) {
    ganhador = 2;
  } else if (jogadorEscolha == 3 && pcEscolha == 2) {
    ganhador = 1;
  } else if (jogadorEscolha == 3 && pcEscolha == 3) {
    ganhador = 0;
  }
  console.log(ganhador);

  // remove a classe da jogada destacada no momento que o jogador joga novamente
  document.querySelector("#jogador-escolha-1").classList.remove("selecionado");
  document.querySelector("#jogador-escolha-2").classList.remove("selecionado");
  document.querySelector("#jogador-escolha-3").classList.remove("selecionado");
  document.querySelector("#pc-escolha-1").classList.remove("selecionado");
  document.querySelector("#pc-escolha-2").classList.remove("selecionado");
  document.querySelector("#pc-escolha-3").classList.remove("selecionado");
  msg.innerHTML = "Escolha sua jogada!";
  // remove a classe da jogada destacada depois de 2 segundos e zera a msg
  setTimeout(() => {
    document
      .querySelector("#jogador-escolha-1")
      .classList.remove("selecionado");
    document
      .querySelector("#jogador-escolha-2")
      .classList.remove("selecionado");
    document
      .querySelector("#jogador-escolha-3")
      .classList.remove("selecionado");
    document.querySelector("#pc-escolha-1").classList.remove("selecionado");
    document.querySelector("#pc-escolha-2").classList.remove("selecionado");
    document.querySelector("#pc-escolha-3").classList.remove("selecionado");
    msg.innerHTML = "Escolha sua jogada!";
  }, 2000);

  // adiciona a classe que deixa destacada a jogada
  document
    .querySelector("#jogador-escolha-" + jogadorEscolha)
    .classList.add("selecionado");
  document
    .querySelector("#pc-escolha-" + pcEscolha)
    .classList.add("selecionado");

  if (ganhador == 0) {
    msg.innerHTML = "Empatou :-/";
  } else if (ganhador == 1) {
    msg.innerHTML = "Jogador ganhou :-)";
    jogadorPontos++;
  } else if (ganhador == 2) {
    msg.innerHTML = "PC ganhou :-(";
    pcPontos++;
  }
  document.querySelector("#jogador-pontos").innerHTML = jogadorPontos;
  document.querySelector("#pc-pontos").innerHTML = pcPontos;
}
