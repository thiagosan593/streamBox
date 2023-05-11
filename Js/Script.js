
/*Menu hamburger */
function width() {
    if (window.innerWidth >= 800) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}
function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

/**Opções card*/
function atualizar() {
    location.href = "atualizar.html";
}

function sobreedit() {
    location.href = "sobre-edit.html";
}

function sobre() {
    location.href = "sobre.html";
}

/*Menu de opções da serie */

var expanded = false;

function showCheckBoX() {
    var checkbox = document.getElementById("checkboxes")
    var select = document.querySelector(".selectBox select")
    if (!expanded) {
        checkbox.style.display = "block"
        expanded = true
        select.style.borderBottomLeftRadius = "0";
        select.style.borderBottomRightRadius = "0";
    } else {
        checkbox.style.display = "none"
        expanded = false
        select.style.borderBottomLeftRadius = ".5rem";
        select.style.borderBottomRightRadius = ".5rem";
    }
}

/**Voltar pagina 404 */

function voltar() {

    location.href = "series.html";

}


/*Validação de Login*/
const usuariosCadastrados = [
    { nome: 'João', email: 'joao@hotmail.com', senha: 'senha123', tipo: 'normal' },
    { nome: 'Maria', email: 'maria@streambox.com', senha: 'senha123', tipo: 'admin' },
    { nome: 'Pedro', email: 'pedro@gmail.com', senha: 'senha123', tipo: 'normal' }
];

const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('Msg');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarioEncontrado = usuariosCadastrados.find(function (usuario) {
        return usuario.email === email;
    });

    if (usuarioEncontrado) {
        if (usuarioEncontrado.senha === senha) {
            if (usuarioEncontrado.tipo === 'admin') {
                location.href = "paineladmin.html";
            } else {
                location.href = "series.html";
            }
        } else {
            Mensagem('Senha inválida.');
        }
    } else {
        Mensagem('Email não encontrado.');
    }
});

function Mensagem(mensagem) {
    Msg.textContent = mensagem;

    setTimeout(function () {
        Msg.textContent = '';
    }, 8000);
}


/* */

// const input = document.querySelector('#image');

// input.addEventListener('change', function (e) {
//     e.preventDefault
//     const tgt = e.target || window.event.srcElement;

//     const files = tgt.files;

//     const fr = new FileReader();

//     fr.onload = function () {
//         document.querySelector('#preview-image').src = fr.result;
//     }

//     fr.readAsDataURL(files[0]);
// }