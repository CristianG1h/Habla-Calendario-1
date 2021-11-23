function Iniciarsec() {

var usuario = document.getElementById('usuario').value;
var contraseña = document.getElementById('contraseña').value;

if (usuario == "habla.calendario@gmail.com" && contraseña == "12345") {
    alert("Hola Habla Calendario, Gracias Por Entrar A Nuestra Pagina.") ;
window.location.href="inicio.html"
  } else{
    swal ( "¡ ERROR ! " , "¡ Usuario o contraseña incorrectos.! " , )
    if (usuario == "" || contraseña == "") {
      swal ( "¡ ERROR ! " , "¡ Falta algun un campo de Usuario o Contraseña.! " , )
    }
  }

}
function Registro(){
  var usuario = document.getElementById('us').value;
  var contraseña = document.getElementById('co').value;
  var gm = document.getElementById('gm').value;

  if (usuario == "" || contraseña == "" || gm == "") {
  swal("¡ ERROR ! " , "¡ Falta algun un campo de Usuario o Correo o Contraseña.! ");
  }else {
  window.location.href ="IniciarSec.html"
  }
}
