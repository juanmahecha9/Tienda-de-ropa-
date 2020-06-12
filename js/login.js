
function login() {

    var u = document.getElementById("user").value;
    console.log(`Usuario: ${u}`);
    var p = document.getElementById("pass").value;
    console.log(`Contraseña: ${p}`);

    if (u == "") {
        alert("Usuario Vacio")
    }
    if (p == "") {
        alert("Password Invalido")
    }

    if (u == "JuanDavid123" && p == "123456") {
        alert("Loging Success")
        var node = document.createElement("LI");
        var textnode = document.createTextNode("Datos guardados y recordados");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    }
    else {
        alert("Datos no concuerdan")
    }



}