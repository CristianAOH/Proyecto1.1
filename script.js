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
	//Sección de la Publicación
	var divTodo = document.createElement("div");
	var divImagen = document.createElement("div");
	var divPublicaciones = document.createElement("div");
	var divComentarios = document.createElement("div");
	var crearLista = document.createElement("ul");
	var crearUsuario = document.createElement("li");
	var crearDescripcion = document.createElement("li");
	var crearImagen = document.createElement("img");
	var crearFecha = document.createElement("li");
	var crearBoton = document.createElement("button");
	var crearSeparador = document.createElement("hr");
	divImagen.className = "columna1";
	divPublicaciones.className = "columna2";
	divComentarios.id = "div_comentarios";
	crearUsuario.textContent = user;
	crearDescripcion.textContent = desc;
	crearFecha.textContent = fecha.getDate() + "/" + arrayMeses[fecha.getMonth()] + "/" + fecha.getFullYear();
	crearImagen.src = imag;
	crearImagen.width = 150;
	crearImagen.heigth = 150;
	crearBoton.textContent = "Comentarios (" + nuevaPublicacion + ")";
	crearBoton.addEventListener("click", hideDiv, false); 
	divImagen.appendChild(crearImagen);
	crearLista.appendChild(crearUsuario);
	crearLista.appendChild(crearDescripcion);
	crearLista.appendChild(crearFecha);
	crearLista.appendChild(crearBoton);
	divPublicaciones.appendChild(crearLista);
	divTodo.appendChild(divImagen);
	divTodo.appendChild(divPublicaciones);
	divTodo.appendChild(divComentarios);
	divTodo.appendChild(crearSeparador);
	
	//Sección de Comentarios
	var divInfoComentarios = document.createElement("div");
	var tituloComentario = document.createElement("h3");
	var entradaComentario = document.createElement("input");
	var botonAgregarComentario = document.createElement("button");
	var seccionComentarios = document.createElement("div");
	tituloComentario.textContent = "Comentario: ";
	botonAgregarComentario.textContent = "Aceptar";
	botonAgregarComentario.addEventListener("click", crearComentario, false);
	divInfoComentarios.appendChild(entradaComentario);
	divInfoComentarios.appendChild(botonAgregarComentario);
	divComentarios.appendChild(tituloComentario);
	divComentarios.appendChild(divInfoComentarios);
	divComentarios.appendChild(seccionComentarios);

	document.body.appendChild(divTodo);
}

function hideDiv(){
	console.log("Se escondio");
	//document.getElementById("com0").style.display = "none";
}

function crearComentario(){
	console.log("Se realizo el comentario");
}

