document.addEventListener("DOMContentLoaded", async function(){

    const listaCnae = document.getElementById("cnae-list");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes'); 

    const dados = await resposta.json();

    dados.forEach( function(cnae) {
        const li = document.createElement('li');

        li.textContent =`${cnae.descricao} ${cnae.observacoes}`;
        
        


        listaCnae.appendChild(li);
        
    });
}

)