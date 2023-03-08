//manipulando o forms
 async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro){//caso seja um cep com os dígitos necessários, mas inexistente, manda-se um erro = true
            throw Error('CEP não existente!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
       
        const cepInput = document.querySelector("#cep")
        cepInput.value = consultaCEPConvertida.cep
        
        cidade.value = consultaCEPConvertida.localidade; //nome do que retorna na api com o valor de cidade
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;


        console.log(consultaCEPConvertida);
        return consultaCEPConvertida
    }
    catch(erro){//erro 400 por ex
        console.log(erro)
    }
 
}

//consulta dinâmica
var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

//preenchimento automático
