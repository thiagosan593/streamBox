
function login() {

    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#Senha").value;

    if (email == "admin" && senha == "admin") {
        location.href = "paineladmin.html";
    }else if(email == "user" && senha == "user"){
        location.href = "series.html";
    } else {
        alert("usuário ou senha inválida")

    }
}


