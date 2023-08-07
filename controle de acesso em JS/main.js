function verificarAcesso() {
    const numeroCartao = parseInt(document.getElementById('cartao').value);
    const mensagemElement = document.getElementById('mensagem');
  
    if (numeroCartao >= 1000 && numeroCartao <= 1999) {
      mensagemElement.innerText = 'Acesso permitido.';
      mensagemElement.style.color="green";
      
   
    } else if (numeroCartao >= 2000 && numeroCartao <= 2999) {
      mensagemElement.innerText = 'Acesso limitado.';
      mensagemElement.style.color="yellow";
   
    } else if (numeroCartao > 3000) {
      mensagemElement.innerText = 'Acesso negado.';
      mensagemElement.style.color="red";
      
    } else {
      mensagemElement.innerText = 'Número de cartão não identificado';
      mensagemElement.style.color="gray";
      
    }
  }

 