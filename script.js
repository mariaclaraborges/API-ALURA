//Aprendendo async
 
 
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

//um CEP:
 buscaEndereco(12346899)

//mais de um CEP:
//let ceps = ['01001000', '01001001'];
//let conjuntosCeps = ceps.map(valores => buscaEndereco(valores));
//.map vai fazer um array de conjunto de CEP's. como parâmetro, buscaEndereco() receberá os CEPs presentes no array de ceps
//Promise.all(conjuntosCeps).then(respostas => console.log(respostas))
//promise all vai resolver o array de promessas, e vamos pedir para imprimir com o then (imprime o que foi resolvido)
