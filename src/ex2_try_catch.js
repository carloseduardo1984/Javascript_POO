const produto = { id : 1, nome : 'Grampo', preco : 34.7 }  //EXEMPLO DE TRATATIVA DE EXCESSÃO - ERRO
 
 const produtoNovo = new Object(produto) 
 
 
 try {
    
    console.log("LINHA 15 -> " + produtoNovo.preco) // 34.7
    onsole.log("GLINHA 16 -> " + produtoNovo.peco) // 34.7
    
  }
  catch(e) {
    console.log("FALHA DETECTADA ") // 
  }

