document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("conteudo");

  const resposta = await fetch(
    "https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR"
  );

  const dados = await resposta.json();

  dados.forEach(function (inflacao) {
    const divBlocoInflacao = document.createElement("div"); //Criando a div
    divBlocoInflacao.classList.add("bloco-inflacao"); //Atribuindo o nome de uma classe

    const ulSubtitulo = document.createElement("ul");
    ulSubtitulo.id = "subtitulo";
    // subtitulo.setAttribute("id","subtitulo"); // Faz a mesma coisa do subtitulo.id = "subtitulo"

    const liSubtitulo = document.createElement("li");
    liSubtitulo.textContent = `${inflacao.medida} - (${inflacao.unidade})`;

    ulSubtitulo.appendChild(liSubtitulo);

    divBlocoInflacao.appendChild(ulSubtitulo);

    const olResultados = document.createElement("ol");
    const serieData = inflacao.olResultados[0].series[0].serie;

    for (const anoMes in serieData) {

      const liSerie = document.createElement("li");

      liSerie.textContent = `${anoMes} - ${serieData[anoMes]}`;

        olResultados.appendChild(liSerie);  
    }
    ulSubtitulo.appendChild(olResultados);

    conteudo.appendChild(divBlocoInflacao);
  });
});