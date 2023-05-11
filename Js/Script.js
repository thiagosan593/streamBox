/*Login */
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

/*Menu hamburger */
function width(){
    if(window.innerWidth >=800){
        itens.style.display ='block'
    }else{
        itens.style.display='none'
    }
}
function clickMenu(){
  if(  itens.style.display =='block'){
    itens.style.display ='none'
  }else{
    itens.style.display ='block'
  }
}

/**Opções card*/
function atualizar(){
    location.href = "atualizar.html";
}

function sobreedit(){
    location.href = "sobre-edit.html";
}

function sobre(){
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


