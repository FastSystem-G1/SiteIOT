// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cargo = sessionStorage.CARGO;

if (email != null && nome != null && cargo == true)  {
      // window.location = "./Dashboard/dashInicial";

       document.getElementById('texto_func').innerHTML =
       `
        Olá, ${nome} ! </br>
        Empresa: ${sessionStorage.EMPRESA}
       `;

    }else if(email != null && nome != null && cargo == false){

        document.getElementById('texto_func').innerHTML =
        `
         Olá, ${nome} ! </br>
         Empresa: ${sessionStorage.EMPRESA}
        `;

        document.getElementById('nav-content').innerHTML = 
        `<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; justify-content: space-around; align-items: center;
        letter-spacing: 3px;
        margin: 60px 0;">

        <a href= "dashInicial.html" style = "margin-bottom: 60px; font-size: 25px;">Início</a>
        <a href="../login.html" style = "margin-bottom: 60px; font-size: 25px;">Sair</a>


        </div>
        `;
    } else {
       // window.location = "../login.html";
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
