//manipulando o forms
 async function buscaEndereco(cep){;

    //1 var mensagemErro = document.getElementById('erro');
    //1 mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){//caso seja um cep com os dígitos necessários, mas inexistente, manda-se um erro = true
            throw Error('CEP não existente!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro')
       
        const cepInput = document.querySelector("#cep")
        cepInput.value = consultaCEPConvertida.cep
        
        cidade.value = consultaCEPConvertida.localidade; //nome do que retorna na api com o valor de cidade
        endereco.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida
    }
    catch(erro){//erro 400 por ex
        //1 mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!<p>`
        console.log(erro)
    }
 
}

//consulta dinâmica
var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => limpaInput());
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


function limpaInput(){
    cidade.value = ""; 
    endereco.value = "";
    estado.value = "";
    bairro.value = "";
}
