
function sacaFoto(){
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50, //String en formato JSON
		destinationType: Camera.DestinationType.FILE_URI
	});
}

function onSuccess(ruta) { //ruta de la imagen
    var image = document.getElementById('myImage');
    image.src = ruta;
	
	function win(r) {
		alert("Foto subida OK! :)");
	}
	
	function fail(error) {
		alert("No se pudo subir :(");
	}
	
	var uri = encodeURI("200.26.189.133/~ucymxbzr/fotos/upload.php");

	var options = new FileUploadOptions();
	options.fileKey="foto"; //Nombre con el que lo leo en el servidor
	options.fileName="ANTO_"+ruta.substr(ruta.lastIndexOf('/')+1); //Personalizar el nombre de archivo
	//options.mimeType="image/jpeg"; Por default es jpg
	
	var ft = new FileTransfer();
	ft.onprogress = function(progressEvent) {
		if (progressEvent.lengthComputable) {
		  var percent = progressEvent.loaded/progressEvent.total*100;
		  $("#porcentaje").html("Subido: " + percent + "%");
		}
	};
	ft.upload(ruta, uri, win, fail, options);
}

function onFail(message) {
    alert('Failed because: ' + message);
}
