
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