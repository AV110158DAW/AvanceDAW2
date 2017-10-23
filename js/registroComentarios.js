var comentario = [];

	function guardar(tNombre, tCorreo, tPais, tComentario) {
		
		var nuevoComentario = {
			name: tNombre,
			correo: tCorreo,
			pais: tPais,
			comentario: tComentario
		};

		console.log(nuevoComentario);
		comentario.push(nuevoComentario);
		localStoreLista(comentario);

	}

	function listar(){
		var comprobacion = localStorage.getItem("ListaLocal");

		if(comprobacion == null){
			comentario = [];
		}else{
			comentario = JSON.parse(comprobacion);
		}

		return comentario;
	}

	function localStoreLista(list){
		localStorage.setItem("ListaLocal", JSON.stringify(list));
	}