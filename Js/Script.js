
toast = document.querySelector(".toast");
closeIcon = document.querySelector(".close");
progress = document.querySelector(".progress");

let timer1, timer2;

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

let expandedS = false;

function showCheckBoX() {
    let checkbox = document.getElementById("checkboxesS")
    let select = document.querySelector(".selectBoxS select")
    if (!expandedS) {
        checkbox.style.display = "block"
        expandedS = true
        select.style.borderBottomLeftRadius = "0";
        select.style.borderBottomRightRadius = "0";
    } else {
        checkbox.style.display = "none"
        expandedS = false
        select.style.borderBottomLeftRadius = ".5rem";
        select.style.borderBottomRightRadius = ".5rem";
    }
}
let expanded = false;
function showCheckBoX2() {
    let checkbox = document.getElementById("checkboxes")
    let select = document.querySelector(".selectBox select")
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
                toast.style.display = 'block';
                Msg.classList.remove("error")
                Msg.classList.add("sucesso")
                Mensagem('Login com sucesso.');
                location.href = "paineladmin.html";
            } else {
                toast.style.display = 'block';
                Msg.classList.remove("error")
                Msg.classList.add("sucesso")
                Mensagem('Login com sucesso.');
                location.href = "series.html";
            }
        } else {
            toast.style.display = 'block';
            Msg.classList.add("error")
            Mensagem('Senha inválida.');
        }
    } else {
        toast.style.display = 'block';
        Msg.classList.add("error")
        Mensagem('Email não cadastrado.');

    }
});

function confirmarExclusao() {
    let confirmacao = confirm("Tem certeza que deseja excluir este item?");


    if (confirmacao) {
        toast.style.display = 'block';
        Msg.classList.remove("error")
        Msg.classList.add("sucesso")
        Mensagem("Item excluído com sucesso!");
    } else {
        toast.style.display = 'block';
        Msg.classList.add("error")
       Mensagem("Exclusão cancelada.");
    }
}

function Mensagem(mensagem) {
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
        toast.style.display = 'none';
    }, 5000);

    timer2 = setTimeout(() => {
        toast.style.display = 'none';
        progress.classList.remove("active");
    }, 5300);
    Msg.textContent = mensagem;
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


