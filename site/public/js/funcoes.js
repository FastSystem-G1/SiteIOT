// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cargo = sessionStorage.CARGO;

if (email != null && nome != null && cargo == 1)  {
    
       /*  document.getElementsByClassName('nome_usuario')[0].innerHTML = sessionStorage.NOME_USUARIO; */

        // finalizarAguardar();
    }else if(email != null && nome != null & cargo == 0){
        document.getElementById('nav-list').innerHTML =
       ` <ul class="nav-list">
            <li><a href="../Dashboard/dashInicial.html">Início</a></li>
            <li onclick="sair()"><a href="../login.html">Sair</a></li>
            <li></li>
        </ul> `
    } else {
        window.location = "login.html";
    }
}

function validarSessao1() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

   

if (email != null && nome != null)  {
    
       /*  document.getElementsByClassName('nome_usuario')[0].innerHTML = sessionStorage.NOME_USUARIO; */

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function validarSessao2() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

   

if (email != null && nome != null)  {
    
       /*  document.getElementsByClassName('nome_usuario')[0].innerHTML = sessionStorage.NOME_USUARIO; */

        // finalizarAguardar();
    } else {
        window.location = "../../../login.html";
    }
}

function limparFormulario() {
    document.getElementById("campos_cadastro").reset();
}

/* // carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}
function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";
    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}
 */

// modal
/* function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}
function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
} */
