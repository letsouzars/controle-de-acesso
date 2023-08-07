function verificarAcesso() {
    const numeroCartao = parseInt(document.getElementById('cartao').value);
    const mensagemElement = document.getElementById('mensagem');
  
    if (numeroCartao >= 1000 && numeroCartao <= 1999) {
      mensagemElement.innerText = 'Acesso permitido a todas as áreas restritas.';
   
    } else if (numeroCartao >= 2000 && numeroCartao <= 2999) {
      mensagemElement.innerText = 'Acesso limitado a algumas áreas restritas.';
   
    } else if (numeroCartao > 3000) {
      mensagemElement.innerText = 'Acesso negado. Funcionário não tem permissão para acessar áreas restritas.';
      
    } else {
      mensagemElement.innerText = 'Número de cartão não identificado';
      
    }
  }