// document.addEventListener("DOMContentLoaded", async function () {
//   const botao = document.getElementById("botao");

async function consultarCEP() {
  event.preventDefault();
  const cep = document.getElementById("cepInput").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  if (!dados.erro) {
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("logradouro").value = dados.logradouro;
    // document.getElementById("estado").value = dados.uf;
  } else {
    alert("CEP não encontrado.");
  }
}