 
 async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro){//caso seja um cep com os dígitos necessários, mas inexistente, manda-se um erro = true
            throw Error('CEP não existente!')
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida
    }
    catch(erro){//erro 400 por ex
        console.log(erro)
    }
 
 }