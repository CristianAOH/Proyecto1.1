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
	var divTodo = document.createElement("div");
	var divImagen = document.createElement("div");
	var divPublicaciones = document.createElement("div");
	var crearUsuario = document.createElement("span");
	var crearDescripcion = document.createElement("span");
	var crearImagen = document.createElement("img");
	var crearFecha = document.createElement("span");
	var crearBoton = document.createElement("button");
	var crearSeparador = document.createElement("hr");
	var crearComentarios = document.createElement("div");
	divImagen.className = "columna1";
	divPublicaciones.className = "columna2";
	crearUsuario.textContent = user;
	crearDescripcion.textContent = desc;
	crearFecha.textContent = fecha.getDate() + "/" + arrayMeses[fecha.getMonth()] + "/" + fecha.getFullYear();
	crearImagen.src = imag;
	crearImagen.width = 150;
	crearImagen.heigth = 150;
	crearBoton.textContent = "Comentarios (" + nuevaPublicacion + ")";
	crearBoton.addEventListener("click", hideDiv, false); 
	crearComentarios.id = "com"+nuevaPublicacion;
	divImagen.appendChild(crearImagen);
	divPublicaciones.appendChild(crearUsuario);
	divPublicaciones.appendChild(crearDescripcion);
	divPublicaciones.appendChild(crearFecha);
	divPublicaciones.appendChild(crearBoton);
	//divPublicaciones.appendChild(crearComentarios);
	divPublicaciones.appendChild(crearSeparador);
	divTodo.appendChild(divImagen);
	divTodo.appendChild(divPublicaciones);
	document.body.appendChild(divTodo);
}

function hideDiv(){
	console.log("Se escondio");
	document.getElementById("com0").style.display = "none";
}

