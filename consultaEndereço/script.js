/*
document.getElementById('cepForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var endereco = document.getElementById('endereco').value;

    // Chamada AJAX para consultar o CEP pelo endereço
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://viacep.com.br/ws/' + endereco + '/json/');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            if (!data.erro) {
                document.getElementById('resultado').innerHTML = '<strong>CEP:</strong> ' + data.cep + '<br>' +
                                                                   '<strong>Logradouro:</strong> ' + data.logradouro + '<br>' +
                                                                   '<strong>Bairro:</strong> ' + data.bairro + '<br>' +
                                                                   '<strong>Cidade:</strong> ' + data.localidade + '<br>' +
                                                                   '<strong>Estado:</strong> ' + data.uf;
            } else {
                document.getElementById('resultado').innerHTML = 'Endereço não encontrado.';
            }
        } else {
            console.error('Erro ao consultar o CEP. Status do servidor: ' + xhr.status);
        }
    };
    xhr.onerror = function() {
        console.error('Erro de conexão.');
    };
    xhr.send();
});
*/

async function consultarCeps() {


    event.preventDefault(); // Evita o envio padrão do formulário

    var endereco = document.getElementById('endereco').value;
    // var uf = document.getElementById('inputEstado').value.toUpperCase();
    // var cidade = document.getElementById('inputCidade').value;
    // var logradouro = document.getElementById('inputLogradouro').value;

    var url = `https://viacep.com.br/ws/${endereco}/json/`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (dados.length === 0) {
            document.getElementById('resultado').innerHTML = 'Nenhum CEP encontrado para essa referência.';
        } else {
            var resultadoHTML = '';
            dados.forEach(function(cep) {
                // resultadoHTML += `<p><strong>Logradouro:</strong> ${cep.logradouro}</p>`;
                // resultadoHTML += `<p><strong>Bairro:</strong> ${cep.bairro}</p>`;
                // resultadoHTML += `<p><strong>Complemento:</strong> ${cep.complemento}</p>`;
                // resultadoHTML += `<p><strong>Cidade:</strong> ${cep.localidade}</p>`;
                // resultadoHTML += `<p><strong>Estado:</strong> ${cep.uf}</p>`;
                // resultadoHTML += `<p><strong>DDD:</strong> ${cep.ddd}</p>`;
                // resultadoHTML += '<hr>';

                resultadoHTML = '<strong>CEP:</strong> ' + cep.cep + '<br>' +
                                                                   '<strong>Logradouro:</strong> ' + cep.logradouro + '<br>' +
                                                                   '<strong>Bairro:</strong> ' + cep.bairro + '<br>' +
                                                                   '<strong>Cidade:</strong> ' + cep.localidade + '<br>' +
                                                                   '<strong>Estado:</strong> ' + cep.uf + '<hr>';
            });
            document.getElementById('resultado').innerHTML = resultadoHTML;
        }
    } catch (error) {
        console.error('Erro ao consultar os CEPs:', error);
        document.getElementById('resultado').innerHTML = 'Erro ao consultar os CEPs. Por favor, tente novamente mais tarde.';
    }
}

