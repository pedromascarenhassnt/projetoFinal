function cadastroNaPagina(event){
        
        event.preventDefault()

        const nomeUsuario = document.getElementById('usuario').value
        const sobrenomeUsuario = document.getElementById('sobrenome').value
        const emailUsuario = document.getElementById('email').value
        const senhaUsuario = document.getElementById('senha').value
           
        
        localStorage.setItem('emailUsuario', emailUsuario);
        localStorage.setItem('senhaUsuario', senhaUsuario);

        document.location.href = "login.html"  

        
}

function logarNaPagina(event) {
 
    event.preventDefault()

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    const emailCadastrado = localStorage.getItem('emailUsuario')
    const senhaCadastrada = localStorage.getItem('senhaUsuario')
    if (email === emailCadastrado && senha === senhaCadastrada) {
        document.location.href = "cadastro.html"
    } else {
        alert('Email ou senha incorretos!')
    }
}

 function registrarConta(event) {
     document.location.href = "cadastro.html"
 }

