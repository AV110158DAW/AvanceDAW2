
window.onload = function(){

	document.querySelector('#save').addEventListener('click', guardando);
	imprimir();

	function guardando(){
		var gNombre = document.querySelector('#nombre').value,
			gCorreo = document.querySelector('#correo').value,
			gPais = document.querySelector('#pais').value,
			gComentario = document.querySelector('#comentario').value;

		guardar(gNombre, gCorreo, gPais, gComentario);
		imprimir();
	}

	function imprimir(){
		var lista = listar(),
			tbody = document.querySelector('#Tabla tbody');

		tbody.innerHTML = '';

		for(var i = 0 ; i < lista.length; i++){

			var fila = tbody.insertRow(i),
				 celdaNombre = fila.insertCell(0),
				 celdaCorreo = fila.insertCell(1),
				 celdaPais = fila.insertCell(2),
				 celdaComentario = fila.insertCell(3);

			celdaNombre.innerHTML = lista[i].name;
			celdaCorreo.innerHTML = lista[i].correo;
			celdaPais.innerHTML = lista[i].pais;
			celdaComentario.innerHTML = lista[i].comentario;


			tbody.appendChild(fila);			
		}

	}

}