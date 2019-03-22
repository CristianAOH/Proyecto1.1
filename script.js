var nuevaPublicacion = 0;
var arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var fecha = new Date;
var numPublicacion = 0;

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
	var id = numPublicacion;
	//Sección de la Publicación
	var divTodo = document.createElement("div");
	var divImagen = document.createElement("div");
	var divPublicaciones = document.createElement("div");
	var divBoton = document.createElement("div");
	var divComentarios = document.createElement("div");
	var crearLista = document.createElement("ul");
	var crearUsuario = document.createElement("li");
	var crearDescripcion = document.createElement("li");
	var crearImagen = document.createElement("img");
	var crearFecha = document.createElement("li");
	var crearBoton = document.createElement("button");
	var crearSeparador = document.createElement("hr");

	divTodo.id = "div_todo"+numPublicacion;
	divImagen.className = "columna1";
	divPublicaciones.className = "columna2";
	divBoton.className = "columna3";
	divComentarios.className = "renglon2";

	divComentarios.id = "div_comentarios" + numPublicacion;
	divComentarios.style.display = "none";
	crearUsuario.textContent = "Usuario: " + user;
	crearDescripcion.textContent = "Descripción: " + desc;
	crearFecha.textContent = "Fecha: " + fecha.getDate() + "/" + arrayMeses[fecha.getMonth()] + "/" + fecha.getFullYear();
	crearImagen.src = imag;
	crearImagen.width = 150;
	crearImagen.heigth = 150;
	crearBoton.id = "botonContadorComentario" + numPublicacion;
	crearBoton.className = "botonContador";
	crearBoton.textContent = "Comentarios";
	crearBoton.addEventListener("click", function(){hideDiv(id)}, false); 

	divImagen.appendChild(crearImagen);
	crearLista.appendChild(crearUsuario);
	crearLista.appendChild(crearDescripcion);
	crearLista.appendChild(crearFecha);
	divPublicaciones.appendChild(crearLista);
	divBoton.appendChild(crearBoton);
	divTodo.appendChild(divImagen);
	divTodo.appendChild(divPublicaciones);
	divTodo.appendChild(divBoton);
	divTodo.appendChild(divComentarios);
	divTodo.appendChild(crearSeparador);
	
	//Sección de Comentarios
	var divInfoComentarios = document.createElement("div");
	var tituloComentario = document.createElement("h3");
	var entradaComentario = document.createElement("input");
	var botonAgregarComentario = document.createElement("button");
	var seccionComentarios = document.createElement("div");

	entradaComentario.className = "entradaComment";
	botonAgregarComentario.className = "botonAgregarComentario";
	seccionComentarios.className = "seccionComentarios";

	seccionComentarios.id = "colocarComments"+numPublicacion;
	tituloComentario.textContent = "Comentario: ";
	entradaComentario.id = "input"+numPublicacion;
	botonAgregarComentario.id = "botonAceptar"+numPublicacion;
	botonAgregarComentario.textContent = "Aceptar";
	//Mandando parametro mediante funcion anonima
	botonAgregarComentario.addEventListener("click", function(){crearComentario(id)}, false);

	divInfoComentarios.appendChild(entradaComentario);
	divInfoComentarios.appendChild(botonAgregarComentario);
	divComentarios.appendChild(tituloComentario);
	divComentarios.appendChild(divInfoComentarios);
	divComentarios.appendChild(seccionComentarios);

	document.body.appendChild(divTodo);
	numPublicacion++;
}

function hideDiv(aEsconder){
	console.log(aEsconder);
	if (document.getElementById("div_comentarios"+aEsconder).style.display == "none") {
		document.getElementById("div_comentarios"+aEsconder).style.display = "block";
	}else {
		document.getElementById("div_comentarios"+aEsconder).style.display = "none";
	}
}

function crearComentario(idBoton){
	console.log(idBoton);
	//Obteniendo el comentario
	var obtenerComentario = document.getElementById("input"+idBoton).value;

	//Elementos para el comentario
	var divComentarios = document.getElementById("colocarComments"+idBoton);
	var parrafoComentario = document.createElement("p");
	var spanFecha = document.createElement("span");
	parrafoComentario.className = "parrafoComentario";

	//Rellenando los elementos
	parrafoComentario.textContent = obtenerComentario;
	spanFecha.textContent = fecha.getDate() + "/" + arrayMeses[fecha.getMonth()] + "/" + fecha.getFullYear();

	//Agregando elementos al div
	divComentarios.appendChild(parrafoComentario);
	divComentarios.appendChild(spanFecha);

	//Vaciando input
	document.getElementById("input"+idBoton).value = "";

	actualizarContador(idBoton);
}

function actualizarContador(idComments){
	var elemento = document.getElementById("colocarComments"+idComments);
	var numComments = elemento.getElementsByTagName("p").length;
	console.log("Total comentarios: " + numComments);
	var actualizarBoton = document.getElementById("botonContadorComentario"+idComments);
	actualizarBoton.textContent = "Comentarios (" + numComments + ")";
}

