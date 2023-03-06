// fetch: fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
//O uso do fetch() acarreta em um argumento — a pasta do recurso que você deseja buscar — e retorna uma promessa (promise) contendo a resposta (response object).

var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/') 
  //método then: lida com os dados recebidos pela requisição. 
  //o dado recebido foi o objeto do tipo Response que traz um corpo de resposta que não da para acessar
    .then(resposta => resposta.json())//1º uso: transformar a resposta em JSON
    .then(r => {
        if(r.erro){ //se true
          throw Error('Esse CEP não existe.')
        } else{
         console.log(r)
        }
        })
    .catch(erro => console.log(erro))//catch: quando a promessa for rejeitada; "pega o throw e imprime o erro na tela"
    .finally(mensagem => console.log('Processamento concluído.'))//aparece independente se a promessa foi resolvida ou não.
    

    
//uma requisição é composta de uma request(solicitação) e uma response(resposta)/
