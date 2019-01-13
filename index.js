var prompt = require('prompt');

prompt.start();



const bancodeDados = {
    admin: "Michel",
   usuario: { name: "Michel", username: "micheldiz", senha: "123" }
};

console.log(bancodeDados)

var property = {
   // configuraçoes padroes do questionario de cadastro 
   name: 'yesno',
   message: 'Deseja fazer um cadastro?',
   validator: /y[es]*|n[o]?/,
   warning: 'Must respond yes or no'
 };


const startq = () => { 
 // função de Cadastro
  let usuario = () => prompt.get(['User'], function (err, result) {
     // pede um novo nome para cadastro
   bancodeDados.usuario.user = result.User
   bancodeDados.usuario.username = result.User
   senha()
 });
  let senha = () => prompt.get(['Senha'], function (err, result) {
     // pede uma nova senha para cadastro
   bancodeDados.usuario.senha = result.Senha
   console.log(bancodeDados)
 });

 usuario() // chama a função usuário para iniciar o processo de cadastro

   }

   const iniciarlogin = () => {
      // função de Login
      let usuario = () => prompt.get(['User'], function (err, result) {
         // pede o nome de usuario e verifica no db se existe
         if (bancodeDados.usuario.username == result.User){
            passosenha()
         } else {
            console.log('usuário não existe')
         }
      });
      const passosenha = () => prompt.get(['Senha'], function (err, result) {
         // pede a senha e verifica se está correta
         if (bancodeDados.usuario.senha == result.Senha){
            console.log('Senha correta')
         } else {
            console.log('Senha incorreta')
         }
        
      });
   
      
      usuario()
      }

      // questiona se o usuário quer fazer cadastro
   prompt.get(property, function (err, result) {
      console.log(result,"result login")
      if (result.yesno == 'yes') {
         startq()
      } else  {
         iniciarlogin()
      }
    });
