const bancodeDados = {
    admin: "Michel",
   usuario: { name: "Michel", username: "micheldiz", senha: "12345678" }
};
// console.log(bancodeDados)  
console.log(bancodeDados)

let login = prompt("Deseja fazer um cadastro?")
console.log(login) 

if (login === true) { 
 //Cadastro
  let usuario = prompt("Seu nome de usuário")  
  let senha = prompt("Sua senha")
  
 if (usuario == ' ') {
alert("Nome do usuário incompleto")
} else {
 bancodeDados.usuario.user = usuario
 bancodeDados.usuario.username = usuario
 bancodeDados.usuario.senha = senha
}
   } 

else {
 //Login 

let resposta = prompt("Seu nome de usuário") 

const checarSenha = () => {
 let senhaUser = prompt("Digite Sua senha")
  if (senhaUser == bancodeDados.usuario.senha) {
alert("Senha está correta")
} else {
 alert("Senha Incorreta")
}
}

if (resposta == bancodeDados.usuario.username) {
alert("Nome do usuário correto")
 console.log(bancodeDados)
 checarSenha()
} else {
 alert("Usuário não existe")
}

   }



