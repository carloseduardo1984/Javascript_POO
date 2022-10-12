//const leiaEntrada = require("readline");

//const lendo = leiaEntrada.createInterface({   input: process.stdin,   output: process.stdout, });

//lendo.question("Qual seu nome? ", function (answer) {   console.log(`Oh, seu nome é ${answer}`);   });

var objeto= { foo: "bar", age: 42} 

 
 const objeto_aqui = Object.freeze(objeto) 
 
 console.log("O que está em foo é = " + objeto_aqui.foo + "\n") // 
 console.log("A idade do objeto é = " + objeto_aqui.age + "\n") // uma vez criado basta extrair o conteudo 

 Object.keys(objeto_aqui).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, objeto_aqui[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });
