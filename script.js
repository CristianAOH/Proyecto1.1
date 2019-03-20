var nuevaPublicacion = 0;
var arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var fecha = new Date;

function guardar(){
	console.log("Sha se guardo :3");
	var usuario = document.getElementsByTagName("input")[0].value;
	var descripcion = document.getElementsByTagName("input")[1].value;
	var imagen = document.getElementsByTagName("input")[2].value;
	crearPublicacion(usuario, descripcion, imagen);
	limpiarCampos();
}

function limpiarCampos(){
	document.getElementsByTagName("input")[0].value = "";
	document.getElementsByTagName("input")[1].value = "";
	document.getElementsByTagName("input")[2].value = "";
}

function crearPublicacion(user, desc, imag){
	//var divPublicaciones = document.getElementsByTagName("div")[1];
	var divPublicaciones = document.createElement("div");
	var crearUsuario = document.createElement("span");
	var crearDescripcion = document.createElement("span");
	var crearImagen = document.createElement("img");
	var crearFecha = document.createElement("span");
	var crearBoton = document.createElement("button");
	var crearSeparador = document.createElement("hr");
	var crearComentarios = document.createElement("div");
	crearUsuario.textContent = user;
	crearDescripcion.textContent = desc;
	crearFecha.textContent = fecha.getDate() + "/" + arrayMeses[fecha.getMonth()] + "/" + fecha.getFullYear();
	crearImagen.src = imag;
	crearImagen.width = 150;
	crearImagen.heigth = 150;
	crearBoton.textContent = "Comentarios (" + nuevaPublicacion + ")";
	crearBoton.onclick = "hideDiv(0);";
	crearComentarios.id = "com"+nuevaPublicacion;
	divPublicaciones.appendChild(crearImagen);
	divPublicaciones.appendChild(crearUsuario);
	divPublicaciones.appendChild(crearDescripcion);
	divPublicaciones.appendChild(crearFecha);
	divPublicaciones.appendChild(crearBoton);
	divPublicaciones.appendChild(crearComentarios);
	divPublicaciones.appendChild(crearSeparador);
	document.body.appendChild(divPublicaciones);
}

function hideDiv(){
	console.log("Se escondio");
	document.getElementById("com0").style.display = "none";
}

