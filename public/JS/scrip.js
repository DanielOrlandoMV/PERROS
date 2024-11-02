// Obtener el segundo modal
var modal2 = document.getElementById("contactModal");

// Obtener el botón que abre el segundo modal (si es diferente)
var btn2 = document.getElementById("openContactModal");

// Obtener el <span> que cierra el segundo modal
var span2 = document.getElementsByClassName("closee")[0];

// Cuando el usuario haga clic en el botón del segundo modal, abrir el segundo modal
btn2.onclick = function() {
    modal2.style.display = "block";
  }

// Cuando el usuario haga clic en <span> (x) del segundo modal, cerrar el segundo modal
span2.onclick = function() {
    modal2.style.display = "none";
  }

  